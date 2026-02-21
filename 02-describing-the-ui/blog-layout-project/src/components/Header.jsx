const Header = ({navLinks}) => {
    return (
      <nav className='flex items-center justify-between mb-10'>
          {/* Logo */}
          <div>
              <span className='text-3xl font-mono'>B</span>
              <small className='underline'>log</small>
          </div>

          {/* Nav Links */}
          <div className='flex items-center justify-center gap-8'>
            {navLinks.map(link => 
              <a href="" key={link}>
                {link}
              </a>
            )}
          </div>
      </nav>
    )
}

export default Header