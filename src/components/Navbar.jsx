import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex shrink-0 items-center">
          <a href="/" className="cursor-pointer text-2xl font-bold text-white">
            Ashwin<span className="text-gray-500">.</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="cursor-pointer text-sm font-medium text-gray-300 transition-colors duration-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-[2px] w-6 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
            ></span>
            <span
              className={`block h-[2px] w-6 bg-white transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''
                }`}
            ></span>
            <span
              className={`block h-[2px] w-6 bg-white transition-transform duration-300 ease-in-out ${isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute left-0 top-full w-full overflow-hidden bg-black/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-96 border-b border-white/10 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-gray-300 transition-colors duration-300 hover:scale-105 hover:text-white active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar