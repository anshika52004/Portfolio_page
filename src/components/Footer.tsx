import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Anahika Agarwal. All rights
          reserved.
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 mx-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 mx-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 mx-2 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
