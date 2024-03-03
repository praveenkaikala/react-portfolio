import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import './contact.css'; // Your custom CSS file
import * as yup from 'yup';


import { Alert, Button, TextField } from '@mui/material';

const Contact = () => {
  const ref = useRef();
  const [send,setSend]=useState(false)
  const validationSchema = yup.object({
    user_name: yup.string().required('Name is required'),
    user_email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Message is required'),
  });

  const sendEmail = () => {
    emailjs
      .sendForm('service_sq7j3e8', 'template_2s3dgic', ref.current, 'SxTnRoUmxsMcJHqPz')
      .then(() => {
        console.log("Email sent successfully");
        setSend(true)
        setTimeout(() => {
          setSend(false);
        }, 2000)
      })
      .catch((err) => {
        console.error("Error sending email:", err);
      });
  };

  return (
    <section className="contact" id="contact1">
      <div className="contactbox">
        <h3>Contact me</h3>
        <div style={{ width: "50%", backgroundColor: "white", margin: "10px", borderRadius: "20px" }}>
          <Formik
            initialValues={{
              user_name: '',
              user_email: '',
              message: '',
            }}
            
            onSubmit={(values,{resetForm})=>{
              sendEmail()
              resetForm()
            }}
          >
            <Form ref={ref} style={{ margin: "10px", display: "flex", flexDirection: "column", gap: "10px", zIndex: -1 }}>
              <TextField name="user_name" id="outlined-basic" label="Name" variant="outlined" />
              <ErrorMessage name="user_name" component="div" className="error" style={{color:"red"}}/>
              <TextField name="user_email" id="outlined-basic" label="Email" type='email' variant="outlined" />
              <ErrorMessage name="user_email" component="div" className="error" style={{color:"red"}}/>
              <TextField id="outlined-multiline-flexible" label="Message" multiline maxRows={4} name="message" variant="outlined" />
              <ErrorMessage name="message" component="div" className="error" style={{color:"red"}}/>
              <Button variant="contained" type="submit">Send</Button>
              <p style={{color:"blue"}}>
                {send ? "email send successfully" : ""}
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
