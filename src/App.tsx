import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Loading from './components/Loading/Loading'

const Home = lazy(() => import('./Pages/tsx/Home'))
const Aboutus = lazy(() => import('./Pages/tsx/Aboutus'))

const Contrato = lazy(() => import('./Pages/tsx/Produto/Contratos/Contrato'))
const Categoria = lazy(() => import('./Pages/tsx/Produto/Categorias/Categoria'))
const Usuario = lazy(() => import('./Pages/tsx/Produto/Usuario/Usuario'))

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App