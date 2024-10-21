import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 p-4">
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} Made By Sharath
            </p>
          </div>
          <div className="w-full lg:w-1/4 p-4">
            <h3 className="text-base font-semibold mb-3">Company</h3>
            <ul>
              <li className="mb-1">
                <Link className="hover:text-gray-300 text-sm" to="/">Features</Link>
              </li>
              <li className="mb-1">
                <Link className="hover:text-gray-300 text-sm" to="/">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 p-4">
            <h3 className="text-base font-semibold mb-3">Support</h3>
            <ul>
              <li className="mb-1">
                <Link className="hover:text-gray-300 text-sm" to="/">Account</Link>
              </li>
              <li className="mb-1">
                <Link className="hover:text-gray-300 text-sm" to="/">Help</Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 p-4">
            <h3 className="text-base font-semibold mb-3">Legals</h3>
            <ul>
              <li className="mb-1">
                <Link className="hover:text-gray-300 text-sm" to="/">Terms & Conditions</Link>
              </li>
              <li className="mb-1">
                <Link className="hover:text-gray-300 text-sm" to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link className="hover:text-gray-300 text-sm" to="/">Licensing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
