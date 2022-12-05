const Header: React.FC = () => (
  <header>
    <div>
      <div className="py-2">
        <a
          href="mailto:hi@tomasvykoukal.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <span className="icon flaticon-email" />
          <span className="hidden sm:inline-block ml-2">
            hi@tomasvykoukal.com
          </span>
        </a>
      </div>
    </div>
  </header>
)

export default Header
