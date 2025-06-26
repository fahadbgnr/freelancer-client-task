import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col items-center bg-base-200 text-base-content p-10 mt-10 space-y-6">
        {/* Logo */}
        <div>
          <img className="w-24" src={Logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav className="grid grid-flow-col gap-4 text-center">
          <a href="#" className="link link-hover">About us</a>
          <a href="#" className="link link-hover">Contact Details</a>
          <a href="#" className="link link-hover">Terms & Conditions</a>
          <a href="#" className="link link-hover">Privacy Policy</a>
        </nav>

        {/* Social Media Icons */}
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/aminulislam.fahad.1"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M22.675 0h-21.35C.597 0 0 .592 0 1.32v21.359C0 23.406.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123V24h6.116C23.404 24 24 23.406 24 22.679V1.32c0-.728-.596-1.32-1.325-1.32z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sheikh-fahad-956777357"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.27h-3v-5.5c0-1.32-1.07-2.4-2.4-2.4s-2.4 1.08-2.4 2.4v5.5h-3v-10h3v1.5c.68-1 1.79-1.5 2.9-1.5 2.48 0 4.5 2.02 4.5 4.5v5.5z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/fahadbgnr"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-blue-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.743.083-.728.083-.728 1.205.084 1.84 1.235 1.84 1.235 1.07 1.835 2.807 1.305 3.492.997.108-.774.418-1.305.76-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.49 11.49 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.11.81 2.245 0 1.62-.015 2.93-.015 3.33 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Copyright */}
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
