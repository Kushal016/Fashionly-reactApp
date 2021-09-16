import React from 'react'
import '../Style.css'
import '../css/lookbook.css'
import p1 from '../pics/1.jpeg'
import p2 from '../pics/2.jpeg'
import p3 from '../pics/3.jpeg'
import p4 from '../pics/4.jpeg'
import p5 from '../pics/5.jpeg'
import p6 from '../pics/6.jpeg'
import p7 from '../pics/7.jpeg'
import p8 from '../pics/8.jpeg'
import p9 from '../pics/9.jpeg'
const Lookbook = () => {
    return (
        <section id="pictures">
            <div className="row main">
                <div className="gallery">
                    <div className="img js-pic-1">
                        <img src={p1} alt="pic1" />
                    </div>
                    <div className="img">
                        <img src={p2} alt="pic2" />
                    </div>
                    <div className="img js-pic-3">
                        <img src={p3} alt="pic3" />
                    </div>
                    <div className="img ">
                        <img src={p4} alt="pic4" />
                    </div>
                    <div className="img">
                        <img src={p5} alt="pic5" />
                    </div>
                    <div className="img js-pic-6">
                        <img src={p6} alt="pic6" />
                    </div>
                    <div className="img">
                        <img src={p7} alt="pic7" />
                    </div>
                    <div className="img js-pic-8">
                        <img src={p8} alt="pic8" />
                    </div>
                    <div className="img">
                        <img src={p9} alt="pic9" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lookbook
