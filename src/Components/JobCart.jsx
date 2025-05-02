import React from 'react';
import companny from '../assets/company_icon.svg';

const JobCart = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-50">
      <div className="flex items-center mb-4">
        <img
          src={companny}
          alt="Company Icon"
          className="h-10 w-10 rounded-full mr-4 transition-all duration-300 transform hover:scale-110"
        />
        <div>
          <h4 className="text-xl font-semibold text-gray-800 hover:text-purple-700 transition-colors duration-300">{job.title}</h4>
          <div className="text-sm text-gray-600 flex gap-3 mt-1">
            <span>{job.location}</span>
            <span>{job.level}</span>
          </div>
        </div>
      </div>
      <p
        className="text-gray-700 text-sm mt-3 mb-4 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      />
      <div className="flex justify-between items-center mt-6 gap-4">
        {/* Apply Now Button: lighter color, smaller */}
        <button className="px-3 py-1 bg-blue-200 text-blue-800 rounded-md hover:bg-blue-300 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-xs">
          Apply Now
        </button>
        {/* Learn More Button: lighter color, smaller */}
        <button className="px-3 py-1 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-200 ease-in-out transform hover:scale-105 text-xs">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCart;
