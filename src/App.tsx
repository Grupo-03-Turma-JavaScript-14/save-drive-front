import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Usuario from './pages/tsx/Usuario/Usuario'
import Categoria from './pages/tsx/Categoria/Categoria'

function App() {

  return (
    <>
    <BrowserRouter>
            <Routes>
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
    </>
  )
}

export default App
