"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Clock,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Globe,
  Search,
  Menu,
  Linkedin,
  AlignJustify
} from "lucide-react";

import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {


const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

  
      <div
  className={`w-full fixed left-0 transition-all duration-500 ${
    scrolled ? "top-3" : "top-0"
  } ${
    openMenu ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100"
  }`}
>

      
 



      <div className="max-w-[1200px]  mx-auto px-4">

        <div className="bg-white shadow-xl px-6 py-6 flex items-center justify-between rounded-md">

        
          <Image
            src="/logo-Nanlogical.png"
            alt="logo"
            width={150}
            height={40}
          />

          {/* Menu */}
        <nav className={`hidden lg:flex  items-center gap-10 text-[15px] font-semibold tracking-[0.5px] text-[#0c1e35] ${poppins.className}`}>
  <Link
  href="/"
  className="relative group !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300"
  >
  Home
  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
</Link>

<Link
  href="/about "
  className="relative group !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300"
>
  About Us
  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
</Link>

  <Link
  href="/services"
  className="relative group !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300"
>
  Our Services
  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
</Link>

 

  <Link
  href="/projects"
  className="relative group !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300"
>
  projects
  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
</Link>

  <Link
  href="/career"
  className="relative group !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300"
>
  Career
  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
</Link>


<Link
  href="/contact"
  className="relative group !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300"
>
  Contact
  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
</Link>
</nav>
        

          {/* Right Controls */}
          <div className="flex items-center gap-6">

           

            {/* Menu Icon */}
            <Menu
              size={24}
              className="cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />

            {/* Contact Button */}
            <button className="hidden md:flex items-center h-10 bg-[#f04c41] text-white px-6 rounded-md hover:bg-black transition">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </div>



{/* MOBILE SIDEBAR */}
{openMenu && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/40 z-40"
      onClick={() => setOpenMenu(false)}
    ></div>

    {/* Sidebar */}
    <div className=" hidden lg:block fixed top-0 right-0 w-[420px] h-full bg-white z-50 p-6 overflow-y-auto">

      {/* Close Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setOpenMenu(false)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"
        >
          ✕
        </button>
      </div>

      {/* Logo */}
      <div className="mb-4">
        <Image
          src="/logo-Nanlogical.png"
          alt="logo"
          width={140}
          height={40}
        />
      </div>



      {/* Description */}
      <p className="text-gray-700 text-md leading-relaxed mb-6">
      Nanlogical is a design and development company based in India.
      </p>

      <hr className="border-gray-200 mb-6" />

      {/* Contact Info */}
      <div className="grid grid-cols-2 gap-6 text-sm text-gray-800 mb-6">

        <div className="flex items-center gap-2">
          <Phone size={18} className="text-[#f04c41]" />
          <span>+91 88387 50579</span>
        </div>

        <div className="flex items-center gap-2">
          <Globe size={18} className="text-[#f04c41]" />
          <span>hr@nanlogical.com</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-[#f04c41]" />
          <span>16, Deivanayagam St, Nungambakkam</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={18} className="text-[#f04c41]" />
          <span>(Mon–Sat: 9:00–6:00)</span>
        </div>

      </div>

      <hr className="border-gray-200 mb-6" />

      {/* Menu Links */}
       <nav className={`flex flex-col gap-4 text-lg font-semibold mb-6 ${poppins.className}`}>

  <Link href="/" className="relative group inline-block w-fit !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300">
    Home
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
  </Link>

  <Link href="/about" className="relative group inline-block w-fit !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300">
    About Us
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
  </Link>

  <Link href="/services" className="relative group inline-block w-fit !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300">
    Our Services
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
  </Link>

 

  <Link href="/projects" className="relative group inline-block w-fit !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300">
    Project
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
  </Link>


   <Link href="/career" className="relative group inline-block w-fit !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300">
    Career
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
  </Link>

  <Link href="/contact" className="relative group inline-block w-fit !text-[#0c1e35] hover:!text-[#f04c41] transition-colors duration-300">
    Contact
    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#f04c41] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
  </Link>

</nav>

      <hr className="border-gray-200 mb-4" />

      {/* Find With Us */}
      <p className="text-sm text-gray-500 mb-4">FIND WITH US</p>

      {/* Social Icons */}
      <div className="flex gap-4">

        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#f04c41] hover:text-white transition-all duration-300">
          <Facebook size={16} />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#f04c41] hover:text-white transition-all duration-300">
          <Twitter size={16} />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#f04c41] hover:text-white transition-all duration-300">
          <Instagram size={16} />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#f04c41] hover:text-white transition-all duration-300">
          <Linkedin size={16} />
        </div>

      </div>

    </div>
  </> 
)}

{openMenu && (
  <>
    {/* BLUR OVERLAY */}
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-all duration-300"
      onClick={() => setOpenMenu(false)}
    ></div>

    {/* SIDEBAR */}
    <div className="lg:hidden fixed top-0 right-0 h-full w-[320px] bg-white z-50 shadow-xl transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-0">

      <div className="p-6">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpenMenu(false)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-[#f04c41] hover:text-white transition-all duration-300"
        >
          ✕
        </button>

        {/* MENU */}
      <nav className="flex flex-col mt-10 divide-y divide-gray-200 ">

  <Link href="/" className="flex justify-between items-center py-4 text-[#0c1e35] hover:text-[#f04c41] transition">
    <span>Home</span>
    <span>+</span>
  </Link>

  <Link href="/about" className="flex justify-between items-center py-4 text-[#0c1e35] hover:text-[#f04c41] transition">
    <span>About Us</span>
    <span>+</span>
  </Link>

  <Link href="/services" className="flex justify-between items-center py-4 text-[#0c1e35] hover:text-[#f04c41] transition">
    <span>Our Services</span>
    <span>+</span>
  </Link>

  <Link href="/projects" className="flex justify-between items-center py-4 text-[#0c1e35] hover:text-[#f04c41] transition">
    <span>Projects</span>
    <span>+</span>
  </Link>

  <Link href="/career" className="flex justify-between items-center py-4 text-[#0c1e35] hover:text-[#f04c41] transition">
    <span>Career</span>
    <span>+</span>
  </Link>

  <Link href="/contact" className="flex justify-between items-center py-4 text-[#0c1e35] hover:text-[#f04c41] transition">
    <span>Contact</span>
  
  </Link>

</nav>

        

        {/* SOCIAL */}
        <p className="text-sm  font-semibold text-gray-600 mt-20">
          FIND WITH US
        </p>

        <div className="flex gap-4 mt-5">

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#f04c41] hover:text-white transition-all duration-300">
            <Facebook size={16} />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#f04c41] hover:text-white transition-all duration-300">
            <Twitter size={16} />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#f04c41] hover:text-white transition-all duration-300">
            <Instagram size={16} />
          </div>

          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-[#f04c41] hover:text-white transition-all duration-300">
            <Linkedin size={16} />
          </div>

        </div>

      </div>
    </div>
  </>
)}

   

    </header>
  );
}