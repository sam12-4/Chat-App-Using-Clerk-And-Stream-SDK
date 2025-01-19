"use client"
import React, { use } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  const user = useUser();
  console.log(user.user?.id);
  return (
    <nav className="bg-slate-900 text-white py-2">
      <div className="container mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link className="text-2xl font-bold text-white" href="/">
              ChatApp
            </Link>

          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link className="hover:text-blue-400 transition" href="/home">
            Home
            </Link>
            <Link className="hover:text-blue-400 transition" href="/forums">
              Forums
            </Link>
            <Link  className="hover:text-blue-400 transition" href="/chat">
              Chats
            </Link>
            <UserButton />
          </div>

          

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6H20M4 12H20M4 18H20"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
