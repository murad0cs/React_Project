import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
//import homepage from './pages/homepage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
