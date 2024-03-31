import React, { useState, useEffect } from 'react';
import img1 from "../assets/images/Pencil.jpg";
import img2 from "../assets/images/Hello.jpg";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative h-screen"style={{ fontFamily: 'Lumanosimo, cursive' }}>
      <div className="slider-container h-full">
        <div className={`slide ${currentSlide === 0 ? 'opacity-100' : 'hidden'} w-full h-full`}>
        <div className="relative">
        <img src={img1} alt="Slide 1" className="slide-image object-fit-contain w-full h-full" />
        <div className="absolute top-96 left-1/2">
          <span className='text-3xl text-amber-900 text-bold'> Hello I'm Ayush Kumar</span>
            <a href="https://drive.google.com/file/d/1yJQhMTDaeKLqEJaPEotssvGnpTYs1PBj/view?usp=sharing" target='_blank'>
            <div className='bg-red-600 h-18 w-38 rounded-xl p-3 m-2 text-white text-center mt-4'>View my Resume/CV</div>
            </a>
         
        </div>
      </div>

         
        </div>

        <div className={`slide ${currentSlide === 1 ? 'opacity-100' : 'hidden'} w-full h-full`}>
        <div className="relative">
        <img src={img2} alt="Slide 1" className="slide-image object-fit-contain w-full h-full" />
        <div className="absolute top-96 left-2/3 mr-10">
         <div className='bg-yellow-600 h-18 w-38 rounded-xl p-5 m-2 text-white text-center mt-4'>
          Welcome to my Portfolio website
          </div>
         <div className='bg-yellow-600 h-18 w-38 rounded-xl p-5 m-2 text-white text-center mt-4'>
         My mission is to craft innovative solutions through code that positively impact people's lives
          </div>
          
         
        </div>
      </div>
        </div>
        
      </div>



<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex">
  <button onClick={() => goToSlide(0)} className={`bg-${currentSlide === 0 ? 'gray-600' : 'white'} w-2 h-2 rounded-full focus:outline-none`}></button>
  <button onClick={() => goToSlide(1)} className={`bg-${currentSlide === 1 ? 'gray-600' : 'white'} w-2 h-2 rounded-full focus:outline-none ml-4`}></button>
</div>


    </div>
  );
}

export default Slider;
