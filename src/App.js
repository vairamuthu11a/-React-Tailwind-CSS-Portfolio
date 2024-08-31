import Header from './component/header';
import Hero from './Hero';
import './App.css';
import About from './About';
import Project from './component/Project';
import Resume from './component/Resume';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <Project/>
      <Resume />
      <Contact/>
      <Footer/>
      

    </div>
  );
}

export default App;
