import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BestSelling = () => {
   const [yearsInBusiness, setYearsInBusiness] = useState(0);
    const [clientsServed, setClientsServed] = useState(0);
    const [successRate, setSuccessRate] = useState(0);
  
    useEffect(() => {
      // Simulate the dynamic counting
      setTimeout(() => setYearsInBusiness(10), 1000);
      setTimeout(() => setClientsServed(2500), 1500);
      setTimeout(() => setSuccessRate(98), 2000);
    }, []);
     const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We provide 24/7 customer support services, including inbound calls, outbound calls, live chat, technical support, and much more."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach out to our customer support team through our contact page, via email, or through our live chat feature."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide variety of industries including e-commerce, healthcare, finance, technology, and more."
    },
    {
      question: "Are your services available globally?",
      answer: "Yes, our services are available globally. We provide support in multiple languages to serve clients worldwide."
    },
  ];
 return (
    <section className="bg-white  py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-8">
          About Us
        </h2>

        {/* Section Description */}
        <p className="text-lg sm:text-xl text-black mb-10">
          We are a dedicated team of customer support professionals committed to providing
          exceptional service 24/7. Our experienced agents are always ready to assist you with
          your needs, ensuring your satisfaction is our top priority.
        </p>

        {/* Values and Mission */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Value 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
           <svg viewBox="0 0 24 24" className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="#fff" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0H24V24H0z"></path> <path d="M12 13c1.657 0 3 1.343 3 3 0 .85-.353 1.616-.92 2.162L12.17 20H15v2H9v-1.724l3.693-3.555c.19-.183.307-.438.307-.721 0-.552-.448-1-1-1s-1 .448-1 1H9c0-1.657 1.343-3 3-3zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2zM4 12c0 2.527 1.171 4.78 3 6.246v2.416C4.011 18.933 2 15.702 2 12h2zm8-10c5.185 0 9.449 3.947 9.95 9h-2.012C19.446 7.054 16.08 4 12 4 9.536 4 7.332 5.114 5.865 6.865L8 9H2V3l2.447 2.446C6.28 3.336 8.984 2 12 2z"></path> </g> </g></svg>
            </div>
            <h3 className="text-2xl font-semibold text-black">24/7 Availability</h3>
            <p className="text-black mt-2">
              Our team is available around the clock to address your concerns and provide
              timely assistance.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
           <svg viewBox="0 0 64 64"  className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#fff" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.91,31.8V26.1a19.09,19.09,0,0,1,38.18,0v5.7" stroke-linecap="round"></path><path d="M12.06,31.8h4.7a0,0,0,0,1,0,0V45.18a0,0,0,0,1,0,0h-4.7a3,3,0,0,1-3-3V34.8A3,3,0,0,1,12.06,31.8Z" stroke-linecap="round"></path><path d="M50.24,31.8h4.7a0,0,0,0,1,0,0V45.18a0,0,0,0,1,0,0h-4.7a3,3,0,0,1-3-3V34.8A3,3,0,0,1,50.24,31.8Z" transform="translate(102.18 76.98) rotate(180)" stroke-linecap="round"></path><path d="M51.7,45.56v5a4,4,0,0,1-4,4H36.56" stroke-linecap="round"></path><rect x="28.45" y="51.92" width="8.1" height="5.07" rx="2" stroke-linecap="round"></rect></g></svg>
            </div>
            <h3 className="text-2xl font-semibold text-black">Expert Support</h3>
            <p className="text-black mt-2">
              Our highly trained agents are ready to provide expert support tailored to your
              specific needs.
            </p>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
  <svg 
    fill="#fff" 
   className="w-16 h-16" 
    version="1.1" 
    viewBox="0 0 512 512" 
    stroke="#fff"
  >
    <g>
      <path 
        d="M256.002,14.009c-69.362,0-125.791,56.431-125.791,125.792s56.43,125.791,125.791,125.791s125.791-56.429,125.791-125.791S325.364,14.009,256.002,14.009z M256.002,248.606c-59.994,0-108.805-48.809-108.805-108.805S196.008,30.995,256.002,30.995c59.994,0,108.805,48.811,108.805,108.806S315.998,248.606,256.002,248.606z"
      />
      <path 
        d="M386.209,246.407c-69.362,0-125.792,56.429-125.792,125.791s56.431,125.792,125.792,125.792S512,441.56,512,372.198S455.57,246.407,386.209,246.407z M386.209,481.005c-59.995,0-108.806-48.811-108.806-108.806c0-59.995,48.811-108.805,108.806-108.805c59.994,0,108.805,48.809,108.805,108.805C495.014,432.194,446.203,481.005,386.209,481.005z"
      />
      <path 
        d="M125.792,246.407C56.431,246.407,0,302.837,0,372.198s56.431,125.792,125.792,125.792s125.791-56.431,125.791-125.792S195.154,246.407,125.792,246.407z M125.792,481.005c-59.995,0-108.806-48.811-108.806-108.806c0-59.995,48.811-108.805,108.806-108.805c59.994,0,108.805,48.809,108.805,108.805C234.597,432.194,185.788,481.005,125.792,481.005z"
      />
      <path 
        d="M296.98,169.991c-3.32-3.317-8.697-3.317-12.014,0c-15.969,15.971-41.957,15.971-57.925,0c-3.318-3.317-8.695-3.317-12.012,0c-3.317,3.317-3.317,8.695,0,12.01c11.298,11.297,26.136,16.945,40.975,16.945c14.839,0,29.677-5.648,40.975-16.945C300.297,178.684,300.297,173.306,296.98,169.991z"
      />
      <path 
        d="M166.767,411.174c-22.595-22.594-59.355-22.595-81.951,0c-3.317,3.317-3.317,8.695,0,12.01c3.318,3.317,8.695,3.317,12.012,0c15.97-15.972,41.959-15.97,57.927,0c1.659,1.658,3.833,2.488,6.006,2.488c2.173,0,4.347-0.829,6.006-2.488C170.083,419.868,170.083,414.49,166.767,411.174z"
      />
      <path 
        d="M421.178,401.443h-69.939c-4.692,0-8.493,3.803-8.493,8.493s3.802,8.493,8.493,8.493h69.939c4.692,0,8.493-3.803,8.493-8.493S425.868,401.443,421.178,401.443z"
      />
      <circle cx="431.904" cy="351.31" r="8.493" />
      <circle cx="340.518" cy="351.31" r="8.493" />
      <circle cx="171.482" cy="351.31" r="8.493" />
      <circle cx="80.096" cy="351.31" r="8.493" />
      <circle cx="210.313" cy="110.354" r="8.493" />
      <circle cx="301.699" cy="110.354" r="8.493" />
    </g>
  </svg>
            </div>
            <h3 className="text-2xl font-semibold text-black">Customer Satisfaction</h3>
            <p className="text-black mt-2">
              Your satisfaction is our priority. We’re committed to providing an outstanding
              customer experience.
            </p>
          </div>
        </div>
      
<button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg mt-24 "> <Link to={"/about"}> Learn More
</Link></button>
      
      </div>
       <section className=" pb-16 mt-20 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl text-black font-semibold mb-8">
          Our Achievements
        </h2>
        {/* Statistics */}
        <div className="grid grid-cols-1 my-24 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Years in Business */}
          <div className="bg-blue-600 rounded-lg p-8 shadow-xl transform transition duration-500 hover:scale-105">
            <h3 className="text-4xl font-bold mb-4">{yearsInBusiness}+</h3>
            <p className="text-xl">Years in Business</p>
          </div>

          {/* Clients Served */}
          <div className="bg-blue-600 rounded-lg p-8 shadow-xl transform transition duration-500 hover:scale-105">
            <h3 className="text-4xl font-bold mb-4">{clientsServed}+</h3>
            <p className="text-xl">Clients Served</p>
          </div>

          {/* Success Rate */}
          <div className="bg-blue-600 rounded-lg p-8 shadow-xl transform transition duration-500 hover:scale-105">
            <h3 className="text-4xl font-bold mb-4">{successRate}%</h3>
            <p className="text-xl">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
     <section className=" sm:mt py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
            <p className="text-xl text-gray-600 mb-4">
              "This company has been amazing! They helped us streamline our processes and provided exceptional customer service. I couldn't be happier with the results."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Client 1"
                className="w-16 h-16 object-cover rounded-full border-2 border-blue-500"
              />
              <div className="ml-4 text-left">
                <p className="font-semibold text-gray-800">Alex</p>
                <p className="text-gray-500">CEO, Genesis</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
            <p className="text-xl text-gray-600 mb-4">
              "Excellent service and great communication! Their team goes above and beyond to meet our needs, and we've seen a significant improvement in our operations."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Client 2"
                className="w-16 h-16 object-cover rounded-full border-2 border-blue-500"
              />
              <div className="ml-4 text-left">
                <p className="font-semibold text-gray-800">Jane Smith</p>
                <p className="text-gray-500">Marketing Manager, Tech Innovators</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
            <p className="text-xl text-gray-600 mb-4">
              "A truly professional team! We had great results from working with them. Their expertise is top-notch, and their dedication is unmatched."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Client 3"
                className="w-16 h-16 object-cover rounded-full border-2 border-blue-500"
              />
              <div className="ml-4 text-left">
                <p className="font-semibold text-gray-800">Michael Lee</p>
                <p className="text-gray-500">Founder, Creative Agency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className=" py-16 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div
                className="flex bg-gray-100 justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {activeIndex === index && (
                <div className="bg-gray-50 px-6 py-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
};

export default BestSelling;
