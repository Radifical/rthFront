// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentManager from './pages/StudentManager';
import Attendance from './pages/Attendance';
import EditStudent from './pages/EditStudent';
import Home from './pages';
import Login from './pages/Login';
import Navbar from '../components/Navbar'; // Import Navbar component
import { useAuth } from './AuthContext'; 

const App = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar /> {/* Use Navbar component */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manager" element={<StudentManager />} />
            <Route path="/edit/:id" element={<EditStudent />} />
            <Route path="/attendance" element={<Attendance />} />
            {/* Add additional Routes here */}
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </Router>
  );
};

export default App;
