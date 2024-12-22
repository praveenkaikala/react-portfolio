import AnimatedSection from '../AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email',
      value: 'kaikalapraveen24@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8688379337'
    },
   
  ];

  return (
   <div className='flex flex-col gap-10'>
      {contactDetails.map(({ icon: Icon, title, value }, index) => (
        <div key={index} className="flex items-center space-x-4 ">
          <div className="p-3 bg-purple-100 rounded-lg">
            <Icon className="w-6 h-6 text-purple-600" />
          </div>
          <div className='flex items-center'>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-gray-600">{value}</p>
          </div>
        </div>
      ))}
   </div>
   
  );
}

export default ContactInfo;