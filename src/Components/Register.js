import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import '../Style.css'
import '../css/register.css'

const UserForm = () => {

    const history = useHistory();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");



    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = {
            userName: userName,
            email: email,
            city: city,
            phone: phone
        }
        history.push({
            pathname: '/registration-success',
            newEntry

        })
    }

    return (
        <section>
            <div className="row container">
                <form id="login" action="" onSubmit={submitForm}>
                    <h1> Registretion for shopping </h1>
                    <h3>Hello, Great to see you!</h3>
                    <div>
                        <label className="label" htmlFor="">Username</label>
                        <input name="uname" className="form-control"
                            type="text" value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label" htmlFor="">Email</label>
                        <input name="email" className="form-control"
                            type="text" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label" htmlFor="">City</label>
                        <input name="city" className="form-control"
                            type="text" value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label" htmlFor="">Contact No.</label>
                        <input name="phone" className="form-control"
                            type="text" value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>

                    <button className="btn" type="submit"> SUBMIT</button>

                </form>
            </div>

        </section>

    )
}

export default UserForm;