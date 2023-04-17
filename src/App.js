import './App.css';
import Nav from './Container/Nav/Nav';
import Home from './Container/Home/Home';
import AboutMe from './Container/Tools/AboutMe';
import Greeting from './Container/Greeting/Greeting';
import MySkill from './Container/MySkill/MySkill';
import Project from './Container/Project/Project';
import Contact from './Container/Constact/Contact';
import SocialMedia from './Container/Nav/SocialMedia';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './Container/Loader';



const App = () => {
  const [loader, setLoader] = useState(true)
  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoader(false);
    }, 8000);
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <>
      {
        loader ? <Loader  /> :
          
             (
              <div className='relative z-0 bg-primary'>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                  <Nav />
                  <SocialMedia />
                  <Greeting />
                </div>
                <Home />
                <MySkill />
                <AboutMe />
                <Project />
                <div className='relative z-0'>
                  <Contact />
                </div>
              </div>
            
          )
      }




    </>
  );
}

export default App;
