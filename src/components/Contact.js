import React from "react";
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-solid-svg-icons";
export default function Contact () {

    const { theme, toggle, dark } = useContext( ThemeContext );
    return (


        <body>
            {/* <div> */}
            <div className='contact-body' style={{
                backgroundColor: theme.color,
                color: theme.backgroundColor
            }}>
                <div class="contact-card">
                    <a href="tel:0123456789">
                        <FontAwesomeIcon className="icon" icon={faPhone} />
                    </a>
                    <p >+84 123456789</p>
                </div>
                <div class="contact-card">
                    <a href="mailto:dinhthienhoang0408@gmail.com">
                        <FontAwesomeIcon className="icon" icon={faMailBulk} />
                    </a>
                    <p>dinthienhoang0408@gmail.com</p>
                </div>
                <div class="contact-card">
                    <a href="https://www.facebook.com/profile.php?id=100012068957881" target="_blank">
                        <img src='assets\images\Facebook_f_logo_(2019).svg.webp' alt='' />
                    </a>
                    <p>FaceBookInfo</p>
                </div>
            </div>
            {/* </div> */}
        </body>
    );
}