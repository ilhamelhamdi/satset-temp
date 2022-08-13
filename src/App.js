import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminProposal } from "./pages/AdminProposal";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<AdminDashboard />} />
        <Route path='/proposal' element={<AdminProposal />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
