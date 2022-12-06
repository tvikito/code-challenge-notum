import React from 'react'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ children, className, ...rest }) => (
  <button
    className={`bg-red-500 px-4 py-3 rounded-md hover:bg-red-400 text-white font-semibold uppercase transition ease-in-out duration-500 disabled:opacity-30 ${className}`}
    {...rest}
  >
    {children}
  </button>
)

export default Button
