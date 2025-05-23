//import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import { FaGithubSquare} from "react-icons/fa";
import{IoMdMail} from "react-icons/io";
import MagneticButton from './MagneticButton';

const Navbar = () => {










  return (
    <nav className="fixed z-20 w-full h-auto bg-transparent backdrop-blur p-4 shadow-md flex justify-between items-center pl-30 md:pl-20">
     
      <ul className="flex space-x-6 text-2xl">
        <li><a href="https://www.linkedin.com/in/rahuldeva5" className="hover:text-teal-400"><FaLinkedin></FaLinkedin></a></li>
        <li><a href="https://github.com/smartthug" className="hover:text-teal-400"><FaGithubSquare></FaGithubSquare></a></li>
        <li><a href="mailto:rahuldeva5555@gmail.com?subject=Hello%20Rahul&body=Hi%20Rahul,%0AI%20saw%20your%20project%20and%20wanted%20to%20connect." className="hover:text-teal-400"><IoMdMail></IoMdMail></a></li>
      </ul>
      
     <MagneticButton ><a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:b6c44fd9-5e0f-4fb8-a61c-5dcc58cba0ae"  className='px-4 py-3 border-2 border-white rounded-2xl bg-transparent' >My Resume</a></MagneticButton> 
    </nav>
  );
};

export default Navbar;
