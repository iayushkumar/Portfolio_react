import React from 'react'

const MYJOURNEY = () => {
  return (
    <div className='mb-16' style={{ fontFamily: 'Lumanosimo, cursive' }}>

     
        <div className='mt-10 ml-14'>MY JOURNEY</div>
        <div className='ml-14 mt-10 mr-10'>
         
         <div className='before:content-[] before:absolute before:w-4 before:color-red-300  relative '>
          
        <div className='w-full h-100 bg-slate-100 p-10 mr-10'>
       <span className='font-bold text-2xl border-b-orange-900'> 
       Experience  
       </span>
       <div className='mt-4 font-semibold text-xl'>ANTRORSE Technosoft pvt. LTD <span className='font-light text-xl'>Full-time (Nov 2023 - Present)</span>
      </div>
       <div className='mt-2'>
       As a MERN stack developer, my initial month involved a training program during which I built a blogging website. Transitioning into my role, I focused on building applications from scratch using Tailwind CSS and React.js, while seamlessly integrating APIs with the frontend. Additionally, I am responsible for developing backend APIs using Express js
       </div>

       <div className='mt-8 font-semibold text-xl'>LTIMindtree  <span className='font-light text-xl'>Internship (May 2023 - Aug 2023) </span>
      </div>
       <div className='mt-2'>
       • Completed an immersive internship, gaining hands-on experience in Java, SQL, JavaScript, Pandas, and Numpy. Developed skills as a Data Engineer through a combination of practical and theoretical tasks, contributing to project development
       <br />
  
    • Awarded LTI Mindtree’s Star Performance Certificate for exceptional performance
       </div>
     
        </div>


        {/* 2nd */}
        < div className='w-full h-100 bg-slate-100 p-10 mr-10 mt-5'>
     
       <span className='font-bold text-2xl border-b-orange-900'> 
       Education
       </span>

       <div>
       <div className='mt-4 font-semibold text-xl'>Vellore Institute of Technology 
 <span className='font-light text-xl'> Chennai campus Full-time (2021 - 2023)</span>
      </div>
       <div className='mt-2'>
       Master's Of Computer Applications (CGPA: 8.05)
       </div>
       </div>

       <div>
       <div className='mt-4 font-semibold text-xl'>Birla Institute Of Technology
 <span className='font-light text-xl'> Mesra Full-time (2018 - 2021)</span>
      </div>
       <div className='mt-2'>
       Bachelor of Computer Applications(CGPA: 7.68)
       </div>
       </div>

       

       <div>
       <div className='mt-4 font-semibold text-xl'>Model School 
 <span className='font-light text-xl'> Dalmianagar Full-time (2015 - 2017)</span>
      </div>
       <div className='mt-2'>
       12th-Science (Percentage: 64)
       </div>
       </div>


       <div>
       <div className='mt-4 font-semibold text-xl'>Dav public School 
 <span className='font-light text-xl'> Katar Full-time (2014 - 2015)</span>
      </div>
       <div className='mt-2'>
       10th (CGPA: 8.8)
       </div>
       </div>

       


    
       

      
      </div>
         </div>
        </div>

        
    </div>
  )
}

export default MYJOURNEY