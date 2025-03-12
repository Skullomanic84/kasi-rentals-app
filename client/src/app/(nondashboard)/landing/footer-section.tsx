import Link from "next/link";
import React from "react";
import {
  CiFacebook,
  CiInstagram,
  CiTwitter,
  CiLinkedin,
  CiYoutube,
} from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-col justify-center items-center">
          {/* logo title */}
          <div className="mb-4">
            <Link href="/" className="text-xl font-black" scroll={false}>
              KASIRENTALS
            </Link>
          </div>

          {/* link section */}
          <nav className="mb-4">
            <ul className="flex space-x-6">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </nav>

          {/* icon links */}

          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600"
            >
              <CiFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600"
            >
              <CiInstagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600"
            >
              <CiTwitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600"
            >
              <CiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600"
            >
              <CiYoutube className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* copy right */}
        <div className="mt-4 text-center text-gray-500 text-sm flex justify-center space-x-4">
          <span>&copy; KASIrental. All Rights Reserved.</span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
