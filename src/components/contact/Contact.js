import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

import './contact.css'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sq7j3e8', 'template_2s3dgic', form.current, 'SxTnRoUmxsMcJHqPz')
      .then( (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section className='contact'>
      <h3>contact me</h3>
      <div className='contactbox'>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" className='msgbox' />
      <input type="submit" className='btn' value="Send" />
    </form>
      </div>
    </section>
  )
}

export default Contact