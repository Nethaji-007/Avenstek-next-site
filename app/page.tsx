"use client";
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
interface HeroImageProps {
  bgImage?: string;
  fgImage?: string;
}
import { 
  Monitor, 
  Smartphone, 
  Palette, 
  Layers, 
  ShieldCheck, 
  ShoppingCart,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const carouselImages = [
    "/slide-1.jpg",     
    "/slide-2.jpg",     
    "/slide-3.jpg",     
  ];

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isTransitioning]); 

  return (
  <section className="relative h-screen bg-black text-white overflow-hidden">
    <div className="absolute inset-0">
      {carouselImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-110"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40"></div>
        </div>
      ))}
    </div>
      <button
        onClick={goToPrevious}
        className="hidden lg:block absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-40 text-white/50 hover:text-white transition-all duration-300 group p-4 cursor-pointer"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="hidden lg:block absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-40 text-white/50 hover:text-white transition-all duration-300 group p-4 cursor-pointer"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-1 rounded-full transition-all duration-500 overflow-hidden cursor-pointer ${
              index === currentIndex ? "w-12 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          >
            {index === currentIndex && (
              <span className="absolute inset-0 bg-white/50 animate-progress"></span>
            )}
          </button>
        ))}
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center pointer-events-auto">
          <h1 
            key={`title-${currentIndex}`}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in-up"
          >
            Best logic for your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 animate-gradient">
              dream works
            </span>
          </h1>

          <p 
            key={`desc-${currentIndex}`}
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200"
          >
            We specialize in native web, android and ios Clone Script. Our Clone Scripts are the best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
      <div className="flex flex-col sm:flex-row 
        items-center
        space-y-4 sm:space-y-0 
        sm:space-x-4">

        <button className="group w-[45%] min-w-[140px] 
          md:w-auto px-2 md:px-8 py-3 
          text-xs md:text-base 
          bg-orange-500 text-white font-semibold 
          rounded-lg hover:bg-#ed502e-600 
          transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-#ed502e-500/30">
          Get Started
        </button>

        <button className="w-[45%] min-w-[140px] 
          md:w-auto px-2 md:px-8 py-3 
          text-xs md:text-base 
          bg-transparent border-2 border-orange-500 text-orange-500 
          font-semibold rounded-lg 
          hover:bg-orange-500 hover:text-white 
          transition-all duration-300 transform hover:scale-105">
          View Demo
        </button>

      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div
  ref={ref}
  className={`relative w-full transition-all duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
  }`}
>
 
  <div className="flex flex-col md:block relative h-auto md:h-[600px] gap-6">
    
  
    <div className="relative md:absolute md:top-0 md:left-[5%] w-full md:w-[70%] h-[300px] sm:h-[400px] md:h-[75%] z-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl animate-float">
      <img
        src="/ab-2.jpg"
        alt="Nanlogical workspace"
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
      />
    </div>
          <div className="relative md:absolute md:bottom-0 md:right-0 w-full md:w-[65%] h-[260px] sm:h-[350px] md:h-[65%] z-20 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl hover:animate-float">
              <img
                src="/ab-1.jpg"
                alt="Client meeting"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>

         
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-orange-600 font-bold text-xs bg-orange-50 rounded-md uppercase tracking-[0.2em]">
              Saving Time
            </span>
            
            <h2 className="text-4xl md:text-3xl font-extrabold text-[#1e3a5f] mb-6 leading-tight">
              Focus on what's <br /> really important
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Nanlogical is a design and development company based in India.
            </p>

            <div className="space-y-5 mb-10">
              {[
                "We provide User friendly UI Designs",
                "Building efficient web and mobile app",
                "Our cloning scripts are the best",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 group"
                  style={{ perspective: "1000px" }}
                >
                  <div className="flex-shrink-0">
                  
                    <span className="text-[#f15a2b] text-xl font-bold italic">✓✓</span>
                  </div>
                  <span className="text-gray-700 text-lg font-medium ">{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block bg-[#f15a2b] hover:bg-[#d4491f] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-200"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
      </section>
  );
};
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    { title: "UI & UX", description: "We afford Best Designs to boost up your brand and inscribe through Visual experience.", icon: Palette },
    { title: "Clone Scripts", description: "We furnish clone scripts of your demanded application with more efficiency", icon: Layers },
    { title: "Software Testing", description: "Advance the standard of your software by gaining the software testing from our team", icon: ShieldCheck },
    { title: "Web Application Design ", description: "Modern, cost-effective building blocks for applications.", icon: Monitor },
    { title: "Mobile app Design ", description: "We present Best Android and IOS mobile application for your business ", icon: Smartphone },
    { title: "E-commerce Design ", description: "We give perfect application for your business with best customer satisfaction", icon: ShoppingCart },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
      
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
        
          <div className={`lg:w-1/3 lg:sticky lg:top-24 h-fit transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <span className="inline-block px-4 py-1.5 mb-6 text-orange-600 font-bold text-xs bg-orange-50 rounded-md uppercase tracking-[0.2em]">
              Our Services
            </span>
            <h2 className="text-4xl md:text-3xl font-extrabold text-[#1e3a5f] mb-6 leading-tight">
              CHECK OUR SERVICES
            </h2>      
            <div className="text-gray-600 text-lg mb-10 space-y-4">
              <p>
                Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <p>
                Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam.
              </p>
            </div>
            
          </div>

       
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                      key={index} 
                      className={`group bg-white p-9 rounded-2xl border border-gray-100 
                      shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                      } hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-2 
                      text-center flex flex-col items-center`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                  
                    <div className="mb-6 w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-500">
                      <Icon className="w-8 h-8 text-orange-600 transition-colors duration-500 group-hover:text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <a
                      href="#"
                      className="mt-auto inline-flex items-center gap-1 text-gray-900 font-bold text-xs uppercase tracking-wider hover:text-orange-600 transition-colors group/link"
                    >
                      Know More
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: 25, label: "Years of Experience", suffix: "K" },
  { value: 7, label: "Successfull Projects", suffix: "K+" },
  { value: 15, label: "Happy Customers", suffix: "K" },
  { value: 5, label: "Projects Running", suffix: "K+" },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // disconnect after triggering to keep state
          observer.disconnect(); 
        }
      },
      { threshold: 0.01 } // Trigger as soon as 1% is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-gray-100">
          {stats.map((stat, i) => (
            <CounterCard key={i} {...stat} isVisible={isVisible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

function CounterCard({ value, label, suffix = "", isVisible, index }: Stat & { isVisible: boolean; index: number }) {
  const digits = value.toString().split("");
  const isOutlined = index === 0 || index === 2;

  return (
    <div className="group relative flex flex-col items-start p-6 md:p-10 bg-white border-r border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-orange-600 transition-all duration-300 group-hover:h-1/2" />

      <div className="flex items-baseline font-bold text-4xl md:text-6xl mb-2">
        <div 
          className="flex overflow-hidden h-[1.1em]"
          style={isOutlined ? {
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1px #1a2b3c',
          } : {
            color: '#1a2b3c'
          }}
        >
          {digits.map((digit, i) => (
            <DigitRoller key={i} target={parseInt(digit)} isVisible={isVisible} />
          ))}
          {/* Suffix is outside the digit roller so it doesn't move */}
          <span className="leading-none">{suffix}</span>
        </div>
      </div>
      
      <p className="text-gray-500 font-bold text-[10px] md:text-xs uppercase tracking-widest leading-tight">
        {label}
      </p>
    </div>
  );
}

function DigitRoller({ target, isVisible }: { target: number; isVisible: boolean }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return (
    <div className="relative w-[0.6em] overflow-hidden">
      <div 
        className="flex flex-col transition-transform duration-[800ms] ease-out" // Faster duration
        style={{ 
          transform: isVisible ? `translateY(-${target * 10}%)` : `translateY(0)`,
        }}
      >
        {numbers.map((num) => (
          <span key={num} className="leading-none text-center">
            {num}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      
      <style jsx global>{`
        .animate-fade-in-up { animation: fadeInUp 0.7s ease-out forwards; opacity: 0; }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s linear infinite; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      
      `}</style>
    </main>
  );
}