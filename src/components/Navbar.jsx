import React from 'react'
import logo from '/logo1.png'


function Navbar() {
  return (  
   

<nav className="absolute md:px-0 px-5  top-3 md:top-10 left-0 w-full z-50 border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-16" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Travl.AI</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="text-black font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">

        <li>
          <a className=" cursor-pointer block font-semibold text-white rounded md:border-0 md:px-3 md:py-1 md:hover:bg-gray-200 md:hover:rounded-2xl duration-200">Community Trips</a>
        </li>
        <li>
          <a className="cursor-pointer block font-semibold  text-white md:border-0 md:px-3 md:py-1  md:hover:bg-black rounded-2xl md:hover:text-white duration-200">Sign In</a>
        </li>
      

      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar