import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Internships from './pages/Internships';
import About from './pages/About';
import Contact from './pages/Contact';
import Verification from './pages/verification';
import Apply from './pages/Apply';
import PaymentSuccess from "./pages/PaymentSuccess";
import Success from "./pages/Success";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="internships" element={<Internships />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/success" element={<Success />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
