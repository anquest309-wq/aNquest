// pages/HomeHero.jsx
import React ,{useEffect} from "react";
import { Link } from "react-router-dom";

import HomeHeroBg from "../../Components/Bg-animation-template/HomeHeroBg";
import TypingAnimation from "../../Components/TypingAnimation";
import { buildUrl } from "../../utils/urlUtils";
import GifCarousel from "../../Components/GifCarousel";

const HomeHero = () => {



  
  // Enhanced smooth scrolling effect
  


  return (
    <section className="relative h-screen w-full flex overflow-hidden ">

                <HomeHeroBg />
      <div className="container mx-auto px-4 sm:px-6 lg:px-18 h-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center h-full gap-12">

          {/* Left */}
          <div className="w-full lg:w-1/2  flex justify-center lg:justify-start">

            <div className="max-w-2xl">
              <TypingAnimation/>

              <p className="text-lg sm:text-xl theme-text-secondary mt-6 mb-8">
                Modern web, mobile, and automation solutions built to scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#services"
                  className="hero-button-primary font-bold py-4 px-8 rounded-lg text-white"
                  style={{ backgroundColor: "#2d65bc" }}
                >
                  Our Services
                </a>

                <Link
                  to={buildUrl("/contacts")}
                  className="border-2 border-[#2d65bc] py-4 px-8 rounded-lg text-[#2d65bc] hover:bg-[#2d65bc] hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <GifCarousel />
          </div>


        </div>
      </div>
    </section>
  );
};

export default HomeHero;
