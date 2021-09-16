import React from 'react'
import '../Style.css'
const Success = (props) => {
    const { userName, city } = (props.location && props.location.newEntry) || {};
    return (
        <section>
            <div className=" success-text">
                <h3>Thanks <b>{userName}!</b> for connecting with us, we are happy to inform you that our delivery record in your <b>{city}</b> city is really great.</h3>
            </div>
        </section>
    )
}

export default Success
