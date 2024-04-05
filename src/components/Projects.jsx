import React from 'react'
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import Blogging from '../assets/images/Blogging.png'
import ChatApp from '../assets/images/ChatApp.png'
import TextMaster from '../assets/images/Text Master.png'
import Notehub from '../assets/images/Notehub.png'
import Identification from '../assets/images/Identification.jpg'
import Wine from '../assets/images/wine.png'
import "./Styles.css"
const Webapp=[
    {
     link:"https://github.com/iayushkumar/BloggingApplication?tab=readme-ov-file",
     color:"#decfa4",
     title:"Blogging Application",
     img:Blogging,
     },
    {
        link:"https://github.com/iayushkumar/Notehub",
        color:"#c4dea4",
        title:"NoteHub",
        img:Notehub,
    },
    {
        link:"https://github.com/iayushkumar/Text-Master",
        color:"pink",
        title:"Text Master",
        img:TextMaster,
    },
    {
        link:"https://github.com/iayushkumar/chatapp",
        color:"#9bc8d1",
        title:"Chat App",
        img:ChatApp,
    }
  
]

const Ml=[
    {
     link:"https://github.com/iayushkumar/Identification-of-Covid-19-using-chest-x-ray",
     color:"#decfa4",
     title:"Identification-of-Covid-19",
     img:Identification,
     },
    {
        link:"https://github.com/iayushkumar/Wine-Quality-Prediction",
        color:"#c4dea4",
        title:"Wine-Quality-Prediction",
        img:Wine,
    },
   
  
]

const Projects = () => {


    const projectCard = (web) => {
        const getWidthStyle = () => {
            if (window.innerWidth >= 1280) {
                return { width: '500px' };
            } else if (window.innerWidth >= 640) {
                return { width: '230px' };
            } else {
                return { width: '350px' };
            }
        };
        return (
            <Tilt className='xl:grid-cols-2 xl:ml-10 xl:mt-2  rounded-lg overflow-hidden titl'  style={{'borderradius': '100px',...getWidthStyle()}}>

            <li className="card xl:h-86 xl:grid-cols-2" style={{ backgroundColor: web.color, width: '530px' }}>
                <a href={web.link} target='_blank' rel="noopener noreferrer"> 
                 
                    <div className='xl:w-full xl:h-80'> 
                        <img src={web.img} alt={web.title} className='w-full h-80 object-fit-contain'/>
                    </div>

                    
                <h2 className='text-center  text-2xl mt-4'>{web.title}</h2>
                </a>

            </li>
        </Tilt>
        );
    };


  return (
    <div style={{ fontFamily: 'Lumanosimo, cursive' }}>
         <div  className='text-sm  mt-20 xl:ml-10 sm:ml-2 '> My works</div>
        <div  className='text-2xl font-bold xl:ml-10 mt-4 mb-4 sm:ml-2'> Web development project</div>
       
   
 
          <div className='flex flex-wrap justify-center'>
                {Webapp.map((web, index) => (
                    <div key={index} className='xl:w-1/2 h-96 mb-10 sm:w-1 '>
                        {projectCard(web)}
                    </div>
                ))}
            </div>

      
            <div  className='text-2xl font-bold md:ml-10 mt-10 mb-4 sm:ml-2'> Machine Learning project</div>
            
            <div className='flex flex-wrap justify-center'>
                {Ml.map((web, index) => (
                    <div key={index} className='sm:w-1 md:w-1/2 h-96 md:mb-10 sm:mt-4  ' >
                        {projectCard(web)}
                    </div>
                ))}
            </div>


    </div>
  )
}

export default Projects