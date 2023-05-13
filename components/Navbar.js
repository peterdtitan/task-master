'use client';
import React, {useState, useEffect}  from 'react';
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';


export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  //<p className="text-white bg-gradient-to-r from-blue-400 via-pink-500 to-red-500">Hello, world!</p>

  const renderChange = mounted ? (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="bg-[#0D091A]/90  dark:bg-gray-800 rounded-full p-3 h-10 w-10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <BsSunFill className="text-yellow-400 bg-inherit" />
      ) : (
        <BsFillMoonFill className="text-yellow-400" />
      )}
    </button>
  ) : null;

  return (
    <div className="flex px-6 py-4 justify-between items-center">
        <p className="text-3xl text-red-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-red-500">TaskMaster</p>
        <div className="hidden font-montserrat md:flex items-center justify-center">
          <p className="px-4 py-2 rounded-md">Features</p>
          <p className="px-4 py-2 rounded-md">Docs</p>
          <p className="px-4 py-2 rounded-md">Pricing</p>     
        </div>

        <div className="flex items-center justify-between">
          {/** Toogle modes*/}
          <div className="flex mx-4">
            {renderChange}
          </div>

          {/** Login/Sign-up options */}
          <div>
            <div className="hidden font-montserrat md:flex gap-4">
              <button className="rounded-md">Login</button>
              <button className="rounded-md">Sign-up</button>
            </div>
          </div>
        </div>
    </div>
  )
}
