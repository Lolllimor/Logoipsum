import Navbar from './components/Navbar';
import './App.css';
import Learn from './components/Learn';
import Stats from './components/Stats';
import What from './components/What';
import Instructor from './components/Instructor';
import Students from './components/Students';
import Questions from './components/Questions';
import Ready from './components/Ready';
import Footer from './components/Footer';

function App () {
  return (
  <>
    <Navbar/>
    <Learn/>
    <Stats/>
    <What/>
    <Instructor/>
    <Students/>
    <Questions/>
    <Ready/>
    <Footer/>
  </>)
}

export default App;
