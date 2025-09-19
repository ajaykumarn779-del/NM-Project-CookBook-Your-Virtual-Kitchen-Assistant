import './App.css';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Category from './pages/Category';
import Recipie from './pages/Recipie';

function App() {
  return (
    <div className="App">
      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Main routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/recipie/:id" element={<Recipie />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </div>
  );
}

export default App;
