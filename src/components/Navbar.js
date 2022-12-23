import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/img/final-logo.png'
export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-gray-900 shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 lg:pt-4 pb-16"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className={
              "text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 text-4xl py-2 whitespace-nowrap uppercase h-10 lg\:w-4\/12 "
            }
            to="/"
          >
            <img className="h-auto " src={Logo} />
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={"text-white fas fa-bars"}
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white z-10 lg:bg-transparent lg:shadow-none text-gray-800" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <span className="inline-block ml-2">About</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <span className="inline-block ml-2">News</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <span className="inline-block ml-2">Our Work</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <span className="inline-block ml-2">Our Team</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <span className="inline-block ml-2">Contact Us</span>
              </a>
            </li>

            <li className="flex items-center">
              <button
                className={
                  "bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i class="fas fa-sign-in-alt"></i>
                <span className="inline-block ml-1">Join Us</span>
              </button>
            </li>
            <li className="flex items-center">
              <button
                className={
                  "bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i class="fas fa-sign-in-alt"></i>
                <span className="inline-block ml-1">Donate</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
