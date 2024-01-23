import React, { useState } from "react";
import  'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import axios  from 'axios';


import Nav from './Nav2';
import Footer from "./Footer";
export default function Login(){
  const navigate = useNavigate();
  const [UserName,setUsername]=useState('');
  const [Password,setPassword]=useState('');
  const handleSubmit =function(e){
    e.preventDefault();
    axios.post('https://kk-elearn.onrender.com/Login',{Username:UserName,Password:Password}).then((result)=> navigate(`/Profile/${result.data.Username}`)).catch((err) =>prompt('Invalid Username/Password Login'));
  }
    return (
      <div className="container-fluid" style={{backgroundColor:'#9DB2BF',color:'white ' ,width:'auto'}}>
       <div className="row"><Nav></Nav></div> 
       <div
        className="row justify-content-center  "
        style={{ height: "98vh",width:'auto' }}
        >
           <div className=" shadow  col-md-3 col-sm-3 align-self-center  rounded-4" style={{ backgroundColor: "#526D82"}}>
            <form className="p-3 fs-6" onSubmit={handleSubmit}>
              <div>
                <label for="username" className="form-label">
                  UserName/Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-5"
                  id="username"
                  placeholder="Enter the username"
                  required={true}
                  onChange={(e)=>{setUsername(e.target.value)}}
                ></input>
              </div>
              <div>
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-5 mb-2"
                  id="password"
                  placeholder="Enter the password"
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required={true}
                ></input>
              </div>
              <div>
                <button className="btn w-100 text-white rounded-5"   style={{backgroundColor:'#27374D'}} type="submit">Login</button>
              </div>
              <div className="text-end" >ForgotPassword</div>
              <div>
              <div className="text-center ">Don't have Account ?</div>
             <button className="btn w-100 text-white  rounded-5"   style={{backgroundColor:'#27374D'}}  type="button" onClick={()=>navigate("/Register")}>CreateAccount</button>
              </div>
            </form>
          </div>
        </div>
        <Footer/>
      </div>

    );
}