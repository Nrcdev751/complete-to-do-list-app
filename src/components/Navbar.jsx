import React from 'react'

// logo
import navlogo from '../assets/logo.png'

const Navbar = () => {
  return (
    <section className="navbar" id="nav">
    <nav>
     <div className="nav-container">
     <ul className="nav-logo">
                <img className="" src={navlogo} alt="to-do-logo" />
            </ul>
            <ul className="nav-menu">
                <li>หน้าแรก</li>
                <li>เกี่ยวกับ</li>
            </ul>
     </div>
    </nav>
    </section>
  )
}

export default Navbar