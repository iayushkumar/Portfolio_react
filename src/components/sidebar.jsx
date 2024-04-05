import React,{useState,useEffect} from 'react';
import Mypic from "../assets/images/picto.jpeg"
import { IoMdMail } from "react-icons/io";

import Github from "../assets/images/github.png";
import Gmail from "../assets/images/gmail.png";
import Instagram from "../assets/images/instagram.png";
import Linkdin from "../assets/images/linkedin.png";
import X from "../assets/images/x.webp";
import "./Styles.css"
import About from './About';
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({scrolleducation,scrollinterest,scrollabout,scrollproject,hamburger,Hamburger}) => {
    const components = [
        {
            Image: Github,
            url: "https://github.com/iayushkumar",
        
        },
        {
            Image: Gmail,
            url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGDclWgQShmsncNCzKpHdgrjFkMBqnnVzXTHWSgmDgnLfbxqJNJqtBXDxblzpfzZvsTML",
         
        },
        {
            Image: X,
            url: "https://twitter.com/kayush395",
         
        },
        {
            Image: Linkdin,
            url: "https://www.linkedin.com/in/ayush-kumar-43a5811b0/",
          
        }
    ];

   
   
    return (
        <div className={`h-screen overflow-y-scroll bg-indigo-50 ${Hamburger ? 'sm:block' : 'hidden'} lg:block`}  

        // <div className={`h-screen overflow-y-scroll bg-indigo-50 sm:${Hamburger ? 'block' : 'hidden'} lg:block`}
        style={{ fontFamily: 'Lumanosimo, cursive' }}>
            <div className='relative pt-2 flex flex-col justify-center items-center'>


            <div className='absolute top-0 left-0 sm:w-8 sm:h-8 md:hidden'>
          <GiHamburgerMenu className='sm:w-8 sm:h-8' onClick={()=>hamburger(false)} />
          </div>
                <div className='mt-4'>
                    <p className='font-bold text-sm'># programmer_life</p>
                    <p className='font-bold text-sm'># hello_world</p>
                    <p className='font-bold text-sm'># coding</p>
                </div>
                <p className='text-3xl font-bold mt-10'>Ayush kumar</p>
                <div className="h-40 w-40 mt-5">
                    <img className="h-32 w-32 rounded-full" src={Mypic} alt={Mypic} />
                </div>
                <div className='mail'>
                    <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGDclWgQShmsncNCzKpHdgrjFkMBqnnVzXTHWSgmDgnLfbxqJNJqtBXDxblzpfzZvsTML' target='_blank' >
                        <span className='flex item-center'>
                            <IoMdMail />
                            <span>kayush395@gmail.com</span>
                        </span>
                    </a>
                </div>
                
                <div className='mt-4'>
    <p className='text-lg mt-4 hover:cursor-pointer hover:text-pink-500 sm:hidden md:block' onClick={scrollproject}>Projects</p>
    <p className='text-lg mt-4 hover:cursor-pointer hover:text-pink-500 sm:hidden md:block' onClick={scrollabout}>About</p>
    <p className='text-lg mt-4 hover:cursor-pointer hover:text-pink-500 sm:hidden md:block' onClick={scrollinterest}>Interest</p>
    <p className='text-lg mt-4 hover:cursor-pointer hover:text-pink-500 sm:hidden md:block' onClick={scrolleducation}>Education</p>
</div>


               
                <div className='mt-6'>
                    {components.map((component, index) => (
                        <div className='h-7 w-8 mt-5 flex justify-items-center items-center' key={index}>
                            <a href={component.url} target='_blank' className='relative inline-block overflow-hidden'>
                                <img
                                    src={component.Image}
                                    alt="hdhdh"
                                    className='h-8 w-10 object-cover transition-transform duration-300 transform hover:scale-105'
                                />
                            </a>
                        </div>
                    ))}
                </div>
                <div className='mt-32 mb-5 text-xl'>
                    I made this with <span className="animate-heart-pulse inline-block">❤️</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
