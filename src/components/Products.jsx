import React,{ useRef, useState, useEffect } from 'react';
import PageSection from './PageSection';
import Navbar from './Navbar';
import {easeIn, easeInOut, easeOut, motion, useScroll, useTransform, useAnimation} from "framer-motion";
import {FaRocket, FaSatellite, FaRobot, FaMicrochip} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { HashLink } from 'react-router-hash-link';


const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1} },
  hidden: { opacity: 0, scale: 0 }
};

const Products = () => {

  const data = [
    {
      title: 'Consulting',
      description: 'Nulla ac neque elit. Vivamus finibus malesuada arcu, a pulvinar tellus volutpat tempor. Maecenas id pretium magna, vitae pulvinar urna. Phasellus non pellentesque dui, ut pharetra mi.',
      button: 'Read more',
      HashLink: '#SquareFour'
    },
    {
      title: 'Trade Agency',
      description: 'Mauris sodales dapibus augue, a elementum sem aliquet sit amet. Cras efficitur dolor fermentum enim bibendum convallis. Donec consequat maximus mi eu rutrum..',
      button: 'Read more',
      HashLink: '#SquareThree'
    },
    {
      title: 'Import/Export',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ipsum nec venenatis convallis. Nam venenatis ipsum lorem, id gravida lacus sagittis sed. Nulla lobortis sodales placerat.',
      button: 'Read more',
      HashLink: '#SquareTwo' 
    },
  ];

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  const textRef  = useRef();
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["end end", "end start"],
  });

    const opacity = useTransform(scrollYProgress, [0.1, 1], [1, -0.5]);
    const scale = useTransform(scrollYProgress, [1, 1], [0.1, 1]);

  return ( 
  <>
        <PageSection>
        <div class="container px-5 py-24 mx-auto inline">
    <div class="flex flex-col text-center w-full mb-5 md:mt-10 -mt-40 ">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    </div>
          <motion.div className='space-y-6'> {data.map((item, i) => (
                    <div initial={{   x: -100 }} animate={{  x: 0 }} transition={{ type: 'keyframes', duration: 1 }} className='perspective-9 cursor-pointer item font-thin self-center justify-self-center relative justify-start text-justify itme   z-20 flex flex-col top-0 mt-2 gap-4  text-2xl '>
                     
                      <motion.div className='flex tracking-tighter text-justify justify-between items-center title sm:flex mt-5 brightness-200   perspective-origin-top-right   ' onClick={() => toggle(i)}> 
                              
                              <motion.div whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}} className='w-full h-full items-end content-end justify-end flex flex-wrap'>
                     
                          <h2 className=' w-full h-full   hover:pointer-events-auto brightness-200 hover:perspective-10 hover:translate-x-11 hover:ease-in hover:transform-style-3d hover:perspective-origin-top-right'>{item.title}</h2>
                        
                          </motion.div>
                          <span className='h-full opacity-50 font-extralight'>{selected === i ? '+' : '-'}</span>
                      </motion.div>
                      <div className='flex flex-row gap-8  content-evenly items-start space-x-4 '>
                      <div className={selected === i ? 'cursor-default h-auto max-h-52 font-extralight text-base w-3/4 pb-1 overflow-auto ' : 'overflow-hidden max-h-0'}>{item.description}</div>
                      <HashLink smooth to={item.HashLink} className={selected === i ? 'self-center items-center whitespace-nowrap bg-transparent hover:bg-blue-500 text-blue-700 font-extralight hover:text-white text-2xl py-2 px-1.5 border border-blue-500 hover:border-transparent rounded' : 'overflow-hidden max-h-0'}>{item.button}</HashLink>
                      </div>
                    </div>
                  ))}
          </motion.div>


        </PageSection></>
    );
};

export default Products;

