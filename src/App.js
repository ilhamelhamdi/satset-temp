import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminProposal } from "./pages/AdminProposal";
import StudentDashboard from './pages/StudentDashboard';
import InstructorDashboard from './pages/InstructorDashboard';
import CreateNewCourse from './pages/CreateNewCourse';
import AuthVerify from './components/AuthVerify';

function App() {
  return (
    <BrowserRouter>
      <AuthVerify>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/dashboard/student' element={<StudentDashboard />} />
          <Route path='/dashboard/instructor' element={<InstructorDashboard />} />
          <Route path='/proposal' element={<AdminProposal />} />
          <Route path='/create-course' element={<CreateNewCourse />} />
        </Routes>
      </AuthVerify>
    </BrowserRouter>
  )
}

export default App;
