import React from 'react';
import './ContactMe.css'

function ContactMe() {
    return (
        <div class="container-fluid border border-light rounded bg-white mb-3 mt-2 w-50 p-auto">
            <h1 className="display-4 border-bottom">Contact Me</h1>
            <div className="icons">
                <a href="https://github.com/Nodirbek94" target="_blank"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/nodirbek-maksudov-a74788186/" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="mailto:nodirbekmaksudov@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                <a href="tel:2675547743" target="_blank"><i className="fas fa-phone-square"></i></a>
            </div>
            <form className="form">
                <label>Name</label>
                <input placeholder="Name" />

                <label>Email</label>
                <input placeholder="Email" />

                <label>Message</label>
                <textarea placeholder="Message" />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactMe;