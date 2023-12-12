import React, {useState, useEffect} from 'react';
import ClipLoader from "react-spinners/BarLoader";
import './App.css';
import ParticleBG from './Components/ParticleBG';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Project from './Components/Projects';
import Contact  from './Components/Contact';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div className="app-container">
      {loading ? (
        <div className="loader-container">
          <ClipLoader
            color={'#36d7b7'}
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <ParticleBG style={{ zIndex: -1, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
        </div>
      ) : (
        <Router>
          <ParticleBG style={{ zIndex: -1 }} />
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}

export default App;
