import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label: string
}

const Input: React.FC<Props> = ({ label, className, ...rest }) => (
  <div className={`relative ${className}`}>
    <input
      type='text'
      placeholder='john@doe.com'
      {...rest}
      id={label}
      name={label}
      className='peer px-4 py-7 h-10 w-full border-2 border-gray-300 rounded-md text-gray-900 placeholder-transparent focus:outline-none focus:border-red-600'
    />
    <label
      htmlFor={label}
      className='absolute left-2 -top-2.5 px-1 bg-white rounded-t-md text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm'
    >
      {label}
    </label>
  </div>
)

export default Input
