
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import Movies from './components/Movies';
import Mysidebar from './components/Mysidebar';


function App() {


  return (
    <>
      <div id="app" style={({ height: "100vh" }, { display: "flex" })}>

        <Mysidebar />

        <main className='px-4 w-100 overflow-auto' style={{ height: "100vh" }}>

          <Routes>
            <Route path='/addMovie' element={<AddMovie/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/editMovie' element={<EditMovie/>}/>
          </Routes>
          
        </main>

      
      </div>

    </>
  );
}

export default App;
