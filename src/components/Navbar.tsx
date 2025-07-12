"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiArrowRightCircle, FiMenu, FiX ,FiUser} from "react-icons/fi";

export default function Navbar() {
  const [Open, setOpen] = useState(false);
    const path = usePathname()
    console.log(path)
    const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Sender", link: "/sender" },
    { name: "Receiver", link: "/receiver" },
  ];

  return (
    <nav className="relative container mx-auto flex items-center justify-between my-7 px-6">
      {/* Mobile: Menu Icon */}
      <button className="md:hidden text-3xl z-10" onClick={() => setOpen(true)}>
        <FiMenu />
      </button>

      {/* Logo */}
      <header className="uppercase text-2xl font-bold text-center md:text-left z-10">
        Develop.me
      </header>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 text-lg font-medium" >
        {navItems.map((item) => (
          <li  key={item.link} className={`px-2  ${item.link==path &&'bg-gray-800 rounded-md text-white'}`}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
       <button title="Profile"  className="border rounded-full"><FiUser className="w-6 h-6 "/> </button>

      {/* for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform ${
          Open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-4">
          {navItems.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                onClick={() => setOpen(false)}
                className="block text-lg"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <button className="mt-4 flex items-center border border-gray-400 rounded-full px-4 py-2 bg-white hover:bg-gray-100 transition-colors">
            <FiArrowRightCircle className="w-6 h-6 mr-2" />
            <span className="font-semibold text-gray-800">Schedule a Call</span>
          </button>
        </ul>
      </div>

      {/* Overlay when mobile menu is open */}
      {Open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </nav>
  );
}
