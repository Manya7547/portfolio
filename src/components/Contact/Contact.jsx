import { useRef } from 'react';
import "./contact.css";
import { HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s53x8mc', 'template_fwq8n7v', form.current, 'cXginQ40keRVEt1YV')
        e.target.reset();
    };
  
    return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Let's Connect</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">                
                <div className="contact__info">
                    <div className="contact__card">
                        <HiOutlineMail className="contact__card-icon" />
                        
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">manya7547@gmail.com</span>
                        
                        <a href="mailto:manya7547@gmail.com" className="contact__button">
                            Write Me{" "} 
                            <HiOutlineArrowSmRight className="contact__button-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Contact;