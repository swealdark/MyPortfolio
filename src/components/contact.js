


import '../stylesheets/contact.css';
import { useState } from 'react';
import Github from '../sources/github.svg';
import Linkedin from '../sources/linkedin.svg';
import Nav from './nav';

function Contact(){
    
    // // const [email, setEmail] = useState("");
    // // const [message,setMessage] = useState("");
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     //usar appi para enviarnos el mensjae jsjsjsj
    // }
   
    return(
        <div>
            <Nav/>
            <div className='contact-container'>
                <form action="https://formsubmit.co/cell9125@gmail.com" method="POST" >
                    <h3>Contact</h3>
                    <label htmlFor='email'>Email:</label>
                    <input required id='email' type='email' name='email' />
                    <label htmlFor='message'>Message: </label>
                    <textarea id='message'  name='Message' />
                    <input type='submit' className='inputSubmit' value='Enviar'/>
                </form>
                <div className='icon'>
                    <a href='https://github.com/swealdark' target='_blank'><img src={Github} alt='github'/></a>
                    <a href='https://www.linkedin.com/in/angel-l-135634142/' target='_blank'><img src={Linkedin} alt='linkedin' /></a>
                    
                   
                </div>
            </div>
            
        </div>
    );
}




export default Contact;