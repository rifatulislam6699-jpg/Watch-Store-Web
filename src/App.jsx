import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllWatches from './pages/AllWatches';
import MensPage from './pages/MensPage';
import WomenPage from './pages/WomenPage';
import SmartWatches from './pages/SmartWatches';
import BrandGrid from './pages/BrandGrid';
import StoreLocator from './pages/StoreLocator';
import Offers from './pages/Offers';

function App() {
  return (
      <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/all-watches" element={<AllWatches />} />
          <Route path="/men" element={<MensPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/smart" element={<SmartWatches />} />
          <Route path="/brands" element={<BrandGrid />} />
          <Route path="/store" element={<StoreLocator />} />
          <Route path="/offers" element={<Offers />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
