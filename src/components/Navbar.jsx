import React from 'react'

// logo
import navlogo from '../assets/logo.png'

const Navbar = () => {
  return (
    <section className="navbar" id="nav">
    <nav>
     <div className="md-container">
     <ul className="nav-logo">
                <img className="" src={navlogo} alt="to-do-logo" />
            </ul>
            <ul className="nav-menu">
                <li><a href="#main">หน้าแรก</a></li>
                <li><a href="#profile">เกี่ยวกับ</a></li>
            </ul>
     </div>
    </nav>
    </section>
  )
}

export default Navbar