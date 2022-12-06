import Me from './Me'

const Header: React.FC = () => (
  <header className='flex justify-between p-4 bg-slate-800 color text text-white'>
    <div>🤗 Wonderful nodes 🚀</div>

    <Me />
  </header>
)

export default Header
