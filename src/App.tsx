import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/tsx/Aboutus'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sobre" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App