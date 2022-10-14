import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Subscription from './components/pages/Subscription';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Signin from './components/pages/Signin';
import Profile from './components/Profile';
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
function App() {
  const token = getToken();
  console.log("token=",token)
  return (
    <>
      <Router>
        <Navbar token={token}/>
        
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/subscription' element={<Subscription/>} />
          <Route path='/sign-up' element={< SignUp setToken={setToken} token={token} />} />
          <Route path='/Signin' element={token?<Profile token={token}/> :< Signin setToken={setToken} token={token}/>}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;