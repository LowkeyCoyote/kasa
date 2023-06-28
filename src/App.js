import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Housing from './pages/Housing';


function App() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  )
}

export default App;
