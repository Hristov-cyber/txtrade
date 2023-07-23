import React from 'react';
import GradientBtn from './GradientBtn';
import {FaBars, FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ isMenuShown, setIsMenuShown }) => {

    const links = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'Services',
        },
        {
            id: 3,
            link: 'About us',
        },
        {
            id: 4,
            link: 'Contact',
        },
    ];

    return (
        <>
        <motion.div className='absolute w-full h-24 text-white z-20  hover:bg-opacity-20 hover:backdrop-blur-lg hover:rounded hover:drop-shadow-lg max-w-screen-2xl content-center justify-center '>
            <div className='flex  justify-between items-center max-w-screen-xl mx-auto px-4 h-full font-light leading-1'>
                <div>
                    <h1 className='text-white tracking-widest text-2xl  '>TX Trade</h1>
                </div>
                <div className='hidden lg:flex items-center'>
                    <ul className='flex'>
                       {links.map(({id, link}) => (
                        <li key={id} className='p-2 uppercase leading-relaxed font-light duration-200 hover:text-thBlue cursor-pinter'>{link}</li>
                       ))}
                    </ul>
                </div>
                <div onClick={() => setIsMenuShown(!isMenuShown)} className='block lg:hidden cursor-pointer '>
                    {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>            
        </motion.div>


                    <div className={`z-50 w-full bg-black text-white absolute  left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
                        isMenuShown ? 'top-24 rounded-b-2xl opacity-95' : 'top-[-100%]'
                    }`}>
                        <ul>
                            {
                                links.map(({id, link}) => (
                                    <li key={id} className='p-4 uppercase cursor-pointer'>{link}</li>
                                ))}
                                <motion.div whileHover={{ scale: 1.2 }}><GradientBtn className='mt-2 capitalize' title='Learn more!' /></motion.div>
                                
                        </ul>
                    </div>

        </>
    );
};

export default Navbar