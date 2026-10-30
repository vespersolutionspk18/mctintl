'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { isLanguage, translateText, type Language } from '../i18n/translations'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)
const observedAttributes = ['alt', 'title', 'placeholder', 'aria-label', 'aria-description', 'content']

function normalized(value: string) {
  return value.replace(/\s+/g, ' ').trim()
}

function translateDocument(root: Element, previous: Language, next: Language, originals: WeakMap<Text, string>, attributeOriginals: WeakMap<Element, Map<string, string>>) {
  const translateNode = (node: Text) => {
    const current = node.nodeValue ?? ''
    let original = originals.get(node)
    if (original === undefined) {
      original = current
      originals.set(node, original)
    } else {
      const expectedPrevious = translateText(original, previous)
      if (normalized(current) !== normalized(expectedPrevious) && normalized(current) !== normalized(original)) {
        original = current
        originals.set(node, original)
      }
    }

    if (!original.trim()) return

    const leading = original.match(/^\s*/)?.[0] ?? ''
    const trailing = original.match(/\s*$/)?.[0] ?? ''
    const end = trailing.length ? original.length - trailing.length : original.length
    const middle = original.slice(leading.length, end)
    const replacement = `${leading}${translateText(middle, next)}${trailing}`
    if (replacement !== current) node.nodeValue = replacement
  }

  const translateAttributes = (element: Element) => {
    let known = attributeOriginals.get(element)
    if (!known) {
      known = new Map<string, string>()
      attributeOriginals.set(element, known)
    }

    for (const name of observedAttributes) {
      const current = element.getAttribute(name)
      if (current === null) continue
      let original = known.get(name)
      if (original === undefined) {
        original = current
        known.set(name, original)
      } else {
        const expectedPrevious = translateText(original, previous)
        if (normalized(current) !== normalized(expectedPrevious) && normalized(current) !== normalized(original)) {
          original = current
          known.set(name, original)
        }
      }

      const replacement = translateText(original, next)
      if (replacement !== current) element.setAttribute(name, replacement)
    }
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  let currentNode = walker.nextNode()
  while (currentNode) {
    const parent = currentNode.parentElement
    if (parent && !parent.closest('script,style,noscript')) translateNode(currentNode as Text)
    currentNode = walker.nextNode()
  }

  translateAttributes(root)
  root.querySelectorAll('*').forEach(translateAttributes)
}

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, updateLanguage] = useState<Language>('en')
  const appliedLanguage = useRef<Language>('en')
  const textOriginals = useRef(new WeakMap<Text, string>())
  const attributeOriginals = useRef(new WeakMap<Element, Map<string, string>>())

  const setLanguage = useCallback((next: Language) => {
    updateLanguage(next)
    window.localStorage.setItem('microtex-language', next)
  }, [])

  useEffect(() => {
    const stored = window.localStorage.getItem('microtex-language')
    if (stored && isLanguage(stored)) updateLanguage(stored)
  }, [])

  useEffect(() => {
    const previous = appliedLanguage.current
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    translateDocument(document.documentElement, previous, language, textOriginals.current, attributeOriginals.current)
    appliedLanguage.current = language

    const observer = new MutationObserver((records) => {
      const activeLanguage = appliedLanguage.current
      for (const record of records) {
        if (record.type === 'characterData' && record.target instanceof Text) {
          translateDocument(record.target.parentElement ?? document.documentElement, activeLanguage, activeLanguage, textOriginals.current, attributeOriginals.current)
        } else if (record.type === 'attributes' && record.target instanceof Element) {
          translateDocument(record.target, activeLanguage, activeLanguage, textOriginals.current, attributeOriginals.current)
        } else {
          record.addedNodes.forEach((node) => {
            if (node instanceof Element) translateDocument(node, activeLanguage, activeLanguage, textOriginals.current, attributeOriginals.current)
            else if (node instanceof Text) translateDocument(node.parentElement ?? document.documentElement, activeLanguage, activeLanguage, textOriginals.current, attributeOriginals.current)
          })
        }
      }
    })

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: observedAttributes,
    })

    return () => observer.disconnect()
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used inside LanguageProvider')
  return value
}
