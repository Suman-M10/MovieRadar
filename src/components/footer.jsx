import React from 'react'
import Logo from "../assets/logo2.png"
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-4" alt="Flowbite Logo" />
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">MovieRadar</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://www.facebook.com/suman.mahato.5059/" target="_blank" className="hover:underline me-4 md:me-6">Facebook</a>
            </li>
            <li>
              <a href="/" className="hover:underline me-4 md:me-6">Instagram</a>
            </li>
            <li>
              <a href="https://github.com/Suman-M10" target='_blank' className="hover:underline me-4 md:me-6">Github</a>
            </li>
            <li>
              <a href="/" className="hover:underline">LinkedIn</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">MovieRadar™</a>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}

export default Footer