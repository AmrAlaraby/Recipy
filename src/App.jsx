import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MealDetails from './pages/MealDetails';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;