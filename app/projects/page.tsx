'use client';

import { useEffect } from 'react';
import { CiHome } from "react-icons/ci";
import '../globals.css';
import { FaArrowLeft } from "react-icons/fa"; 
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { RiH1 } from "react-icons/ri";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);  
  
  return(
    <section className="projects">
    <section id="project-header" className="project">
      <div data-aos="fade-up" data-aos-duration="1000">
        <h1 className="project-heading white text-3xl sm:text-4xl sm:h-full w-full ">Our Projects</h1>
      </div>
      <div className="mt-2" data-aos="flip-up" data-aos-duration="1000">
         <a href="" className="">Home</a>
         <a href="" className="pro ml-4">Projects</a>
      </div>
    </section>
    <section>
      <Container className="mt-20 ">
      <Row className="header-pic grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-5">
        <Col className="pic-hold flex:1 ">
        <div className="holdee1 display:flex flex-col items-center justify-center ">
         <div className="hold-picture" data-aos="fade-up" data-aos-duration="10">
          <img className="portfolio-1" src="project1.jpg" alt="Project 1"/>
          <div className="icon"><GoArrowUpRight/></div>
          <div className="overlay opacity-100 lg:opacity-0">
          <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
           <span className="overlay-tag ">Construction</span>
           <h2 className="overlay-title">Modern Residential Design</h2>
          </div>
          </div>
         </div>
         <div className="hold-picture" data-aos="fade-up" data-aos-delay="10">
          <img className="portfolio-2" src="project2.jpg" alt="Project 1"/>
           <div className="icon"><GoArrowUpRight/></div>
           <div className="overlay opacity-100 lg:opacity-0">
          <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
           <span className="overlay-tag">Construction</span>
           <h2 className="overlay-title">Urban High-Rise Apartment Projects</h2>
          </div>
          </div>
         </div>
        </div>
        </Col>
        <Col className="pic-hold flex:1">
        <div className="hold-picture" data-aos="fade-up" data-aos-duration="10">
          <img className="portfolio-3 mt-0.1" src="project3.jpg" alt="Project 1"/>
           <div className="icon"><GoArrowUpRight/></div>
          <div className="overlay opacity-100 lg:opacity-0">
          <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
           <span className="overlay-tag">Commercial</span>
           <h2 className="overlay-title">Corporate Office Construction Works</h2>
          </div>
          </div>
        </div>
        </Col>
        <Col className="pic-hold flex:1">
        <div className="holdee2">
          <div className="hold-picture" data-aos="fade-up" data-aos-duration="10">
          <img className="portfolio-4" src="project4.jpg" alt="Project 1"/>
           <div className="icon"><GoArrowUpRight/></div>
          <div className="overlay opacity-100 lg:opacity-0">
          <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
           <span className="overlay-tag">Industrial</span>
           <h2 className="overlay-title">Industrial Manufacturing Build</h2>
          </div>
          </div>
         </div>
         <div className="hold-picture" data-aos="fade-up" data-aos-duration="10">
          <img className="portfolio-5 mt-4" src="project5.jpg" alt="Project 1"/>
           <div className="icon"><GoArrowUpRight/></div>
          <div className="overlay opacity-100 lg:opacity-0">
          <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
           <span className="overlay-tag">Commercial</span>
           <h2 className="overlay-title">Premium Reta Outlet Construction</h2>
          </div>
          </div>
         </div>
        </div>
        </Col>
        <Col className="pic-hold flex:1">
          <div className="holdee3 display:flex flex-col items-center justify-center">
            <div className="hold-picture" data-aos="fade-up" data-aos-duration="10">
              <img className="portfolio-6" src="project6.jpg" alt="Project 1"/>
              <div className="icon"><GoArrowUpRight/></div>
              <div className="overlay opacity-100 lg:opacity-0">
                <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
                  <span className="overlay-tag">Infracture</span>
                  <h2 className="overlay-title">Modern Bridge Infrastructure Bulid</h2>
                </div>
              </div>
            </div>
            <div className="hold-picture" data-aos="fade-up" data-aos-duration="10">
              <img className="portfolio-7" src="project7.jpg" alt="Project 1"/>
              <div className="icon"><GoArrowUpRight/></div>
              <div className="overlay opacity-100 lg:opacity-0">
                <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
                  <span className="overlay-tag">Infracture</span>
                  <h2 className="overlay-title">City Road Development Project</h2>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
        <Row className="header2-pic grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 mt-12 m-5 ">
        <Col className="pic-hold flex:1">
        <div className="hold-picture" data-aos="fade-up" data-aos-duration="10">
          <img className="portfolio-8" src="project8.jpg" alt="Project 1"/>
          <div className="icon"><GoArrowUpRight/></div>
          <div className="overlay opacity-100 lg:opacity-0">
          <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
           <span className="overlay-tag">Residential</span>
           <h2 className="overlay-title">Luxzury Modern Villa Construction</h2>
          </div>
          </div>
        </div>
        </Col>
        <Col className="pic-hold flex:1">
        <div className="hold-picture" data-aos="fade-up" data-aos-duration="10">          
        <img className="portfolio-9 h-500 w-500" src="project9.jpg" alt="Project 1"/>
        <div className="icon"><GoArrowUpRight/></div>
          <div className="overlay opacity-100 lg:opacity-0">
          <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
           <span className="overlay-tag">Commercial</span>
           <h2 className="overlay-title">Large Scale Construction</h2>
          </div>
          </div>
        </div>
        </Col>
        <Col className="pic-hold flex:1">
        <div className="hold-picture" data-aos="fade-up" data-aos-duration="10">
          <img className="portfolio-10" src="project10.jpg" alt="Project 1"/>
          <div className="icon"><GoArrowUpRight/></div>
          <div className="overlay opacity-100 lg:opacity-0">
          <div className="overlay-content opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2">
           <span className="overlay-tag">Industrial</span>
           <h2 className="overlay-title">Modern Residential Design</h2>
          </div>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
    <section/>
     <section>
      <section>
  <div className="pagination flex items-center justify-center gap-4 mt-12 pb-12">
    <button className="carousel-arrow"><FaArrowLeft/></button>
    <div className="flex items-center gap-2">
    </div>
    <button className="carousel-arrow"><FaArrowRight/></button>
  </div>
</section>
    </section>
    </section>
    </section>
  )
}