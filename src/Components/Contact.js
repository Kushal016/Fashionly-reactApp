import React from 'react'
import '../Style.css'
import '../css/contact.css'
import Author from '../pics/author.jpg'
const Contact = () => {
    return (
        <section id="contact">
            <div className="row">
                <div className="contact">
                    <div className="contact-info">
                        <div><i className="fas fa-envelope"></i><a href="#"> kkushal358@gmail.com </a> </div>
                        <div><i className="fab fa-whatsapp"></i>+91 6290558589</div>
                        <div><i className="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
                    </div>
                    <div className="con-pic">
                        <img src={Author} alt="Author pic" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
