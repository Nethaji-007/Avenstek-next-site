import { Mail, Phone ,Facebook,Twitter,Instagram,Linkedin} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-10 ">
      
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

        {/* Logo Section */}
<div className="space-y-4">

  <Image
    src="/Nanlogical-logo.png"
    alt="NanLogical Logo"
    width={150}
    height={40}
    className="object-contain"
  />

  <p className="text-sm leading-6 text-gray-400">
    Take your business to the next level
  </p>

  {/* Social Icons */}
  <div className="flex gap-4">
    <a
      href="https://www.facebook.com/nanlogical"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Facebook className="text-gray-300 hover:text-[#f04c41] transition-colors cursor-pointer" size={20} />
    </a>

    <a
      href="https://twitter.com/nanlogical"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter className="text-gray-300 hover:text-[#f04c41] transition-colors cursor-pointer" size={20} />
    </a>

    <a
      href="https://www.instagram.com/nanlogical"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram className="text-gray-300 hover:text-[#f04c41] transition-colors cursor-pointer" size={20} />
    </a>

    <a
      href="https://www.linkedin.com/company/nanlogical"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin className="text-gray-300 hover:text-[#f04c41] transition-colors cursor-pointer" size={20} />
    </a>
  </div>

</div>

        {/* Company */}
        <div>
         <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
          <li>
            <Link href="/" className="hover:text-[#f04c41]">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-[#f04c41]">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/services" className="hover:text-[#f04c41]">
              Services
            </Link>
          </li>

          <li>
            <Link href="/career" className="hover:text-[#f04c41]">
              Career
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-[#f04c41]">
              Contact Us
            </Link>
          </li>
        </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[#f04c41] cursor-pointer">Web Development</li>
            <li className="hover:text-[#f04c41] cursor-pointer">Mobile Apps</li>
            <li className="hover:text-[#f04c41] cursor-pointer">UI/UX Designs</li>
            <li className="hover:text-[#f04c41] cursor-pointer">Clone Scripts</li>
            <li className="hover:text-[#f04c41] cursor-pointer">Software Testing</li>
            <li className="hover:text-[#f04c41] cursor-pointer">E-Commerce Development</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">Need Help?</h3>
          <div className="space-y-3 text-sm">
            <p>Call Us Directly?</p>
            <p className="flex items-center gap-2">
              <a
              href="tel:+91 88387 50579"
              className="flex items-center gap-2 hover:text-[#f04c41]">
              <Phone size={16} />
              +91 88387 50579
            </a>
            </p>

            <p>For Support?</p>
            <p className="flex items-center gap-2">
              <a
              href="mailto:hr@nanlogical.com"
              className="flex items-center gap-2 hover:text-[#f04c41]">
              <Mail size={16} />
              hr@nanlogical.com
            </a>
            </p>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter Signup</h3>
          <p className="text-sm mb-4">
            Subscribe our newsletter to get the latest news and updates!
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none"
            />
            <button className="bg-[#f04c41] px-4 rounded-r-md hover:bg-[#f04c41]">
              <Mail size={18}/>
            </button>
          </div>
           {/* Checkbox */}
        <div>
          <label className="flex items-start gap-2 text-sm text-gray-600 mt-4">
            <input
              type="checkbox"
            />
            I agree to the Privacy Policy.
          </label> </div>
        </div>
       

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm px-6 max-w-7xl mx-auto">
        <p>© Copyright 2026 by <span className="text-[#f04c41]">Nanlogical</span></p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <p className="hover:text-[#f04c41] cursor-pointer">Privacy Policy</p>
          <p className="hover:text-[#f04c41] cursor-pointer">Terms and Condition</p>
        </div>
      </div>
    </footer>
  );
}