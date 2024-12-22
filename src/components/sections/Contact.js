
import ContactForm from './ContactForm';

function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
          <h2 className="text-4xl font-bold mb-4 text-black text-center">Contact Me</h2>
          <div className="w-48 h-1 bg-purple-600 mx-auto"></div>
        

        <div className="flex justify-center gap-12 pt-20">
          {/* <ContactInfo /> */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;