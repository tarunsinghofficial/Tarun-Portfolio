import React from "react";
import "../App.css"

function Footer() {
  return (
    <footer className="bg-white dark:bg-dark mt-4">
      <div className="flex w-full p-4 text-center justify-center space-x-1">
        <p className="font-sans text-gray-900 dark:text-gray-200 text-1xl">
          Made with ❤️ by Tarun Singh
        </p>
        <p>|</p>
        <p className="font-sans text-gray-900 dark:text-gray-200 text-1xl">
          Copyright &copy;
          <span className="hover:drop-shadow-xl w-20 rounded p-1">Tarun</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
