 "use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, FreeMode } from "swiper/modules";
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
import { HiOutlineMail } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { SiMainwp } from "react-icons/si";
import { FiSend } from "react-icons/fi";
import { FaPenAlt } from "react-icons/fa";
import Image from 'next/image';
export default function About (){
 const [swiperRef, setSwiperRef] = useState(null);

  const clientLogos = [
    "/client-1.webp", "/client-2.webp", "/client-3.webp",
    "/client-4.webp", "/client-5.webp", "/client-6.webp"
  ];
  const [name,setName] = useState("");
const [number,setNumber] = useState("");
const [email,setEmail] = useState("");
const [subject,setSubject] = useState("");
const [message,setMessage] = useState("");

const [nameError,setNameError] = useState(false);
const [nameLenError,setNameLenError] = useState(false);

const [numberError,setNumberError] = useState(false);
const [numberLenError,setNumberLenError] = useState(false);

const [emailError,setEmailError] = useState(false);
const [emailRegError,setEmailRegError] = useState(false);

const [subjectError,setSubjectError] = useState(false);
const [messageError,setMessageError] = useState(false);

 const validateForm = () => {

let valid = true;


if(name){
  setNameError(false)
  if(name.length < 3){
    setNameLenError(true)
    valid = false
  }else{
    setNameLenError(false)
  }
}else{
  setNameError(true)
  setNameLenError(false)
  valid = false
}


if(number){
  setNumberError(false)
  if(number.length !== 10){
    setNumberLenError(true)
    valid = false
  }else{
    setNumberLenError(false)
  }
}else{
  setNumberError(true)
  setNumberLenError(false)
  valid = false
}


if(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if(emailRegex.test(email)){
    setEmailRegError(false)
  }else{
    setEmailRegError(true)
    valid = false
  }
  setEmailError(false)
}else{
  setEmailError(true)
  setEmailRegError(false)
  valid = false
}


const subjectWords = subject.trim().split(/\s+/).filter(Boolean).length;

if(subjectWords < 5 || subjectWords > 20){
  setSubjectError(true)
  valid = false
}else{
  setSubjectError(false)
}


const messageWords = message.trim().split(/\s+/).filter(Boolean).length;

if(messageWords < 10 || messageWords > 60){
  setMessageError(true)
  valid = false
}else{
  setMessageError(false)
}


if(valid){
  Swal.fire({
    title: "Message Sent Successfully",
    text: "Your message has been sent.",
    icon: "success",
    confirmButtonText: "OK"
  })

  // reset form
  setName("")
  setNumber("")
  setEmail("")
  setSubject("")
  setMessage("")
}
}
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#ed502e] mb-4">About Us</h1>
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

        <button className="h-12 w-36 bg-[#ed502e] text-white text-lg rounded">
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
    <p className="text-[#213e6c] text-lg">OUR BUSINESS SERVICES</p>
    <h1 className="text-[#213e6c] text-4xl font-bold">
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
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#1981cd] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <FaRegCheckCircle className="text-[#1981cd] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Customized Solutions</h1>
        <p className=" text-center text-sm md:text-base">
          We tailor our solutions to your unique business goals for maximum value.
        </p>
      </div>
    </SwiperSlide>


    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#1981cd] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <PiLightbulbFilament className="text-[#1981cd] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Excellence in Innovation</h1>
        <p className="text-center text-sm md:text-base">
          We are a team of innovative developers creating future-proof software solutions.
        </p>
      </div>
    </SwiperSlide>

  
    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#1981cd] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <MdSecurity className="text-[#1981cd] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Security & Reliability</h1>
        <p className="text-center text-sm md:text-base">
          We prioritize security with industry best practices, ensuring scalable and reliable solutions.
        </p>
      </div>
    </SwiperSlide>

    
    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#1981cd] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <FaGamepad  className="text-[#1981cd] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Agile Development Methodology</h1>
        <p className=" text-center text-sm md:text-base">
          We embrace Agile, prioritizing flexibility and client involvement for optimal results.
        </p>
      </div>
    </SwiperSlide>

    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#1981cd] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <FaHeadset className="text-[#1981cd] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Dedicated Support & Maintenance</h1>
        <p className="text-center text-sm md:text-base">
          Our support extends beyond deployment, ensuring ongoing software optimization.
        </p>
      </div>
    </SwiperSlide>


    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#1981cd] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <GiTrophyCup className="text-[#1981cd] h-[3rem] w-[5rem] group-hover:text-white" />
        </div>
        <h1 className="text-center text-xl font-semibold">Proven Track Record</h1>
        <p className=" text-center text-sm md:text-base text-center">
          Our portfolio showcases collaborations thriving through software solutions.
        </p>
      </div>
    </SwiperSlide>


    <SwiperSlide className="flex justify-center">
      <div className="group flex flex-col items-center h-[360px] w-full max-w-[280px]">
        <div className="rounded-[65%_35%_44%_56%/35%_33%_63%_62%] w-[140px] h-[140px] group-hover:bg-[#1981cd] bg-[#efefef] border-2 border-black flex items-center justify-center mb-4">
          <CiGrid32 className="text-[#1981cd] h-[3rem] w-[5rem] group-hover:text-white" />
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

  
    <div className="flex-1 bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#213e6c] font-bold mb-6">
        Contact Form
      </h1>

   <form
  className="space-y-4"
  onSubmit={(e) => {
    e.preventDefault();
    validateForm();
  }}
>

<div className="flex flex-col md:flex-row gap-4">

<div className="flex-1">
<label className="text-base md:text-lg mb-2 block">
<IoPersonOutline className="inline text-[#ed502e] mr-2"/>
Your Name
</label>

<input
type="text"
placeholder="Enter Your Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full p-3 h-12 md:h-14 rounded-lg border-2 border-[#c2c2c2] focus:border-[#ed502e] outline-none"
/>

{nameError && <p className="text-red-500 text-sm"> Your Name</p>}
{nameLenError && <p className="text-red-500 text-sm">Name Must Contain 3 Char</p>}

</div>

<div className="flex-1">
<label className="text-base md:text-lg mb-2 block">
<FaPhoneAlt className="inline text-[#ed502e] mr-2"/>
Your Number
</label>

<input
type="number"
placeholder="Enter Your Number"
value={number}
onChange={(e)=>setNumber(e.target.value)}
className="w-full p-3 h-12 md:h-14 rounded-lg border-2 border-[#c2c2c2] focus:border-[#ed502e] outline-none"
/>

{numberError && <p className="text-red-500 text-sm"> Your Phone Number</p>}
{numberLenError && <p className="text-red-500 text-sm">Must be 10 digits</p>}

</div>

</div>

<div>
<label className="text-base md:text-lg mb-2 block">
<HiOutlineMail className="inline text-[#ed502e] mr-2"/>
Your Email
</label>

<input
type="email"
placeholder="Enter Your Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-3 h-12 md:h-14 rounded-lg border-2 border-[#c2c2c2] focus:border-[#ed502e] outline-none"
/>

{emailError && <p className="text-red-500 text-sm">Your Email</p>}
{emailRegError && <p className="text-red-500 text-sm">Email Must Contain @ </p>}

</div>



<div>
<label className="text-base md:text-lg mb-2 block">
<SiMainwp className="inline text-[#ed502e] mr-2"/>
Your Subject
</label>

<input
type="text"
placeholder="Enter Your Subject"
value={subject}
onChange={(e)=>setSubject(e.target.value)}
className="w-full p-3 h-12 md:h-14 rounded-lg border-2 border-[#c2c2c2] focus:border-[#ed502e] outline-none"
/>

{subjectError && (
<p className="text-red-500 text-sm">
Subject must contain 5 – 20 words
</p>
)}

</div>


<div>
<label className="text-base md:text-lg mb-2 block">
<FaPenAlt className="inline text-[#ed502e] mr-2"/>
Your Message
</label>

<textarea
placeholder="Enter Your Message"
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="w-full p-3 h-32 md:h-40 rounded-lg border-2 border-[#c2c2c2] focus:border-[#ed502e] outline-none resize-none"
/>

{messageError && (
<p className="text-red-500 text-sm">
Message must contain 10 – 60 words
</p>
)}

</div>


<button
type="submit"
className="w-full h-12 md:h-14 bg-[#ed502e] text-white rounded-lg flex items-center justify-center gap-2 hover:bg-[#d94425] transition"
>
<FiSend/>
Send Your Message
</button>



</form>
    </div>

  </div>
</section>
    </>
   
    )
}
