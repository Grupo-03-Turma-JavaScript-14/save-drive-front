import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Usuario from './pages/tsx/Usuario/Usuario'
import Categoria from './pages/tsx/Categoria/Categoria'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/tsx/Home';

function App() {
  return (
    <>
   <Navbar />
        <BrowserRouter>
            <Routes>
              <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/usuarios"
                    element={<Usuario />}
                />
                <Route
                    path="/categorias"
                    element={<Categoria />}
                />
            </Routes>
        </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;