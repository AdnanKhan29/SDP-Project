import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './components/pages/Analytics';
import Subscription from './components/pages/Subscription';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Signin from './components/pages/Signin';
import Profile from './components/Profile';
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function setUser(User){
  sessionStorage.setItem('user',JSON.stringify(User))
}
function getUser(){
  const User = sessionStorage.getItem('user')
  return JSON.parse(User)
}

function getToken() {
  const tokenString = sessionStorage.getItem('token')
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const token = getToken();
  console.log("token=",token)
  const user = getUser('user')
  console.log(user)
  return (
    <>
      <Router>
        <Navbar token={token}/>
        
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/Analytics' element={<Analytics/>} />
          <Route path='/subscription' element={<Subscription/>} />
          <Route path='/sign-up' element={< SignUp setToken={setToken} setUser={setUser} />} />
          <Route path='/Signin' element={token?<Profile user={user}/> :< Signin setToken={setToken} token={token} setUser={setUser}/>}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;