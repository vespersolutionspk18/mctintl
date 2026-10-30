import React from 'react'

interface ButtonProps {
  href: string
  text: string
  variant?: 'red' | 'white' | 'black' | 'gray'
  className?: string
}

const Button: React.FC<ButtonProps> = ({ href, text, variant = 'red', className = '' }) => {
  const baseClasses =
    'text-lg inline-block rounded-sm px-3 py-1 font-medium leading-tight tracking-tighter font-stylish transition-colors'

  const variantClasses = {
    red: 'bg-red-700 text-white hover:bg-red-800',
    black: 'bg-black text-white hover:bg-neutral-800',
    white: 'bg-gray-100 text-black hover:bg-gray-200',
    gray: 'bg-gray-500 text-white hover:bg-gray-600',
  }

  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {text}
    </a>
  )
}

export default Button
