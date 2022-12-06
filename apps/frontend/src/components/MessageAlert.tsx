import AlertIcon from './Icons/AlertIcon'

interface Props {
  children: React.ReactNode
  className: string
}

const MessageAlert: React.FC<Props> = ({ children, className }) => (
  <div className={`flex items-center w-full bg-red-100 rounded-md p-3 gap-2 ${className}`}>
    <div className='w-6 mx-1 text-red-400'>
      <AlertIcon />
    </div>
    <div className='text-base text-red-400'>{children}</div>
  </div>
)

export default MessageAlert
