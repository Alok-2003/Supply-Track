import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { MapView } from './pages/MapView';
import Dashboard from './pages/Dashboard';
import ManagementDashboard from './pages/Management';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/management" element={<ManagementDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;