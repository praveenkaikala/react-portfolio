import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'; // Your custom CSS file
import { Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
const [loader,setLoader]=useState(false)
  const validate = () => {
    const newErrors = {};
    if (!formData.user_name) newErrors.user_name = 'Name is required';
    if (!formData.user_email) {
      newErrors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Invalid email';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const sendEmail = () => {
    try {
      setLoader(true)
      emailjs
      .send('service_sq7j3e8', 'template_2s3dgic', formData, 'SxTnRoUmxsMcJHqPz')
      .then(() => {
        toast.success('Email sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' }); // Reset form
        setErrors({}); // Clear errors
      })
      .catch((err) => {
        console.error('Error sending email:', err);
        toast.error('Failed to send email. Please try again later.');
      });
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoader(false)
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      sendEmail(); // Call sendEmail if no validation errors
    } else {
      setErrors(validationErrors); // Set validation errors to state
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Update form data
  };

  return (
    <section className="contact" id="contact1">
      <div className="contactbox">
        <h3>Contact Me</h3>
        <div style={{ width: "70%",padding:"40px", backgroundColor: "white", margin: "10px", borderRadius: "20px" }}>
          <form onSubmit={handleSubmit} style={{ margin: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <TextField 
              name="user_name" 
              label="Name" 
              variant="outlined" 
              value={formData.user_name} 
              onChange={handleChange} 
            />
            {errors.user_name && <div className="error" style={{ color: "red" }}>{errors.user_name}</div>}
            <TextField 
              name="user_email" 
              label="Email" 
              type="email" 
              variant="outlined" 
              value={formData.user_email} 
              onChange={handleChange} 
            />
            {errors.user_email && <div className="error" style={{ color: "red" }}>{errors.user_email}</div>}
            <TextField 
              name="message" 
              label="Message" 
              multiline 
              maxRows={4} 
              variant="outlined" 
              value={formData.message} 
              onChange={handleChange} 
            />
            {errors.message && <div className="error" style={{ color: "red" }}>{errors.message}</div>}
            <Button variant="contained" type="submit">{loader?"Sending":"Send"}</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
