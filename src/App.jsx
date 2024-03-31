// import React from 'react';
// import Sidebar from './components/sidebar';
// import Slider from './components/Slider';
// import Projects from './components/Projects';
// import About from './components/About';
// import WhatIdo from './components/whatIdo';
// import MYJOURNEY from './components/MYJOURNEY';

// const App = () => {
//   const [activeComponent, setActiveComponent] = useState('slider');
//   return (
//     <div className='flex '>
//     {/* Sidebar with sticky position */}
//     <div className='w-1/5 sticky top-0 h-screen'>
//       <Sidebar />
//     </div>

//     {/* Content container */}
//     <div className='overflow-y-scroll flex-1'>
//       {/* Slider component */}
//       <div className='w-full h-screen'>
//         <Slider />
//       </div>
      
//       {/* Projects component */}
//       <div className='w-full'>
//         <Projects />
//       </div>
      
//       <div className='w-full'>
//         <About />
//       </div>
//       <div className='w-full'>
//         <WhatIdo />
//       </div>
//       <div className='w-full'>
//         <MYJOURNEY />
//       </div>



//     </div>
//   </div>
//   );
// };

// export default App;


import React,{useState,useEffect} from 'react';
import Sidebar from './components/sidebar';
import Slider from './components/Slider';
import Projects from './components/Projects';
import About from './components/About';
import WhatIdo from './components/whatIdo';
import MYJOURNEY from './components/MYJOURNEY';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('slider');
  useEffect(() => {
    const sections = document.querySelectorAll('.content-section');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveComponent(entry.target.getAttribute('data-section'));
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <div className='flex '>
    {/* Sidebar with sticky position */}
    <div className='w-1/5 sticky top-0 h-screen'>
    <Sidebar setActiveComponent={setActiveComponent} />
    </div>

    {/* Content container */}
    <div className='overflow-y-scroll flex-1'>
      {/* Slider component */}
      <div className='w-full h-screen'>
        {/* <Slider /> */}
        <Slider className='content-section' data-section='slider' />
      
        
        
       
      </div>
      
      {/* Projects component */}
      <div className='w-full'>
      <Projects className='content-section' data-section='projects' />
      </div>
      
      <div className='w-full'>
      <About className='content-section' data-section='about' />
      </div>
      <div className='w-full'>
      <WhatIdo className='content-section' data-section='interest' />
      </div>
      <div className='w-full'>
      <MYJOURNEY className='content-section' data-section='education' />
      </div>



    </div>
  </div>
  );
};

export default App;
