"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const tab = [
    {
        title: "About",
        url: "/About",
    },
    {
        title: "Projects",
        url: "/Project"
    },
    {
        title: "Resume",
        url: "/Resume"
    }
]


const NavLink = ({ href, title }) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
            {title}
        </Link>
    )
}

const MenuOverlay = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.url} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

function Navbar() {
    const [navbaropen, setnavbaropen] = useState(false);


    return (
        <nav className='fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-4'>
                <Link href="/" className='text-xl md:text-5xl text-white font-pacifico font-semibold'>
                    Sandeep
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {!navbaropen ? (
                        <button onClick={() => { setnavbaropen(true) }}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <GiHamburgerMenu className='h-5 w-5' />
                        </button>
                    ) : (
                        <button
                            onClick={() => setnavbaropen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <IoMdClose className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-6 mt-0'>
                        {
                            tab.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.url} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbaropen ? <MenuOverlay links={tab} /> : null}
        </nav>
    )
}

export default Navbar