// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Journal from './pages/Journal';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
