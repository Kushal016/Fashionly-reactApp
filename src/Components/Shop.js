import React from 'react'
import '../Style.css'
import '../css/shop.css'
import { Link } from 'react-router-dom'
const Shop = () => {
    return (
        <section id="shop">
            <div class="row">
                <div class="content">
                    <p>Crafted from our exclusive “vegan” leather, this cruelty-free collection is both chic and
                        sustainable. Available in very limited quantities from select stockists.</p>
                </div>
                <div class="shop-now">
                    <Link to="/userForm">Shop Now</Link>
                </div>
            </div>
        </section>
    )
}

export default Shop
