import React,{ useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import {easeIn, easeInOut, easeOut, motion, useScroll, useTransform, useAnimation, useAnimationControls} from "framer-motion";
import {FaRocket, FaSatellite, FaRobot, FaMicrochip} from "react-icons/fa";
import { InView, useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';




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



 


  function SideNavbar() {

    const { ref: consultRef, inView: consultView } = useInView();

  
  return (
    <motion.div style={{ scale:0.9 }} whileHover={{ scale:1 }} transition={{ duration: 0.5   }} className='pl-0 gap-0'>
    <div whil className='Wrapper opacity-40 hover:opacity-100 min-h-full w-auto flex content-start justify-end items-end flex-row flex-nowrap gap-10 pt-0 pr-0 pb-0  relative'>

      <div className='Sidebar flex content-start justify-between items-start bottom-0 flex-grow-0 flex-shrink-0 basis-0 flex-col flex-nowrap left-0 overflow-x-hidden overflow-y-hidden pt-5 pr-5 pb-5 pl-5 fixed top-0 w-72 z-20'>
         <div  className='Sidebar Logo outline-transparent  outline-none outline-2 flex flex-col  justify-end opacity-100 flex-shrink-0 transform-none'>
          <HashLink smooth to='#Home' className='snap-mandatory text-2xl font-bold leading-9 '>TX Trade Group</HashLink>
         </div>
        <div className='Links content-start justify-start flex text-sm items-start flex-grow-0 flex-shrink-0 basis-auto flex-col flex-nowrap gap-y-3 gap-x-3 h-min pt-0 pl-0 pr-0 pb-0  relative w-full z-10'> 
          <div className='Consulting containter flex-grow-0 font-extralight flex-shrink-0 basis-auto h-auto relative w-full '>
            <div className='contents'>
              <HashLink smooth to='#SquareFour'>
                Consulting Services
              </HashLink>
            </div>
          </div>
          <div className='Trade Agency containter flex-grow-0 font-extralight flex-shrink-0 basis-auto h-auto relative w-full '>
            <div className='contents'>
              <HashLink smooth to='#SquareThree'>
                Trade Agency Services
              </HashLink>
            </div>
          </div>
          <div className='Import/Export containter flex-grow-0 font-extralight flex-shrink-0 basis-auto h-auto relative w-full '>
            <div className='contents'>
              <HashLink ref={consultRef} smooth to='#SquareTwo'> { consultView ? <p className=' text-green-700 font-semibold hover:text-white py-2 px-1.5 border border-green-500 inline-block rounded -mt-1'>Import/Export Services</p> : 'No'}
                
              </HashLink>
            </div>
          </div>
        </div>
       <motion.div className='font-extralight m-2 p-2 border-b-4 border-spacing-8 '>
           <h1 className='hover:scale-150'>Contact us!</h1>
       </motion.div>
</div>
</div>
</motion.div>

  );
};

export default SideNavbar
