import './App.css';
import MapContent from './components/pages/Effect/MapContent';
import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Correlation from './components/pages/Corr/Correlation';
import Home from './components/pages/Home/Home';
import NavEff from './components/pages/Effect/NavEff';
import NavCorr from './components/pages/Corr/NavCorr';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/corr" element={<><NavCorr /><Correlation /></>} />
          <Route path="/eff" element={<><NavEff /><MapContent /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
