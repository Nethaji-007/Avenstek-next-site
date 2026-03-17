"use client";

import { useForm } from "react-hook-form";
import { Clock, MapPin, Phone, User, Mail, Send, Pencil, Info } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  agree: boolean;
};

const contactItems = [
  {
    icon: Clock,
    title: "Open Hours",
    description: (
      <>
        Mon – Fri: 9 AM – 6 PM <br />
        Saturday: Closed <br />
        Sunday: Closed
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Address",
    description: (
      <>
        16, Deivanayagam St, Nungambakkam,  <br />
        Chennai, Tamil Nadu 600034 <br />
        Check Location
      </>
    ),
  },
  {
    icon: Phone,
    title: "Get in Touch",
    description: (
      <>
        Phone: +91 8838750579 <br />
        Email: hr@nalogical.com <br />
        Contact Form
      </>
    ),
  },
];

export default function ContactPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Form Submitted Successfully");
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="py-16 text-center">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#f04c41]">
          Contact Us
        </h1>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-5 md:grid-cols-3 items-stretch">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center bg-white text-center h-full p-6 border rounded-xl shadow-md hover:shadow-md transition"
              >
                <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg shadow-[#F7E7CE]">
                  <Icon className="w-8 h-8 text-[#f04c41]" />
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#f04c41]">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 flex-grow ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative h-[70vh] md:h-[80vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('/contact-meeting.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <p className="uppercase tracking-widest text-sm mb-4 md:text-xl text-gray-200">
            Business Services
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Your results are our <br /> top priority!
          </h1>

          <button className="bg-[#f04c41] hover:bg-gray-500 px-6 py-3 rounded-md font-medium transition">
            Make an Appointment
          </button>
        </div>
      </section>

      {/* Map + Form Section */}
      <section className="w-full bg-[#f7f7f7] py-12 px-4 sm:px-8 lg:px-20 mb-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Map */}
          <div className="w-full bg-white p-6 sm:p-8 rounded-2xl shadow-lg flex">

            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps?q=Nanlogical%20Consultancy%20Services%20Pvt.%20Ltd.,%2016%20Deivanayagam%20St,%20Nungambakkam,%20Chennai,%20Tamil%20Nadu%20600034&output=embed"
              className="w-full h-full rounded-xl"
              loading="lazy"
            ></iframe>

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

    </div>
  );
}


