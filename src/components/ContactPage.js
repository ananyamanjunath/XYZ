import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-form">
            <h1>Contact Us</h1>
            <form action="/submit-contact" method="post">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactPage;
