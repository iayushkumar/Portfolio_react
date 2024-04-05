import React,{useEffect, useState} from 'react';
import Sidebar from './components/sidebar';
import Slider from './components/Slider';
import Projects from './components/Projects';
import About from './components/About';
import WhatIdo from './components/whatIdo';
import MYJOURNEY from './components/MYJOURNEY';

const App = () => {

  

  function scrollproject() {
    var elem = document.getElementById("Projects");
    elem.scrollIntoView({ behavior: 'smooth' });

}
  function scrollabout() {
    var elem = document.getElementById("About");
    elem.scrollIntoView({ behavior: 'smooth' });

}
  function scrollinterest() {
    var elem = document.getElementById("WhatIdo");
    elem.scrollIntoView({ behavior: 'smooth' });

}
  function scrolleducation() {
    var elem = document.getElementById("MYJOURNEY");
    elem.scrollIntoView({ behavior: 'smooth' });

}

const [Hamburger, setHamburger] = useState(false);

const hamburger = (value) => {
  setHamburger(value);
  console.log(value)
}

useEffect(() => {
  // Logic to execute when Hamburger state changes
  // You can add any logic here that needs to be executed when Hamburger state changes
}, [Hamburger]); // Adding Hamburger as a dependency



  return (
    <div className='md:flex '>
    {/* Sidebar with sticky position */}
    
    <div className='sm:w-full md:w-1/5 md:sticky md:top-0 md:h-screen'>

      <Sidebar scrollproject={scrollproject} scrollabout={scrollabout} scrollinterest={scrollinterest}
      scrolleducation={scrolleducation} hamburger={hamburger} Hamburger={Hamburger}
      />
    </div>

    {/* Content container */}
    <div className='overflow-y-scroll flex-1'>
      {/* Slider component */}
      <div className='w-full h-screen'>
        <Slider hamburger={hamburger} />
      </div>
      
      {/* Projects component */}
      <div className='Projects w-full' id="Projects">
        <Projects />
      </div>
      
      <div className='About w-full about' id="About">
        <About />
      </div>
      <div className='WhatIdo w-full' id="WhatIdo">
        <WhatIdo />
      </div>
      <div className='MYJOURNEY w-full' id="MYJOURNEY">
        <MYJOURNEY />
      </div>



    </div>
  </div>
  );
};

export default App;

