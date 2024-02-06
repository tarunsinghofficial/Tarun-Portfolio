import React from "react";

function ListItem({logo, title, company, date, location, description}) {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center bg-white dark:bg-dark p-2 border border-gray-400 rounded-lg gap-4 my-6 transform transition duration-1000 hover:scale-95">
        {/* Logo here */}
        <div className="md:w-1/12 w-44 flex flex-col items-center">
          <img src={logo} alt="logo" className="text-center w-24 h-24 rounded-full" />
        </div>
        {/* Content goes here */}
        <div className="w-10/12 sm:w-fit px-2 flex flex-col md:flex-row lg:flex-row">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between">
            <div className="flex flex-col items-center md:items-start lg:items-start">
              <h1 className="text-lg font-bold dark:text-blue">{title}</h1>
              <h2 className="text-lg text-gray-800 dark:text-[#D1D5DB]">{company}</h2>
              <p className="text-sm mt-4 text-justify text-gray-900 dark:text-[#D1D5DB]">{description}</p>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row my-4 md:my-0 lg:my-0">
              <h3 className="text-sm text-gray-400">{date}</h3>
              <h3 className="text-sm text-gray-400">{location}</h3>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default ListItem;
