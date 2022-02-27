import { FiChevronDown } from "react-icons/fi";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=' bg-regal-green text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between mx-2 md:mx-12 h-16'>
            <div className='flex items-center'>
              <div className='flex'>
                <ul>
                  <li className='px-2 py-2 rounded-md text-lg font-medium'>
                    <Link to='/'>GlobalSpace</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='hidden md:flex items-center'>
              <div className='flex'>
                <ul>
                  <li className='flex items-center px-2 py-2 rounded-md text-lg font-medium'>
                    <Link to='/'>Global space technolies limited</Link>
                    <FiChevronDown className='pl-2 text-xl' />
                  </li>
                </ul>
              </div>
            </div>

            <div className='flex'>
              <ul className='hidden md:flex'>
                <li className='px-3 py-2 text-sm font-medium w-1/2'>
                  <Link to='/' className='flex flex-row items-center'>
                    <h1 className='hover:text-purple'>Home</h1>
                  </Link>
                </li>
                <li className='px-3 py-2 text-sm font-medium w-1/2'>
                  <Link to='/services' className='flex flex-row item-center'>
                    <h1 className=' hover:text-purple'>Services</h1>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='ml-6 md:hidden' id='mobile-menu'>
              <div ref={ref} className=' sm:px-3'>
                <ul>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className='px-3 py-2 rounded-md text-sm font-medium'
                  >
                    <Link to='/services'>Services</Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className=' px-3 py-2 rounded-md text-sm font-medium'
                  >
                    <Link to='/portfolio'>Portfolio</Link>
                  </li>

                  <li
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className='px-3 py-2 rounded-md text-sm font-medium'
                  >
                    <Link to='/testimonials'>Testimonials</Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <div className='flex flex-row justify-center bg-ciri-for border-b-1 border-gray-600  text-regal-green h-16 items-center'>
        <div className='mx-2'>SPA regular</div>
        <div className='mx-2'>MessageShow</div>
        <div className='mx-2'>Comprehension</div>
        <div className='mx-2'>Pro</div>
        <div className='mx-2'>FAQ</div>
      </div>
    </div>
  );
}

export default Nav;
