import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-6 px-6 flex justify-between items-center">
      {/* Left - Logo */}
      <img
        width={160}
        src={assets.logo}
        alt="Company Logo"
        className="transition-opacity duration-300 hover:opacity-90"
      />

      {/* Right - Social Icons */}
      <div className="flex gap-4">
        <img
          width={38}
          src={assets.instagram_icon}
          alt="Instagram"
          className="transition-transform duration-300 transform hover:scale-110 hover:opacity-80 cursor-pointer"
        />
        <img
          width={38}
          src={assets.twitter_icon}
          alt="Twitter"
          className="transition-transform duration-300 transform hover:scale-110 hover:opacity-80 cursor-pointer"
        />
        <img
          width={38}
          src={assets.instagram_icon}
          alt="Instagram"
          className="transition-transform duration-300 transform hover:scale-110 hover:opacity-80 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;
