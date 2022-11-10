import React, { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link";
import ChiefGeekLogo from "../../public/chiefgeek_logo.png"

const Navbar = () => {
    return (
        <nav className="bg-white flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src={ChiefGeekLogo} alt="Chief Geek" className="w-28"/>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                
            </div>
            <div>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Docs
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Examples
                </a>
                <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                Blog
                </a>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;