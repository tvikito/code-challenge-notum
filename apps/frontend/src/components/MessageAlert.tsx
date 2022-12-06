interface Props {
  children: React.ReactNode
  className: string
}

const MessageAlert: React.FC<Props> = ({ children, className }) => (
  <div className={`flex items-center w-full bg-red-100 rounded-md p-3 gap-2 ${className}`}>
    <div className='w-6 mx-1 text-red-400'>
      <svg
        className='fill-current'
        focusable='false'
        aria-hidden='true'
        viewBox='0 0 24 24'
        data-testid='ErrorOutlineIcon'
      >
        <path d='M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'></path>
      </svg>
    </div>
    <div className='text-base text-red-400'>{children}</div>
  </div>
)

export default MessageAlert
