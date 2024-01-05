import {useContext} from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LandingPage from '../pages/LandingPage';
import Weather from './Weather';
import Hotel from './Hotel';
import Attraction from './Attraction';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';
import ProtectedRoute from '../Context/PrivateRoute';
import LoginForm from '../pages/LoginPage';
import GlobalContext from '../Context/GlobalContext';
import Logout from '../pages/Logout';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { token } = useContext(GlobalContext);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div>
      <nav id="navbar" className={`navbar ${mobileMenu ? 'active' : ''}`}>
        <ul className={`navbar-desktop`}>
          <li>
            <Link className="nav-link scrollto active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to="/weather">
              Weather
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to="/hotels">
              Hotels
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to="/attractions">
              Attractions
            </Link>
          </li>
          <li>
            <Link className="getstarted scrollto" to="/login">
            </Link>
          </li>
          </ul>

          <ul className={`navbar-mobile ${mobileMenu ? 'active' : ''}`}>
          <li>
            <Link className="nav-link scrollto active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to="/weather">
              Weather
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to="/hotels">
              Hotels
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to="/attractions">
              Attractions
            </Link>
          </li>
          <li>
            <Link className="getstarted scrollto" to="/login">
              Get Started
            </Link>
          </li>
          </ul>
          <div className="nav">
            <i className={`fas ${mobileMenu ? 'fa-times' : 'fa-bars'} mobile-nav-toggle`} onClick={handleMobileMenu}></i>
            </div>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
            path="/login" 
            element={<LoginForm />} />
        <Route 
            path="/logout" 
            element={<Logout />} />
        <Route path="/dashboard" 
            element={<ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>} />
        <Route path="/weather" 
            element={<ProtectedRoute>
                    <Weather /> 
                </ProtectedRoute>} />
        <Route path="/hotels" 
            element={<ProtectedRoute>
                    <Hotel /> 
                </ProtectedRoute>} />
        <Route path="/attractions" 
            element={<ProtectedRoute>
                    <Attraction />
                </ProtectedRoute>} />
      </Routes>
    </div>
  );
};

export default Navbar;

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const solutions = [
  {
    name: 'Destinations',
    description: 'know available locations for lodge',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Hotels',
    description: 'Know available top rated hotels',
    href: '##',
    icon: IconTwo,
  },
]

export  function Hamburger() {
  return (

      <Popover className="md:relative lg:hidden">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'open ' : 'text-opacity-90'}
                nav-icon group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 z-30`}
            >
              <span></span>
              <span></span>
              <span></span>
            </Popover.Button>
            <Popover.Overlay className={' fixed inset-0 bg-black opacity-30 md:hidden z-20'}/>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] md:right-0 md:top-8 md:translate-x-0 md:translate-y-0  mt-3 w-screen max-w-sm  transform px-4 sm:px-0 lg:max-w-3xl z-30">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Login
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        save your booking and flight data
                      </span>
                    </a>
                  </div>
                
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
