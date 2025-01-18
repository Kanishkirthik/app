import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleAuthProvider } from './firebase';
import Footer from "./Footer";
import Nav from './Nav2';
export default function Login() {
  const navigate = useNavigate();
  const [UserName, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Role, setRole] = useState("");
  const handleSubmit = async function (e) {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(UserName, Password);
      navigate('/');
    } catch (err) {
      console.log(err);
    }

  }
  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleAuthProvider);

      console.log('Google login successful');
      const role=prompt("Enter Your Role")
      setTimeout(
      await axios.post("https://kk-elearn.onrender.com/Register", {
        Username: userCredential.user.displayName,
        Email: userCredential.user.email,
        Uid: userCredential.user.uid,
        Role:role,
        Photourl: userCredential.user.photoURL
      }).then( async (result) => (axios.post("https://kk-elearn.onrender.com/Profile", {
        Username: result.data.Username, Uid: result.data.Uid,
        Photourl: result.data.Photourl,
        Role:role
      }).then(console.log("inserted")).catch((err) => console.log(err))))
        .catch((err) => console.log(err))
    ,10000);

      sessionStorage.setItem("token", (await auth.currentUser.getIdTokenResult()).token)
    }

    catch (error) {
      console.error('Google login error:', error.message);
    }
  
  };
  return (
    <div >
      <Nav></Nav>
      <div className="container-fluid" style={{  width: 'auto' }}>
        <div
          className="row justify-content-center   app-container "
          style={{ height: "98vh", width: 'auto' }}
        >
          <div className=" shadow card  text-white  col-md-3 col-sm-3 align-self-center rounded-4 fs-3" >
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
                  onChange={(e) => { setUsername(e.target.value) }}
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
                  onChange={(e) => { setPassword(e.target.value) }}
                  required={true}
                ></input>
              </div>
              <div>
                <button className="btn w-100 rounded-5 mb-2" style={{ backgroundColor: 'black', color: '#FFA500' }} type="submit">Login</button>
                <button className="btn w-100 rounded-5 mb-2 " style={{ backgroundColor: 'black', color: '#FFA500' }} onClick={handleGoogleLogin}>Login with Google</button>
              </div>
              <div className="text-end" >ForgotPassword</div>
              <div>
                <div className="text-center ">Don't have Account ?</div>
                <button className="btn w-100 rounded-5" style={{ backgroundColor: 'black', color: '#FFA500' }} type="button" onClick={() => navigate("/Register")}>CreateAccount</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}