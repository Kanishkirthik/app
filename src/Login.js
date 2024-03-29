import React, { useState } from "react";
import  'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import {auth,googleAuthProvider} from './firebase'; 
import Nav from './Nav2';
import Footer from "./Footer";
import axios from "axios";
export default function Login(){
  const navigate = useNavigate();
  const [UserName,setUsername]=useState('');
  const [Password,setPassword]=useState('');
  const [Role, setRole] = useState("");
  const handleSubmit =async function(e){
    e.preventDefault();
    try{
    await  auth.signInWithEmailAndPassword(UserName, Password);
    navigate('/');
    }catch(err){
      console.log(err);
    }

  }
  const handleGoogleLogin = async () => {
    try {
      const userCredential =await auth.signInWithPopup(googleAuthProvider);
      console.log('Google login successful');
      axios.post("http://localhost:3001/Register", {
        Username:userCredential.user.displayName,
        Email: userCredential.user.email,
        Uid:userCredential.user.uid,
        Photourl:userCredential.user.photoURL
      }).then((result) => (axios.post("http://localhost:3001/Profile",{Username:result.data.Username,Uid:result.data.Uid,
       Photourl:result.data.Photourl}).then(console.log("inserted")).catch((err)=>console.log(err))))
      .catch((err) => console.log(err))
      navigate('/');
    } catch (error) {
      console.error('Google login error:', error.message);
    }
  };
    return (
      <div >
     <Nav></Nav>
      <div className="container-fluid" style={{color:'#FFA500' ,width:'auto'}}>
       <div
        className="row justify-content-center  "
        style={{ height: "98vh",width:'auto' }}
        >
           <div className=" shadow  col-md-3 col-sm-3 align-self-center bg-dark  rounded-4 fs-3" >
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
                <button className="btn w-100 rounded-5 mb-2"   style={{backgroundColor:'black',color:'#FFA500'}} type="submit">Login</button>
                <button className="btn w-100 rounded-5 mb-2 "   style={{backgroundColor:'black',color:'#FFA500'}} onClick={handleGoogleLogin}>Login with Google</button>
              </div>
              <div className="text-end" >ForgotPassword</div>
              <div>
              <div className="text-center ">Don't have Account ?</div>
             <button className="btn w-100 rounded-5"   style={{backgroundColor:'black',color:'#FFA500'}}  type="button" onClick={()=>navigate("/Register")}>CreateAccount</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
</div>
    );
}