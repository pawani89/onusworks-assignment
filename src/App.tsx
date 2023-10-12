import React from 'react';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import Login from './components/login';
import SetCredentials from './components/login/setCredentials';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/login/:initialUsername/:initailPassword"
            element={<SetCredentials />} />
          <Route path="/login" index element={<Login />} />
          <Route
            path="/home"
            element={<Home />}
          >
            {/* if you want to show the profile component as part of home
            few ui related changes will be done
            right now considering profile page as a different page
            point 2a and 2b are contradictory, have to take /home and /profile or /home/profile
            point
            point 3b says take to new page, then /home/profile not possible */}
            {/* <Route
              path="profile"
              element={<Profile />}
            /> */}
          </Route>
          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
