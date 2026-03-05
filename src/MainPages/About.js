import React from "react";
import Header from "../HomePageComponents/Header";
import { Link } from "react-router-dom";
import Aboutus from "../Images/AboutUs.jpg"
import Fe from "../Images/FE.jpg"
import AutoInsurance from "../Images/AutoInsurance.jpg"
import CallBack from "../Images/CallBack.jpg"
import Medicare from "../Images/Medicare.jpg"
import Solar from "../Images/Solar.jpg"
import AutoWarranty from "../Images/AutoWarranty.png"
import HomeImp from "../Images/HomeImp.jpg"
import Web from "../Images/Web.jpg"
import Graphic from "../Images/Graphic.jpg"
import Footer from "../HomePageComponents/Footer";
function About() {
  return (
    <div className="">
     <Header/>
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 text-center md:text-left text-white space-y-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-4">
            Welcome to <b>Touch Sky Communications </b>
          </h2>
          <p className="text-lg sm:text-xl md:text-lg text-gray-200">
            At Touch Sky Communications , we are committed to offering top-notch customer service through our dedicated and experienced team of professionals. We ensure that your needs are met with precision and care, every time you reach out to us.
          </p>
          <p className="text-lg sm:text-xl md:text-lg text-gray-200">
            Our mission is simple: To deliver solutions that exceed expectations. With cutting-edge technology and a team of experts, we are here to provide you with an outstanding experience.
          </p>
          <div className="mt-8">
            <Link
              to={"/contact"}
              className="inline-block px-6 py-3 text-lg font-semibold text-blue-700 bg-white rounded-full hover:bg-gray-100 transition duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className=" hidden md:block md:w-1/2 " >
          <img
            src={Aboutus} // Replace with your image URL
            alt="Call Center"
            className="w-full md:w-[65%] md:ml-auto h-auto rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We stand out from the competition by offering tailored solutions and a
          commitment to providing excellent service. Here's why our clients
          choose us.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is always available to assist you, day or night, ensuring
              you get the help you need when you need it most.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Satisfaction</h3>
            <p className="text-gray-600">
              Our focus is on delivering exceptional customer experiences,
              ensuring satisfaction with every interaction.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Technology</h3>
            <p className="text-gray-600">
              We use the latest technology to streamline operations and deliver
              efficient, accurate, and timely services to our customers.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experienced Agents</h3>
            <p className="text-gray-600">
              Our agents are highly trained, skilled professionals who handle all
              inquiries with the utmost care and attention.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom Solutions</h3>
            <p className="text-gray-600">
              We understand that each client is unique, so we offer customized
              solutions to meet your specific needs and objectives.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Security & Privacy</h3>
            <p className="text-gray-600">
              We prioritize the security and privacy of your data, ensuring that
              all information is handled with the highest level of confidentiality.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          Our Industry Expertise
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          With extensive experience across various sectors, we offer customized solutions that cater to your business needs.
        </p>

        {/* Industry Expertise Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Industry 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Healthcare</h3>
            <p className="text-gray-600">
              Our call center provides reliable patient support services, ensuring confidentiality and care at every step of the healthcare journey.
            </p>
          </div>

          {/* Industry 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">E-commerce</h3>
            <p className="text-gray-600">
              We provide efficient customer support for online stores, managing inquiries, order tracking, and returns with ease.
            </p>
          </div>

          {/* Industry 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automotive</h3>
            <p className="text-gray-600">
              We provide automotive support, managing bookings, service inquiries, and customer feedback with efficiency.
            </p>
          </div>

          {/* Industry 4 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Food & Beverage</h3>
            <p className="text-gray-600">
              Our team handles orders, customer service, and product inquiries, ensuring great customer experiences.
            </p>
          </div>

          {/* Industry 5 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Manufacturing</h3>
            <p className="text-gray-600">
              We provide support for logistics, customer service, and technical inquiries, ensuring seamless manufacturing operations.
            </p>
          </div>

          {/* Industry 6 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-4 text-blue-500 text-3xl">
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">B2B Services</h3>
            <p className="text-gray-600">
              We specialize in lead generation, relationship management, and follow-ups, delivering impactful results for B2B businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
   <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Our Specialized Services
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          We offer expert services with customized solutions that cater to your business needs. Here's a list of our specialized services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="relative group">
            <img
              src={Fe}
              alt="Final Expense Live Transfer"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Final Expense Live Transfer</h3>
              <p className="mb-4">
                We provide live transfers for final expense inquiries, connecting clients with agents for immediate assistance and conversions.
              </p>
              <Link to={"/Services"} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>

          <div className="relative group">
            <img
              src={CallBack}
              alt="Call Back / Paper Leads"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Call Back / Paper Leads</h3>
              <p className="mb-4">
                Our call back and paper lead services generate high-quality leads, providing your business with targeted prospects for efficient follow-up.
              </p>
              <Link to={"/Services"} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>

          <div className="relative group">
            <img
              src={AutoInsurance}
              alt="Auto Insurance Live Transfers"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Auto Insurance Live Transfers and Leads</h3>
              <p className="mb-4">
                We specialize in auto insurance live transfers and lead generation, ensuring smooth and immediate connections with potential clients.
              </p>
              <Link to={"/Services"} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>

          <div className="relative group">
            <img
              src={Medicare}
              alt="Medicare Live Transfers"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Medicare Live Transfers and Leads</h3>
              <p className="mb-4">
                We connect clients with Medicare agents through live transfers, delivering targeted leads for optimal conversion and customer service.
              </p>
              <Link to={"/Services"} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>

          <div className="relative group">
            <img
              src={Solar}
              alt="Solar Live Transfers"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Solar Live Transfers and Leads</h3>
              <p className="mb-4">
                We provide live transfers and leads for solar energy services, connecting environmentally-conscious customers with solar solutions.
              </p>
              <Link to={"/Services"} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>

          <div className="relative group">
            <img
              src={AutoWarranty}
              alt="Auto Warranty Live Transfers"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Auto Warranty Live Transfers and Leads</h3>
              <p className="mb-4">
                Our live transfer and lead generation services for auto warranties ensure quick connections with interested customers, driving sales.
              </p>
              <Link to={"/Services"} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>

          <div className="relative group">
            <img
              src={HomeImp}
              alt="Home Improvement Live Transfers"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Home Improvement Live Transfers and Leads</h3>
              <p className="mb-4">
                We provide live transfers and lead generation for home improvement services, connecting homeowners with skilled contractors.
              </p>
              <Link to={"/Services"} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>

          <div className="relative group">
            <img
              src={Web}
              alt="Web Development"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="mb-4">
                Our professional web development services help you build responsive, user-friendly websites that meet your business needs.
              </p>
              <Link to={"/Services"} className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>

          <div className="relative group">
            <img
              src={Graphic}
              alt="Graphic Designing"
              className="w-full h-full object-cover rounded-lg shadow-lg group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
              <h3 className="text-2xl font-semibold mb-4">Graphic Designing</h3>
              <p className="mb-4">
                Our graphic design services create visually stunning designs for your business, helping you make a lasting impression.
              </p>
              <Link to={"/Services"}  className="text-blue-500 hover:underline">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default About;
