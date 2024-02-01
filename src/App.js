// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComp from './Card';
import TicketBookingForm from './Form';
import './App.css';

const App = () => {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CardComp />} />
          <Route path="/book-tickets" element={<TicketBookingForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
