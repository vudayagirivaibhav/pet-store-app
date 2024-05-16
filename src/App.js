import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import PetDashboard from './components/PetDashboard';
import PetEditForm from './components/PetEditForm';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pets" element={<PetDashboard />} />
          <Route path="/pets/edit/:petId" element={<PetEditForm />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
