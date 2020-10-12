import React, {useState} from "react";
import "./ContactForm.css";

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        setName("")
        setEmail("")
        setMessage("")
    }

    return (
        <div className="formSpace">

            <h2>Contact Me</h2>
            <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    className="sendername"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={e => setName(e.target.value)}
                />

                <input
                    className="email"
                    type="text"
                    name="Email"
                    value={email}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    className="message"
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Message"
                    onChange={e => setMessage(e.target.value)}
                />
            </form>
            </div>
        </div>
    )
}

export default ContactForm