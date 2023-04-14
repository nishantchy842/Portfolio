import './App.css';
import Nav from './Container/Nav/Nav';
import Home from './Container/Home/Home';
import AboutMe from './Container/Tools/AboutMe';
import Greeting from './Container/Greeting/Greeting';
import MySkill from './Container/MySkill/MySkill';
import MyResume from './Container/MyResume/MyResume';
import Project from './Container/Project/Project';
import Contact from './Container/Constact/Contact';
import CanvasLoader from './Container/Loader';
const App = () => {


  return (
    <>

      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Nav />
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
    </>
  );
}

export default App;
