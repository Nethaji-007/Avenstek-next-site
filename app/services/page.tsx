"use client";

import { useEffect, useRef, useState } from "react";
import {
  Globe,
  Smartphone,
  Tv,
  Palette,
  Copy,
  ShoppingCart,
  ArrowUpRight,
  X,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type Stat = {
  value: number;
  label: string;
};

const services: Service[] = [
  {
    title: "Web Application Design & Development",
    description: "Crafting Intuitive Web Experiences",
    icon: Globe,
  },
  {
    title: "Mobile App Design and Development",
    description: "Innovative Mobile Solutions for You",
    icon: Smartphone,
  },
  {
    title: "UI & UX",
    description: "Elevating User Experiences Through Design",
    icon: Palette,
  },
  {
    title: "Clone Scripts",
    description: "Replicate Success with Clone Scripts",
    icon: Copy,
  },
  {
    title: "Software Testing",
    description: "Ensuring Quality Through Software Testing",
    icon: Tv,
  },
  {
    title: "E-commerce Design & Development",
    description: "Crafting Seamless E-commerce Experiences",
    icon: ShoppingCart,
  },
];

const stats: Stat[] = [
  { value: 30, label: "Happy Clients" },
  { value: 40, label: "Projects" },
  { value: 1463, label: "Hours Of Support" },
  { value: 87, label: "Hard Workers" },
];



function RollingDigit({
  digit,
  start,
  stroke,
}: {
  digit: string;
  start: boolean;
  stroke?: boolean;
}) {
  const numbers = [...Array(10).keys()];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!start) return;

    const timer = setTimeout(() => {
      setOffset(Number(digit) * 80);
    }, 100);

    return () => clearTimeout(timer);
  }, [start, digit]);

  return (
    <div className="relative h-[80px] w-[55px] overflow-hidden">
      <div
        className="absolute left-0 transition-transform duration-[1400ms] ease-in-out"
        style={{ transform: `translateY(-${offset}px)` }}
      >
        {numbers.map((num) => (
          <div
            key={num}
            className={`h-[80px] flex items-center justify-center text-8xl font-bold ${
              stroke ? "text-transparent stroke-text" : "text-gray-800"
            }`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

function RollingNumber({
  value,
  start,
  stroke,
}: {
  value: number;
  start: boolean;
  stroke?: boolean;
}) {
  return (
    <div className="flex justify-center">
      {value
        .toString()
        .split("")
        .map((digit, i) => (
          <RollingDigit
            key={i}
            digit={digit}
            start={start}
            stroke={stroke}
          />
        ))}
    </div>
  );
}

export default function ServicesWithCounter() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f5f5f5] py-20 ">
      <div className="max-w-7xl mx-auto px-6 mt-24">

       

        <h2 className="text-4xl font-bold text-center mb-10 text-[#f04c41] ">
          Our Services
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 shadow-sm hover:shadow-md transition duration-300"
              >
                <Icon className="w-12 h-12 mb-6 text-[#f04c41]" />

                <h3 className="text-lg font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-500 mb-8">
                  {service.description}
                </p>

                <button
                  onClick={() => setActiveService(service)}
                  className="group w-full flex items-center justify-between px-6 py-4 rounded-full border border-gray-300 text-sm font-medium transition-all duration-300 hover:text-[#f04c41] w-5 h-13"
                >
                  <span>Read More</span>

                  <span className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-50 transition-all duration-300 group-hover:bg-[#f04c41]">
                    <ArrowUpRight className="w-6 h-6 text-[#f04c41] group-hover:text-black transition-all duration-300" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

       

        <div
          ref={counterRef}
          className="border-t border-red-500 pt-16 mt-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 text-center">

            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <RollingNumber
                  value={stat.value}
                  start={start}
                  stroke={index === 0 || index === 2}
                />

                <p className="mt-4 text-gray-700 text-ml">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* MODAL  */}
      {activeService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-xl p-6 relative">
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-4 right-4 text-gray-500"
            >
              <X />
            </button>

            <h3 className="text-xl font-semibold mb-4">
              {activeService.title}
            </h3>

            <p className="text-gray-600">
              {activeService.description}
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #111;
        }
      `}</style>
    </section>
  );
}