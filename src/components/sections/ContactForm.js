import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

function ContactForm() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [loader,setLoader]=useState(false)
  const sendEmail = () => {
    try {
      setLoader(true)
      emailjs 
      .send('service_sq7j3e8', 'template_2s3dgic', formData, 'SxTnRoUmxsMcJHqPz')
      .then(() => {
        toast.success('Email sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' }); 
      
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
    e.preventDefault();
    sendEmail();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
   
      <form onSubmit={handleSubmit} className="space-y-6 w-2/3 text-gray-700">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
        >
          <span>{loader?"Sending Message":"Send Message"}</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
   
  );
}

export default ContactForm;