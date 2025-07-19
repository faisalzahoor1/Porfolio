import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
export const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "9b0c2218-dfd1-48d8-b67b-56649439c8cb");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            event.target.reset();
        } else {
            console.log("Error", data);
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p><span>I'm currently avaliable to take on new projects,
                        so feel free to send me a message about anything that you wa
                        nt me to work on. You can contact anytime.</span></p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>faisalzahoor96@gmail.com</p>
                        </div>
                        <div className="contact-detail" >
                            <img src={call_icon} alt="" />
                            <p id='No-detail'>+92-3181982143</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Islamabad, Pakistan</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text"  placeholder='Enter your name' name='name' />
                        <label htmlFor="">Your E-mail</label>
                        <input type="email"  placeholder='Enter your e-mail' name='email' />
                        <label htmlFor="">Write your message here</label>
                        <textarea name="message" rows="15" placeholder='Enter your message'></textarea>
                        <button  type='submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}
