import React from 'react'
import { Link } from 'react-router-dom'
import '../Style.css'
import '../css/nav.css'
const Header = () => {
    return (
        <header>
            <nav>
                <div className="row">
                    <Link className="logo" to="/" >Fashionly</Link>
                    <ul className="main-nav">

                        <li><Link to="/pictures">Lookbook</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/contact">About</Link></li>
                        <li><a href="https://www.instagram.com/princevegetas/">Instagram</a></li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Header
