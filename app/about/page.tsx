 "use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, } from "swiper/modules";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FaPhone } from "react-icons/fa6";
import { FaGamepad } from 'react-icons/fa'; 
import { MdSecurity } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";
import { PiLightbulbFilament } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiGrid32 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { FaArrowRightLong } from "react-icons/fa6";

import Image from 'next/image';import { useForm } from "react-hook-form";
import { Clock, MapPin, Phone, User, Mail, Send, Pencil, Info } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  agree: boolean;
};
export default function About (){
 const [swiperRef, setSwiperRef] = useState(null);

  const clientLogos = [
    "/client-1.webp", "/client-2.webp", "/client-3.webp",
    "/client-4.webp", "/client-5.webp", "/client-6.webp"
  ];
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Form Submitted Successfully");
  };
    return(<>
    <section className="min-h-[49rem] lg:min-h-[52rem] font-['Montserrat-SemiBold_0',_sans-serif] bg-[#f5f5f5] py-12 px-4 md:px-10 ">
        <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 h-[35rem] p-4 flex  relative" >
                <div className=" relative w-[280px] h-[300px] transition-transform duration-700 ease-in-out hover:scale-110 xl:w-[312px] xl:h-[400px] lg:w-[312px] lg:h-[400px] md:w-[450px] md:h-[430px]">
                    <Image 
                        src="/about-img.jpg"
                        alt="Description"
                         fill
                        className="object-cover rounded-lg"
                        />
</div>
                <div className="hidden transition-transform duration-700 ease-in-out hover:scale-110 xl:block absolute top-[300px] left-[160px] w-[280px] h-[360px]" >
                     <Image 
                        src="/about-img2.jpg"
                        alt="Description"
                        fill
                        className="object-cover rounded-lg"
                        />
                </div>
                <div className="hidden transition-transform duration-700 ease-in-out hover:scale-110 xl:block absolute top-[65px] left-[365px] w-[220px] h-[160px]">
                     <Image 
                        src="/about-img3.jpg"
                        alt="Description"
                         fill
                        className="object-cover rounded-lg"
                        /></div> 
            </div>
            <div className="flex-1 max-w-[600px] text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#] mb-4">About Us</h1>
               <p className="text-[#ed502e] mb-2 relative inline-block
        after:content-['']
        after:absolute
        after:left-full
        after:ml-4
        after:top-1/2
        after:-translate-y-1/2
        after:h-[2px]
        after:w-[100px]
        after:bg-gradient-to-r
        after:from-[#ed502e]
        after:to-transparent">What We Do</p>
                <h1 className="text-3xl md:text-5xl leading-tight md:leading-[4rem] mb-4">Top solutions for your business</h1>
                <p className="leading-7 text-base md:text-lg mb-6">Nanlogical was founded with a vision to bridge the gap between imagination and reality. With a team of highly skilled and dedicated professionals, we have been at the forefront of the digital revolution, crafting exceptional software solutions that address complex challenges and fuel growth.</p>
                 <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mt-6 justify-center lg:justify-start">

        <button className="h-12 w-36 bg-[#ed502e] hover:bg-black text-white text-lg rounded">
          Contact Us
        </button>

        <a href="tel:+918838750579" className="text-[#213e6c] flex items-center gap-2 mb-2 ">
         <div className="border-1 bg-[#ffffff] border-[#c0d0f0] flex items-center justify-center h-12 w-12 rounded-full"> <FaPhone className="text-2xl text-[#142848]" /></div>
            <span className="text-[#213e6c]">+91 88387 50579</span>
        </a>

      </div>
                
            </div> 
        </div>

     </section>

    <section className="min-h-[38rem] p-8 bg-[#f5f5f5]">
  <div className="text-center mb-12">
    <p className="text-[#ed502e] text-lg">OUR BUSINESS SERVICES</p>
    <h1 className="text-[#ed502e] text-4xl font-bold">
      Your results are our top priority!
    </h1>
  </div>
  <div className="max-w-7xl mx-auto pl-6 md:pl-6">

  <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  spaceBetween={30}
  centeredSlides={true}
  centeredSlidesBounds={true}
  autoplay={{ delay: 2000 }}
  pagination={{ clickable: true }}
  navigation
  loop
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2},
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 3 }
  }}
>
   
    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#f2664a] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <FaRegCheckCircle className="text-[#f2664a] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Customized Solutions</h1>
        <p className=" text-center text-sm md:text-base">
          We tailor our solutions to your unique business goals for maximum value.
        </p>
      </div>
    </SwiperSlide>


    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#f2664a] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <PiLightbulbFilament className="text-[#f2664a] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Excellence in Innovation</h1>
        <p className="text-center text-sm md:text-base">
          We are a team of innovative developers creating future-proof software solutions.
        </p>
      </div>
    </SwiperSlide>

  
    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#f2664a] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <MdSecurity className="text-[#f2664a] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Security & Reliability</h1>
        <p className="text-center text-sm md:text-base">
          We prioritize security with industry best practices, ensuring scalable and reliable solutions.
        </p>
      </div>
    </SwiperSlide>

    
    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#f2664a] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <FaGamepad  className="text-[#f2664a] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Agile Development Methodology</h1>
        <p className=" text-center text-sm md:text-base">
          We embrace Agile, prioritizing flexibility and client involvement for optimal results.
        </p>
      </div>
    </SwiperSlide>

    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#f2664a] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <FaHeadset className="text-[#f2664a] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Dedicated Support & Maintenance</h1>
        <p className="text-center text-sm md:text-base">
          Our support extends beyond deployment, ensuring ongoing software optimization.
        </p>
      </div>
    </SwiperSlide>


    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#f2664a] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <GiTrophyCup className="text-[#f2664a] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Proven Track Record</h1>
        <p className=" text-center text-sm md:text-base text-center">
          Our portfolio showcases collaborations thriving through software solutions.
        </p>
      </div>
    </SwiperSlide>


    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#f2664a] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <CiGrid32 className="text-[#f2664a] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">User-Centric Design</h1>
        <p className=" text-center text-sm md:text-base text-center">
          We prioritize user-centric design for powerful and intuitive software experiences.
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
  </div>
</section>

   <section className="bg-[#f5f5f5] font-['Montserrat-SemiBold_0',_sans-serif]">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

{/* CARD 1 */}
<div className="relative h-[300px] md:h-[320px] lg:h-[380px] overflow-hidden group cursor-pointer">
<Image
src="/bg-1.jpg"
alt="Description"
fill
className="object-cover transition-all duration-500"
/>

<div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/60"></div>

<div className="absolute bottom-6 left-6 text-white transition-all duration-500 group-hover:-translate-y-4">

<h3 className="font-semibold text-xl lg:text-2xl">
Service Title
</h3>

<p className="font-semibold text-sm lg:text-lg">
Marketing
</p>

<div className="mt-2 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
<FaArrowRightLong className="text-white text-lg"/>
</div>

</div>
</div>

{/* CARD 2 */}
<div className="relative h-[300px] md:h-[320px] lg:h-[380px] overflow-hidden group cursor-pointer">
<Image
src="/bg-2.jpg"
alt="Description"
fill
className="object-cover transition-all duration-500"
/>

<div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/60"></div>

<div className="absolute bottom-6 left-6 text-white transition-all duration-500 group-hover:-translate-y-4">

<h3 className="font-semibold text-xl lg:text-2xl">
Social Media Tips
</h3>

<p className="font-semibold text-sm lg:text-lg">
Marketing
</p>

<div className="mt-2 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
<FaArrowRightLong className="text-white text-lg"/>
</div>

</div>
</div>

<div className="relative h-[300px] md:h-[320px] lg:h-[380px] overflow-hidden group cursor-pointer">
<Image
src="/bg-3.jpg"
alt="Description"
fill
className="object-cover transition-all duration-500"
/>

<div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/60"></div>

<div className="absolute bottom-6 left-6 text-white transition-all duration-500 group-hover:-translate-y-4">

<h3 className="font-semibold text-xl lg:text-2xl">
Sales Increase
</h3>

<p className="font-semibold text-sm lg:text-lg">
Marketing
</p>

<div className="mt-2 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
<FaArrowRightLong className="text-white text-lg"/>
</div>

</div>
</div>

<div className="relative h-[300px] md:h-[320px] lg:h-[380px] overflow-hidden group cursor-pointer">
<Image
src="/bg-4.jpg"
alt="Description"
fill
className="object-cover transition-all duration-500"
/>

<div className="absolute inset-0 bg-black/40 transition duration-500 group-hover:bg-black/60"></div>

<div className="absolute bottom-6 left-6 text-white transition-all duration-500 group-hover:-translate-y-4">

<h3 className="font-semibold text-xl lg:text-2xl">
Marketing Tips
</h3>

<p className="font-semibold text-sm lg:text-lg">
Marketing
</p>

<div className="mt-2 translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
<FaArrowRightLong className="text-white text-lg"/>
</div>

</div>
</div>

</div>
</section>
<section className="overflow-hidden bg-[#f5f5f5] py-10">
  <div className="marquee">
    <div className="marquee-track">

      {[...clientLogos, ...clientLogos].map((logo, index) => (
        <div key={index} className="logo">
          <Image
            src={logo}
            alt={`Client ${index}`}
            width={200}
            height={90}
          />
        </div>
      ))}

    </div>
  </div>
</section>
    
   <section className="h-auto text-['Montserrat-SemiBold_0',_sans-serif] bg-[#f5f5f5] py-10 px-4">
  <div className="flex flex-col lg:flex-row gap-6 p-[4rem]">

  
    <div className="flex-1 bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#213e6c] mb-4">Say Hello!</h1>
      <p className="text-[#6E777D] text-base md:text-lg mb-6">
        Call us to get more details for your service and work. Let us be a part in your business journey.
      </p>

      <div className="relative w-full h-64 md:h-80 mb-6">
        <Image 
          src="/contact.webp"
          alt="Contact"
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h2 className="text-[#213e6c] text-xl md:text-2xl font-bold mb-2">Contact us</h2>
      <p className="text-[#6E777D] text-base md:text-lg mb-4">
        Call us to get more details for your service and work.
      </p>

      <div className="space-y-4 text-start">
        <a
          href="https://www.google.com/maps/place/Nanlogical+Consultancy+Services+Pvt.+Ltd./@13.060538,80.2402943,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-600 text-base md:text-lg"
        >
          <CiLocationOn className="text-[#ed502e] text-2xl md:text-3xl mr-3" />
          16, Deivanayagam St, Nungambakkam, Chennai, Tamil Nadu 600034
        </a>

        <a href="tel:+918056056161" className="flex items-center text-gray-600 text-base md:text-lg">
          <IoPhonePortraitOutline className="text-[#ed502e] text-2xl md:text-3xl mr-3" />
          +91 80560 56161
        </a>

        <a href="mailto:info@nanlogical.com" className="flex items-center text-gray-600 text-base md:text-lg">
          <TfiEmail className="text-[#ed502e] text-2xl md:text-3xl mr-3" />
          info@nanlogical.com
        </a>
      </div>
    </div>

  
   {/* Contact Form */}
          <div className="w-full max-w-3xl bg-white p-8 sm:p-12 rounded-2xl shadow-md">

            <h2 className="text-sm font-bold text-gray-700 mb-5">
              CONTACT US
            </h2>

            <p className="text-2xl md:text-3xl font-bold text-[#f04c41] mb-5">
              Have questions? <br />
              Get in touch!
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium  text-gray-700 mb-2">
                    Name *
                  </label>

                  <div className="relative">
              <User
                className={`absolute left-3 top-4  ${
                  errors.name ? "text-red-500" : "text-[#f04c41]"
                }`}
                size={18}
              />

              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters"
                  }
                })}
                type="text"
                placeholder="Enter your name"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border text-gray-500 focus:outline-none
                ${
                  errors.name
                    ? " border-red-500"
                    : " border-gray-300"
                }`}
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>


                {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>

            <div className="relative">
              <Mail
                className={`absolute left-3 top-4 ${
                  errors.email ? "text-red-500" : "text-[#f04c41]"
                }`}
                size={18}
              />

              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-3 rounded-lg border text-gray-500 focus:outline-none
                ${
                  errors.email
                    ? " border-red-500"
                    : " border-gray-300"
                }`}
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        
         {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone *
          </label>

          <div className="relative">
            <Phone
              className={`absolute left-3 top-4 ${
                errors.phone ? "text-red-500" : "text-[#f04c41]"
              }`}
              size={18}
            />

            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits"
                }
              })}
              type="tel"
              placeholder="Enter your number"
              className={`w-full pl-10 pr-4 py-3 rounded-lg border text-gray-500  focus:outline-none
              ${
                errors.phone
                  ? " border-red-500"
                  : " border-gray-300"
              }`}
            />
          </div>

          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Subject
          </label>

          <div className="relative">
            <Info className="absolute left-3 top-4 text-[#f04c41]" size={18} />

            <input
              {...register("subject")}
              type="text"
              placeholder="Enter subject"
              className="w-full pl-10 pr-4 py-3 rounded-lg border text-gray-500  border-gray-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>

          <div className="relative">
            <Pencil
              className={`absolute left-4 top-4 ${
                errors.message ? "text-red-500" : "text-[#f04c41]"
              }`}
              size={18}
            />

            <textarea
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters"
                }
              })}
              rows={4}
              placeholder="How Can We Help You? Feel free to get in touch!"
              className={`w-full pl-12 pr-4 py-3 rounded-lg  border resize-none text-gray-500 focus:outline-none
              ${
                errors.message
                  ? " border-red-500"
                  : " border-gray-300"
              }`}
            ></textarea>
          </div>

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Checkbox */}
        <div>
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              {...register("agree", {
                required: "You must agree before submitting"
              })}
            />
            I agree that my data is collected and stored.
          </label>

          {errors.agree && (
            <p className="text-red-500 text-sm mt-1">
              {errors.agree.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex items-center gap-2 bg-[#f04c41] hover:bg-red-600 text-white px-6 py-3 rounded-lg transition"
        >
          <Send size={18} />
          Get In Touch
        </button>

      </form>

          </div>

  </div>
</section>
    </>
   
    )
}
