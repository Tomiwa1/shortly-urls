import React from 'react';

function Navbar() {
  return (
    <>
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-cyan-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <ul className="flex flex-col mt-2 md:flex-row md:space-x-8 md:mt-4 md:text-sm md:font-medium">
            <li
              className="block py-2 pr-4 pl-3 text-Fuchsia-900  rounded md:bg-transparent md:text-purple-900 md:p-0 dark:text-white"
              aria-current="page"
            >
              <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                Shortly
              </span>
            </li>
            <li className=" block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:mt-2">
              Features
            </li>
            <li className="block py-2 pr-4 pl-3 text-gray-500  border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:mt-2">
              Pricing
            </li>
            <li className="block py-2 pr-4 pl-3 text-gray-500 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:mt-2">
              Resources
            </li>
          </ul>
        </div>
        <div className=" md:flex justify-end">
          <ul className="flex   md:flex-row md:mb-10">
            <li className="m-1">
              <button className=" rounded-full border-2 px-3 hover:bg-cyan-300">
                Login
              </button>
            </li>
            <li className="m-1">
              <button className="bg-cyan-400 text-slate-100 rounded-full border-2 px-2">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
