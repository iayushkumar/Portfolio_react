// import React, { useState, useEffect } from 'react';
// import img1 from "../assets/images/Pencil.jpg";
// import img2 from "../assets/images/Hello.jpg";

// function Slider() {
//   const [currentSlide, setCurrentSlide] = useState(1);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const goToSlide = (slideIndex) => {
//     setCurrentSlide(slideIndex);
  
//   };

//   return (
//     <div className="relative h-screen " style={{ fontFamily: 'Lumanosimo, cursive' }}>
//       <div className="slider-container h-full">

//         <div className={`slide ${currentSlide === 0 ? 'opacity-100' : 'hidden'} w-full h-full`}>
//           <div className="relative">
//             {/* <img src={img1} alt="Slide 1" className="slide-image1 object-fit-contain w-full md:h-full sm:h-full" /> */}
//             <img src={img1} alt="Slide 1" className="slide-image1  w-full h-lvh " />

//             {/* <div className="absolute md:top-96 md:left-1/2 sm:top-60 sm:left-12 "> */}
//             <div className="absolute top-96 left-1/3 ">
//               <span className='md:text-3xl text-amber-900 text-bold sm:text-xl '> Hello I'm Ayush Kumar</span>
//               <a href="https://drive.google.com/file/d/1yJQhMTDaeKLqEJaPEotssvGnpTYs1PBj/view?usp=sharing" target='_blank'>
//                 <div className='bg-red-600 h-18 w-38 rounded-xl p-3 m-2 text-white text-center mt-4'>View my Resume/CV</div>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className={`slide ${currentSlide === 1 ? 'opacity-100' : 'hidden'} w-full h-full`}>
//           <div className="relative">
//             <img src="https://www.shutterstock.com/image-photo/black-wall-stone-background-see-600nw-69757270.jpg" alt="Slide 1" className="slide-image2 object-fit-contain w-full h-lvh" />

//             <div className="absolute top-80 left-2/4 mr-10 ">
//               <div className='bg-yellow-600 md:h-18 md:w-18 rounded-xl md:p-5 md:m-2 text-white text-center mt-4 sm:mr-10 sm:p-2'>
//                 Welcome to my Portfolio website
//               </div>
//               <div className='bg-yellow-600 h-18 w-38 rounded-xl p-5 m-2 text-white text-center mt-4 sm:p-2'>
//                 My mission is to craft innovative solutions through code that positively impact people's lives
//               </div>
//             </div>





//           </div>
//         </div>



//       </div>



//       <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex">
//         <button onClick={() => goToSlide(0)} className={`bg-${currentSlide === 0 ? 'gray-600' : 'white'} w-2 h-2 rounded-full focus:outline-none`}></button>
//         <button onClick={() => goToSlide(1)} className={`bg-${currentSlide === 1 ? 'gray-600' : 'white'} w-2 h-2 rounded-full focus:outline-none ml-4`}></button>
//       </div>


//     </div>
//   );
// }

// export default Slider;





import React, { useState, useEffect } from 'react';
import img1 from "../assets/images/Pencil.jpg";
import { GiHamburgerMenu } from "react-icons/gi";


function Slider({hamburger,Hamburger}) {


  return (
    <div className="relative h-screen " style={{ fontFamily: 'Lumanosimo, cursive' }}>
      <div className="slider-container h-full">

        <div className={`slide opacity-100 w-full h-full`}>
          <div className="relative">
            {/* <img src={img1} alt="Slide 1" className="slide-image1 object-fit-contain w-full md:h-full sm:h-full" /> */}
            <img src={img1} alt="Slide 1" className="slide-image1  w-full h-svh " />

            {/* <div className="absolute md:top-96 md:left-1/2 sm:top-60 sm:left-12 "> */}
            <div className="absolute top-96 left-1/3 ">
              <span className='md:text-3xl text-amber-900 text-bold sm:text-xl '> Hello I'm Ayush Kumar</span>
{/* 
              <a href="https://drive.google.com/file/d/1yJQhMTDaeKLqEJaPEotssvGnpTYs1PBj/view?usp=sharing" target='_blank'>
                <div className='bg-red-600 h-18 w-38 rounded-xl p-3 m-2 text-white text-center mt-4'>View my Resume/CV</div>
              </a> */}
<a href="https://drive.google.com/file/d/1yJQhMTDaeKLqEJaPEotssvGnpTYs1PBj/view?usp=sharing" target='_blank'>
  <div className='bg-red-600 h-18 w-38 rounded-xl p-3 m-2 text-white text-center mt-4 animate-bounce'>View my Resume/CV</div>
</a>

          
         





            </div>
           
          {  Hamburger?(
              <div>
                {console.log("insidetrue")}
              </div>
            ):(
              <div className={`absolute top-0 left-0 sm:w-8 sm:h-8 md:hidden ${Hamburger ? 'hidden' : 'block'}`}>
              <GiHamburgerMenu className={`sm:w-8 sm:h-8 ${Hamburger ? 'hidden' : 'block'}`} onClick={() => hamburger(!Hamburger)} />
            </div>
            )
            }


           

          </div>
        </div>

      



      </div>



     

    </div>
  );
}

export default Slider;
