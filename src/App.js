import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import EmployeeManagement from './components/EmployeeManagement';
import TripManagement from './components/TripManagement';
import DriverManagement from './components/DriverManagement';
import Employee from './components/Employee';
import EditEmpl from './components/EditEmpl';
import Login from './components/Login';
function App() {
  return (
  <Router>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-4">
          <Routes>
            <Route  path="/" element={<Login />} />
            <Route path="/employees" element={<EmployeeManagement />} />
            <Route path="/trips" element={<TripManagement />} />
            <Route path="/drivers" element={<DriverManagement />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/edit-employee/:id" element={<EditEmpl />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
