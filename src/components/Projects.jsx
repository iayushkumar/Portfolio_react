import React from 'react'
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import Blogging from '../assets/images/Blogging.png'
import ChatApp from '../assets/images/ChatApp.png'
import TextMaster from '../assets/images/Text Master.png'
import Notehub from '../assets/images/Notehub.png'
import Identification from '../assets/images/Identification.jpg'
import Wine from '../assets/images/wine.png'
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
        return (
            <Tilt className='grid-cols-2 m-10 rounded-lg overflow-hidden'  style={{'borderradius': '100px',width: '530px'}}>

            <li className="card h-96 grid-cols-2" style={{ backgroundColor: web.color, width: '530px' }}>
                <a href={web.link} target='_blank' rel="noopener noreferrer"> 
                 
                    <div className='w-full h-80'> 
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
         <div  className='text-sm  mt-10 ml-10'> My works</div>
        <div  className='text-2xl font-bold ml-10 mt-4'> Web development project</div>
       
   
 
          <div className='flex flex-wrap justify-center'>
                {Webapp.map((web, index) => (
                    <div key={index} className='w-1/2 h-96 mb-10'>
                        {projectCard(web)}
                    </div>
                ))}
            </div>

      
            <div  className='text-2xl font-bold ml-10 mt-10'> Machine Learning project</div>
            
            <div className='flex flex-wrap justify-center'>
                {Ml.map((web, index) => (
                    <div key={index} className='w-1/2 h-96 mb-10'>
                        {projectCard(web)}
                    </div>
                ))}
            </div>


    </div>
  )
}

export default Projects