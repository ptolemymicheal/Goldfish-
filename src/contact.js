import React from 'react';
import './App.css';


function Contact() {
    return (
        <div className="Contact">
            <form classname="contact">
                <fieldset>
                    <h1>Send a message</h1>
                    <p>Hi there, contact me to ask anything you have in mind</p>

                    <div classname="Wrap">
                        <label for="first_name" id="first_name">Your first name</label>
                        <input type="text" id="name" required placeholder="Enter your First Name" />
                    </div>

                    <div classname="Wrap">
                        <label for="last_name" id="last_name">Your last name</label>
                        <input type="text" id="last_name" required placeholder="Enter your Last Name" />
                    </div>


                    <div classname="Wrap">
                        <label for="email" id="email-label">Your email</label>
                        <input type="email" id="email" required placeholder="Your@email.com" />
                    </div>


                    <div classname="Wrap">
                        <label for="message" id="messsage-label"></label>
                        <textarea id="message" rows="5" cols="20" name="message" placeholder="Send me a message and i'll reply you as soon as possible" required></textarea>
                    </div>


                    <div classname="sub">
                        <button type="submit" id='btn_submit'>Send Message</button>
                    </div>
                </fieldset>

            </form>

        </div >

    );
}

export default Contact; 
