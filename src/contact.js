import React from 'react';
import './App.css';


function Contact() {
    return (
        <div className="contact_form">
            <header>

                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask anything you have in mind</p>
            </header>
            <form action=''>
                < div classname='contact_flex'>

                    <label for="first_name" id="first_name" className='input'>Your first name</label>
                    <input type="text" id="name" required placeholder="Enter your First Name" />



                    <label for="last_name" id="last_name" className='input'>Your last name</label>
                    <input type="text" id="last_name" required placeholder="Enter your Last Name" />

                </div>

                <div classname="Wrap">
                    <label for="email" id="email-label">Your email</label>
                    <input type="email" id="email" required placeholder="Your@email.com" className='input' />
                </div>


                <div classname="Wrap">
                    <label for="message" id="messsage-label"></label>
                    <textarea id="message" cols="30" rows="10" name="message" placeholder="Send me a message and i'll reply you as soon as possible..." required></textarea>
                </div>
                <div className='check'>
                    <input type="checkbox" required /> <span>You agree to providing your data to Zuri who may contact you.</span>
                </div>

                <div classname="sub">
                    <button type="submit" id='btn_submit'>Send Message</button>
                </div>


            </form>

        </div >

    );
}

export default Contact; 
