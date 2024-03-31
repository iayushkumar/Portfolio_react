import React from 'react'

const whatIdo = () => {
  return (
    <div className='mt-20 mb-5' style={{ fontFamily: 'Lumanosimo, cursive' }}>
    
    <div className='ml-14 font-light'>What I Do ?</div>
    <div className='ml-14 mt-5 font-bold text-2xl'>Here are some of my experience</div>
     

     <div className='flex'>
     <div className='w-1/3 h-4/6 ml-14 mt-12  border-2 shadow-xl border-b-violet-900'>
         <div className='font-bold text-center text-xl mt-10'> Web Development</div>
           <div className='mt-5 ml-10 mb-16 mr-5 text-center'> 
     Javascript, Typescript(Basic), HTML,CSS, ReactJs,  Redux, Tailwind CSS, UI Libraries , Redux Toolkit, Express JS, Node JS, PHP
      </div>
      </div>

      {/* web dev */}
     <div className='w-1/3 h-4/6 ml-14 mt-12  border-2 shadow-xl border-b-yellow-900'>
     <div className='font-bold text-center text-xl mt-10'> Programming Language</div>
      <div className='mt-5 ml-10 mb-16 mr-5 text-center'> 
      Core Java, C, Python
      </div>
      </div>

     <div className='w-1/3 h-4/6 ml-14 mt-12  border-2 shadow-xl mr-10 border-b-rose-500'>
      <div className='font-bold text-center text-xl mt-10'>  Also Familiar with</div>
      <div className='mt-5 ml-10 mb-16 mr-5 text-center'> 
      Data Structure, Problem-solving, Git (Version control), Software Development Life Cycle (SDLC),
NoSQL, MongoDB, Rest Api, Machine Learning,Deep Learning
      </div>
      </div>

    
      </div>

    </div>
  )
}

export default whatIdo