import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Internships from './pages/Internships';
import About from './pages/About';
import Contact from './pages/Contact';
import Verification from './pages/verification';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="internships" element={<Internships />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/verification" element={<Verification />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
