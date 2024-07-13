import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Blogs from './Pages/Blogs';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Header from './Components/Header';
import FooterCom from './Components/Footer';
import PrivateRoute from './Components/PrivateRoute';
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute';
import CreatePost from './Pages/CreatePost';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      
      <Route path='/about' element={<About />}/>
      <Route element={<PrivateRoute />}>
      <Route path='/dashboard' element={<Dashboard />} />
      </Route>   
      <Route element={<OnlyAdminPrivateRoute />}>
      <Route path='/create-post' element={<CreatePost />} />
      </Route>    
      <Route path ='/blogs' element ={<Blogs />} />
      <Route path='/signin' element ={<Signin />} />
      <Route path ="/signup" element ={<Signup />} />
    </Routes>
    <FooterCom />
    </BrowserRouter>
  );
};

export default App;