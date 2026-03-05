import React, { useState } from 'react';
import Header from '../HomePageComponents/Header';
import Footer from '../HomePageComponents/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    try {
      const response = await fetch('https://formspree.io/f/{yourFormID}', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      
      if (response.ok) {
        setStatus('Thank you for reaching out! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('Oops! Something went wrong. Please try again later.');
    }
  };

  return (
    <>
    <Header/>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <p className="text-lg text-center mb-8">
          We would love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-64 md:h-96 mb-8 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.4721284532426!2d-74.00594168404317!3d40.71277627933046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a20c5f6f1c3%3A0x79d35d16636c60f1!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1634926119823!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
              {status && (
                <div className="mt-4 text-center text-lg font-medium text-green-500">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Contact Details</h2>
        <p className="text-lg mb-8">
          Reach out to us through any of the following methods:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Email</h3>
            <p className="text-lg">Touchskyleads@gmail.com</p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Phone</h3>
            <p className="text-lg">+1 725 7124042</p>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Office Address</h3>
            <p className="text-lg">525 Randall Ave Ste 100
PMB 463, Cheyenne, WY 82001</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Office Timings</h3>
            <p className="text-lg">(Mon-Friday) 9am-7pm EST </p>
          </div>
        </div>
      </section>

  
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
