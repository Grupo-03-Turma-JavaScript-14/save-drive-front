import { Suspense, useEffect, useState } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import Loading from './components/Loading/Loading'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './Pages/tsx/Home'
import Aboutus from './Pages/tsx/Aboutus'
import Contrato from './Pages/tsx/Produto/Contratos/Contrato'
import Categoria from './Pages/tsx/Produto/Categorias/Categoria'
import Usuario from './Pages/tsx/Produto/Usuario/Usuario'

function AppRoutes() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 700)

    return () => clearTimeout(timer)
  }, [location.pathname])

  if (loading) {
    return <Loading />
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />

        <Route path="/produto/contratos" element={<Contrato />} />
        <Route path="/produto/categoria" element={<Categoria />} />
        <Route path="/produto/usuario" element={<Usuario />} />

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <AppRoutes />

      <Footer />
    </BrowserRouter>
  )
}

export default App