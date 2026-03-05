import React from "react";
import Logo from "../Images/Logo.png";
import mail from "../Images/mail.png";
import location from "../Images/location.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-200 text-black py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <img src={Logo} alt="Company Logo" className="h-24" />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to={"/about"} className="hover:font-bold">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to={"/Contact"} className="hover:font-bold">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={"/Services"} className="hover:font-bold">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to={"/Pricing"} className="hover:font-bold">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact & Location</h3>
              <div className="flex items-start gap-3">
                <img src={location} alt="Location" className="w-6 h-6 mt-1" />
                <p className="text-sm">
                  525 Randall Ave Ste 100

                  <br />
                  PMB 463, Cheyenne, WY 82001

                </p>
              </div>
              <div className="flex items-center gap-3">
                <img src={mail} alt="Email" className="w-6 h-6" />
                <a
                  href="mailto:Touchskyleads@gmail.com"
                  className="text-sm hover:font-bold"
                >
                  Touchskyleads@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
                  📞
                </span>
                <a href="tel:+1 725 7124042" className="text-sm hover:font-bold">
                  +1 725 7124042
                </a>
              </div>
            </div>
          </div>

          
          <div className="text-center mt-8 border-t border-gray-700 pt-4">
            <p className="text-sm">© 2025 Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
