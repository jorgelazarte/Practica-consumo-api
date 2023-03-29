import {Routes, Route} from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/footer/Footer';
import Home from './componentes/paginas/Home';
import Personajes from './componentes/paginas/Personajes';
import Locaciones from './componentes/paginas/Locaciones';


function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/personajes' element={<Personajes/>} />
          <Route path='/locaciones' element={<Locaciones/>} />
          <Route path='/episodios' element={'/'} />
        </Routes>

      <Footer />

    </>
  
  );
}

export default App;
