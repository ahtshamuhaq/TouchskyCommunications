import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png"
const Header = () => {


  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#fff]  ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full  relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to={"/"}>
            <img src={Logo} alt="blank"
              className="text-sm h-16 w-16 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
            />
            </Link>
             
            
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link to={"/"}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Services"}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Pricing"}
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-black hover:opacity-75"
                  to={"/Contact"}
                >
                  <span className="ml-2">Contact Us</span>
                </Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
