"use client";

import { useState } from "react";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubscribe = () => {
    if (!email) {
      setError("Email is required");
    } else if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
    } else {
      setError("");
      alert("Subscribed successfully!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:px-32 md:px-16 lg:px-6">

        {/* Logo */}
        <div className="space-y-4">
          <Image
            src="/Nanlogical-logo.png"
            alt="NanLogical Logo"
            width={150}
            height={40}
          />

          <p className="text-sm text-gray-400">
            Take your business to the next level
          </p>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/nanlogical" target="_blank">
              <Facebook className="hover:text-[#f04c41]" size={20} />
            </a>
            <a href="https://twitter.com/nanlogical" target="_blank">
              <Twitter className="hover:text-[#f04c41]" size={20} />
            </a>
            <a href="https://www.instagram.com/nanlogical" target="_blank">
              <Instagram className="hover:text-[#f04c41]" size={20} />
            </a>
            <a href="https://www.linkedin.com/company/nanlogical" target="_blank">
              <Linkedin className="hover:text-[#f04c41]" size={20} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#f04c41]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#f04c41]">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#f04c41]">Services</Link></li>
            <li><Link href="/career" className="hover:text-[#f04c41]">Career</Link></li>
            <li><Link href="/contact" className="hover:text-[#f04c41]">Contact Us</Link></li>
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
            <a href="tel:+918838750579" className="flex items-center gap-2 hover:text-[#f04c41]">
              <Phone size={16} />
              +91 88387 50579
            </a>

            <p>For Support?</p>
            <a href="mailto:hr@nanlogical.com" className="flex items-center gap-2 hover:text-[#f04c41]">
              <Mail size={16} />
              hr@nanlogical.com
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter Signup</h3>
          <p className="text-sm mb-4">
            Subscribe our newsletter to get the latest news and updates!
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);

                if (!value) {
                  setError("Email is required");
                } else if (!emailRegex.test(value)) {
                  setError("Enter a valid email address");
                } else {
                  setError(""); // ✅ clears instantly
                }
              }}
              className={`w-full px-3 py-2 text-sm bg-gray-800 border ${
                error ? "border-red-500" : "border-gray-700"
              } rounded-l-md focus:outline-none`}
            />

            <button
              type="button"   // ✅ VERY IMPORTANT (prevents redirect)
              onClick={handleSubscribe}
              className="bg-[#f04c41] px-4 rounded-r-md hover:bg-[#d93c32]"
            >
              <Mail size={18} />
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}

          <label className="flex items-start gap-2 text-sm text-gray-400 mt-4">
            <input type="checkbox" />
            I agree to the Privacy Policy.
          </label>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm px-6 max-w-7xl mx-auto">
        <p>
          © Copyright 2026 by{" "}
          <span className="text-[#f04c41]">Nanlogical</span>
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <p className="hover:text-[#f04c41] cursor-pointer">Privacy Policy</p>
          <p className="hover:text-[#f04c41] cursor-pointer">Terms and Condition</p>
        </div>
      </div>
    </footer>
  );
}