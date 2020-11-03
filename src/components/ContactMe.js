import React from 'react';
import './ContactMe.css'

function ContactMe() {
    return (
        <div class="container-fluid border border-light rounded bg-white mb-3 mt-2 w-50 p-auto">
            <h3 className="display-4 border-bottom">Contact Me</h3>
            <form className="form">
                <label>Name</label>
                <input placeholder="Name"/>

                <label>Email</label>
                <input placeholder="Email"/>

                <label>Message</label>
                <textarea placeholder="Message" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactMe;