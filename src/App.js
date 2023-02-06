import './App.css';
import Nav from './Container/Nav/Nav';
import Home from './Container/Home/Home';
import AboutMe from './Container/AboutMe/AboutMe';
import Greeting from './Container/Greeting/Greeting';
import MySkill from './Container/MySkill/MySkill';
import MyResume from './Container/MyResume/MyResume';
const App = () => {


  return (
    <div className='App'>
      <Nav />
     <Greeting />
     <Home />
     <AboutMe />
     <MySkill />
     <MyResume />
    </div>
  );
}

export default App;
