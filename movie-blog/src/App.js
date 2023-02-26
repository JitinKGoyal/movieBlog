import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Events from './components/Events';
import Gallery from './components/Gallery';
import TopDj from './components/TopDj';
import Schedule from './components/Schedule';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Contact from './components/Contact';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/top-dj' element={<TopDj />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/movie-detail' element={<MovieDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
