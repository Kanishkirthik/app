import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import App from './App';
import Cert from './Certificate';
import Checkouts from './Checkout';
import Completed from './Completed';
import Course from './Course';
import Enrolled from './EnrolledCourse';
import Filter from './Filter2';
import './index.css';
import Login from './Login';
import Nav from "./Nav2";
import Profile from './Profile';
import Register from './Register';
import reportWebVitals from './reportWebVitals';
import Timer from './Timer';
import ViewCourse from './ViewCourse';
import Youtube from './Youtube';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
<Route path='/' element={<App/>}></Route>
<Route path='/:Data' element={<App/>}></Route>
<Route path='/Nav' element={<Nav/>}></Route>
<Route path='/Course' element={<Course><Filter/></Course>}></Route>
<Route path='/Course:id' element={<Course><Filter/></Course>}></Route>
<Route path='/Register' element={<Register/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/Profile' element={<Profile/>}></Route>
<Route path='/Enrolled' element={<Enrolled/>}></Route>
<Route path='/Completed' element={<Completed/>}></Route>
<Route path='/Certificate' element={<Cert/>}></Route>
<Route path='/Timer' element={<Timer/>}></Route>
<Route path="/ViewCourse/:id"element={<ViewCourse/>}></Route>
<Route path="/Admin/:username"element={<AdminDashboard/>}></Route>

<Route path="/Checkouts"element={<Checkouts/>}></Route>
<Route path='/Check' element={<Youtube/>}></Route>
   </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
