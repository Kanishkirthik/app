import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Filter from './Filter2'
import Course from './Course';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Enrolled from './EnrolledCourse';
import Completed from './Completed';
import Timer from './Timer';
import Cert from './Certificate';
import ViewCourse from './ViewCourse';
import AdminDashboard from './AdminDashboard';
import AddtoCart from './AddtoCart';
import Nav from "./Nav2";
import Checkouts from './Checkout';
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
<Route path="/Cart/:id"element={<AddtoCart/>}></Route>
<Route path="/Checkouts"element={<Checkouts/>}></Route>

   </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
