import React, { useRef, useState } from 'react';
import TDMovieOut from "../assets/HeroBlue.mp4";
import {motion, useScroll, useTransform} from "framer-motion"
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import { Carousel, Typography, Button, Collapse, Card, collapse } from "@material-tailwind/react";
import ReactPlayer from 'react-player'
import { HashLink } from 'react-router-hash-link';



const HeroSection = ({isMenuShown}) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(true);
    
    const videoRef = useRef();

    const handleVideoPause = () => {
        videoRef.current.pause();
        setIsVideoPlaying(false);
    };

    const handleVideoPlay = () => {
        videoRef.current.play();
        setIsVideoPlaying(true);
    };

    const targetRef = useRef();
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["center center", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [1, 0], [-0.6, 1]);
    const scale = useTransform(scrollYProgress, [1, 20], [1, 1.8]);

    const data = [
      {
        title: 'Consulting',
        description: 'Nulla ac neque elit. Vivamus finibus malesuada arcu, a pulvinar tellus volutpat tempor. Maecenas id pretium magna, vitae pulvinar urna. Phasellus non pellentesque dui, ut pharetra mi. Donec quis massa eget lacus posuere tincidunt. Mauris non justo ac augue viverra rutrum at non purus. Cras accumsan ut dolor non dignissim.',
        button: 'Read More',
        HashLink: '#SquareFour'
      },
      {
        title: 'Trade Agency',
        description: 'Mauris sodales dapibus augue, a elementum sem aliquet sit amet. Cras efficitur dolor fermentum enim bibendum convallis. Donec consequat maximus mi eu rutrum. Maecenas quis lorem nibh. Duis sed nibh nec eros molestie malesuada. Nam non risus maximus, aliquam arcu commodo, fermentum urna. Aenean eu dictum mauris. ',
        button: 'Read More',
        HashLink: '#SquareThree'
      },
      {
        title: 'Import/Export',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus ipsum nec venenatis convallis. Nam venenatis ipsum lorem, id gravida lacus sagittis sed. Nulla lobortis sodales placerat. Morbi risus nulla, laoreet sit amet hendrerit nec, malesuada in massa. Nulla dignissim enim sodales, vulputate libero eget, commodo arcu.',
        button: 'Read More',
        HashLink: '#SquareTwo' 
      },
      {
        title: 'Trade Mediation',
        description: 'Nullam vehicula porttitor laoreet. Pellentesque viverra condimentum iaculis. Phasellus sed velit magna. Nullam fringilla, massa nec vehicula sagittis, orci nulla mollis ligula, nec pretium tellus felis a felis. Quisque vel arcu lobortis, semper dui non, pretium neque. Morbi ac urna vestibulum, dictum felis a, blandit orci.',
        button: 'Read More'
      },
    ]
    
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
      if (selected == i) {
        return setSelected(null)
      }

      setSelected(i)
    }

  return (
    
  <motion.div id='Home' className=' grid grid-cols-2 grid-rows-1  gap-24 -mb-48 '>

        <motion.div className='col-start-1 grid grid-rows-2 mt-28 '>


    
      <motion.div className='m-2 p-14 md:p-2 border-b-4 border-spacing-8 border-2 border-white bg-opacity-90 backdrop-blur-2xl rounded drop-shadow-lg row-start-1 self-center justify-self-center relative justify-stretch text-center tracking-tighter mt-3.5 space-y-4 md:space-y-0  ml-28 md:mt-28 z-20' >
          <h1 className='md:text-6xl text-4xl font-bold self-center justify-self-center brightness-200 '>TX Trade Group</h1>
          <h1 className='md:text-xl text-base self-center justify-self-center brightness-200'>The import/export trade deal consultancy group, that is looking to help you!</h1>
          <h1 className='md:text-sm text-xs font-extralight self-end justify-self-end brightness-200'>Based in the EU</h1>
        </motion.div>
        </motion.div>

        <motion.div  className='col-start-2 '  >


          </motion.div>

                    <motion.div className='h-screen w-full  absolute   -z-20   '>
          <video ref={videoRef} src={TDMovieOut} autoPlay loop muted className='h-full w-full object-cover brightness-200  '/>
          </motion.div>
      </motion.div>
         


         
  ); 
};

export default HeroSection