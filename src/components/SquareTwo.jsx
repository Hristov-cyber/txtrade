import React,{ useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import {easeIn, easeInOut, easeOut, motion, useScroll, useTransform, useAnimation, useAnimationControls, circOut} from "framer-motion";
import {FaRocket, FaSatellite, FaRobot, FaMicrochip} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import SideNavbarTwo from './SideNavbarTwo';
import TDMovieOut from "../assets/GoGreen.mp4";


const squareVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 }
};
const squareVariants2 = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 }
  };
  const squareVariants3 = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 }
  };

  const squares = [squareVariants, squareVariants2, squareVariants3];
  const delayMultiplier = 2.3; // Example delay multiplier for each variant
  
  function SquareThree() {
    const controls = useAnimationControls();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        squares.forEach((variants, index) => {
          setTimeout(() => {
            controls.start(i => ({
              ...variants.visible,
              opacity: 1,
              x: 2,
              transition: { delay: i * 1.5 }
            }));
          }, index );
        });
      }
    }, [controls, inView]);
    
    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["center center", "start end"],
    });

    const opacity = useTransform(scrollYProgress, [1, 0], [-0.6, 1]);
    const scale = useTransform(scrollYProgress, [1, 20], [1, 1.8]);
    const translateX = useTransform(scrollYProgress, [1, 0], [300, 0]);
    const x = useTransform(scrollYProgress, [1, 0], [-3000, 0]);
    const videoRef = useRef();
  
  return (
  
<motion.div id='SquareTwo' ref={targetRef} style={{ opacity, scale }} className='perspective-100vw bg-black w-screen h-screen flex content-start justify-end items-start flex-col relative  '>

  <section class="text-white-600 body-font z-30 flex h-full w-full ">
  <motion.div  className='hidden md:flex origin-right w-full h-full basis-0 z-30'>  <SideNavbarTwo className='z-40 '></SideNavbarTwo>
  </motion.div>
  <div class="container px-5 py-24 mx-auto flex flex-col-reverse">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <div alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
      </div>
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 hidden">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-white-200 text-white-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-white-900 text-lg">Phoebe Caulfield</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
          </div>
        </div>
        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-white-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
          <a class="self-center items-center whitespace-nowrap bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-1.5 border border-green-500 hover:border-transparent rounded inline-flex content-center">Contact us
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


<motion.div ref={targetRef} style={{ translateX }} className='  absolute overflow-hidden flex grow  w-full h-full blur-sm '>
              <video ref={videoRef} src={TDMovieOut} autoPlay loop muted className='object-fill static grow overflow-hidden gap-0 brightness-20 ' />




  </motion.div>
  

</motion.div>
  


  );
};



export default SquareThree;