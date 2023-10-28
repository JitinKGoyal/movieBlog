import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Events from './components/Events';
import Gallery from './components/Gallery';
import TopMovies from './components/TopMovies';
// import Schedule from './components/Schedule';
import Blog from './components/Quote';
// import Faq from './components/Faq';
import Contact from './components/Contact';
import MovieDetails from './components/MovieDetails';
import Quote from './components/Quote';
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      >dfgfdgfdg</motion.div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/top-Movies' element={<TopMovies />} />
        <Route path='/quote' element={<Quote />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/movie-detail' element={<MovieDetails />} />
        <Route path='*' element={<h1>Page not found</h1>} />
        {/* <Route path='/events' element={<Events />} /> */}
        {/* <Route path='/faq' element={<Faq />} /> */}
        {/* <Route path='/schedule' element={<Schedule />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
