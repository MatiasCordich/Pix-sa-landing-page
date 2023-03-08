import { useState } from 'react'
import { motion } from 'framer-motion'

import './navbar.css'

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const openMenu = (): void => {
    setNavbarOpen(true)
  }

  const closeMenu = (): void => {
    setNavbarOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className='navbar'>
      <div className='navbar_logo'>
        <img src="https://img.icons8.com/dotty/60/ffffff/pizza.png" />
        <h1>Pix-sa!</h1>
        <img
          onClick={openMenu}
          src="https://img.icons8.com/ios-filled/40/ffffff/menu-rounded.png"
          className='navbar_logo-btn'
          alt='navbar_button'
        />
      </div>

      <ul
        className={`navbar_links ${navbarOpen ? "showMenu" : ""}`}
      >
        <div className='box-btn'>
          <img
            onClick={closeMenu}
            className='navbar_logo-btn-close'
            src="https://img.icons8.com/ios-filled/30/181818/delete-sign--v1.png" />
        </div>
        <motion.li
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .2, delay: 1.5 }}
        >
          <a
            onClick={closeMenu}
            href="#"
          >
            About
          </a>
        </motion.li>
        <motion.li
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .2, delay: 1.7 }}
        >
          <a
            onClick={closeMenu}
            href="#">
            Experience
          </a>
        </motion.li>
        <motion.li
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .2, delay: 1.9 }}
        >
          <a
            onClick={closeMenu}
            href="#">
            Menu
          </a>
        </motion.li>
        <motion.li
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .2, delay: 2.1 }}
        >
          <a
            onClick={closeMenu}
            href="#">
            Contact
          </a>
        </motion.li>
        <div className='logo_box'>
          <img
            onClick={closeMenu}
            src="https://img.icons8.com/dotty/60/181818/pizza.png" />
          Pixsa!
        </div>
      </ul>


    </motion.nav>
  )
}

export default Navbar