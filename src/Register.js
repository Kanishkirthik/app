import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav2";
import {auth} from './firebase'; 
import Footer from "./Footer";
export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfimPassword] = useState("");
  const [Photourl, setPhotourl] = useState("");
  const [Role, setRole] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(Role);
    if(password===confirmpassword){
      const userCredential = await auth.createUserWithEmailAndPassword(Email, password);
      console.log(userCredential);
    axios
      .post("https://kk-elearn.onrender.com/Register", {
        Username:username,
        Email: userCredential.user.email,
        Uid:userCredential.user.uid,
        Password: password,
        Role:Role,
        Photourl:Photourl
      })
      .then((result) => (axios.post("https://kk-elearn.onrender.com/Profile", {Username:result.data.Username,
      Role:result.data.Role,Photourl:result.data.Photourl}).then(console.log("inserted")).catch((err)=>console.log(err))))
      .catch((err) => console.log(err))
      
    }

  }

  return (
    <div
      style={{ color:'#FFA500', width: "auto" }}
    >
      
        <Nav></Nav>
  
      <div className="container-fluid">
      <div
        className="row justify-content-center  "
        style={{ height: "98vh", width: "auto" }}
      >
        <div
          className=" shadow  col-md-3 col-sm-3 align-self-center  rounded-4 bg-dark"
         
        >
          <form className="p-3 fs-6" onSubmit={handleSubmit}>
          <div>
              <label for="username" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control rounded-5"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter the username"
                required={true}
              ></input>
            </div>
            <div>
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control rounded-5"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter the email"
                required={true}
              ></input>
            </div>
            <div>
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control rounded-5"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter the password"
                required={true}
              ></input>
            </div>
            <div>
              <label for="Cpassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control rounded-5 mb-2"
                placeholder="Enter the confirm Password"
                onChange={(e) => {
                  setConfimPassword(e.target.value);
                }}
                id="Cpassword"
                required={true}
              ></input>
            </div>
            <label for="Qualifi" className="form-label">
                Role
              </label>
            <div className="row justify-content-center p-2">
            <div class="form-check col">
              <input
                class="form-check-input"
                type="radio"
                name="Qualifi"
                id="Qualifi"
                value={'Student'}
                onChange={(e)=>(setRole(e.target.value))}
                required
              />
              <label class="form-check-label" for="Qualifi">
               Student
              </label>
            </div>
           
            <div class="form-check col">
              <input
                class="form-check-input"
                type="radio"
                name="Qualifi"
                id="Qualifi"
                value={'Mentor'}
                onChange={(e)=>(setRole(e.target.value))}
                required
              />
              <label class="form-check-label" for="Qualifi">
               Mentor
              </label>
            </div>
            </div>
            <div>
              <label for="Photourl" className="form-label">
              Photo url
              </label>
              <input
                type="url"
                className="form-control rounded-5 mb-2"
                id="Photourl"
                onChange={(e) => setPhotourl(e.target.value)}
                placeholder="Enter the Photourl"
                required={true}
              ></input>
            </div>
            <span></span>
            <div>
              <button
                className="btn bg-black  w-100 rounded-5 mb-2"
                type="submit"
                value={"Register"}
                style={{ color:'#FFA500', width: "auto" }}
              >
                Register
              </button>
              <span className="fs-6 mb-2">
                By signing up, you agree to our Terms of Use and Privacy Policy.
              </span>
            </div>
            <div className="mb-2 text-center"> I alreday have Account?</div>
            <div>
              <button
                className=" btn  bg-black  w-100 rounded-5"
                type="button"
                value={"Login"}
                onClick={() => navigate("/Login")}
                style={{ color:'#FFA500', width: "auto" }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
