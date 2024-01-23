import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Nav from "./Nav2";
import {data} from './App';
import Timer from './Timer';
import Footer from './Footer';
import Mentor from "./Mentor";
import axios from "axios";
let cartArray=[];

export default function  ViewCourse(){
const {id}=useParams();
console.log(id);
const [username, setUsername] = useState(""); 
const[Enrolled,setEnrolled]=useState(true);
const filterd=data.filter((e)=>e._id===id);
let Navigate=useNavigate();
let handleEnrolled=function(){
//Navigate('/Cart');
setEnrolled(true);


}
const [Progress,setProgress]=useState(25);
function handlePlay(){
setProgress(Progress+20)
console.log(Progress);
}
let handleSubmit=function(e){
e.preventDefault();
axios.post("")
}
const [StudentName,setStudentName]=useState();
    return (
      <div
        className="container-fluid text-white  "
        style={{ backgroundColor: "#9DB2BF" }}
      >
        <div className="row">
          <Nav />
        </div>
        {filterd.map((e) => (
          <>
            <div className="row justify-content-center ">
              <div
                className="col-sm-4 align-self-center "
                style={{ height: "auto" }}
              >
                <div
                  className=" card "
                  style={{ width: "auto", height: "auto" }}
                >
                  <img
                    src={e.Image}
                    className="card-img-top rounded-3 "
                    width={"auto"}
                    height={"auto"}
                  ></img>
                </div>
              </div>
              <div className="col-sm-4 "  style={{ backgroundColor: "#526D82"}}>
             <p style={{textAlign:'justify',textJustify:'inter-word'}} className="p-3 fs-6">{e.Des}</p>
              </div>
            </div>
          
            <div className="row justify-content-center mt-3">
              <h3 className="text-center">Our Traditional way of learning</h3>
              <div className="col-sm-4  col-xxl-2 ">
              <Mentor />
             </div>
             <div className="col-sm-3  align-self-center  rounded-4 " style={{ backgroundColor: "#526D82"}}>
              <form  className="p-3 fs-6" onSubmit={handleSubmit}>
                <div>
                <label for="username" className="form-label">
                UserName/Email
              </label>
              <input
                type="email"
                className="form-control rounded-5"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter the username"
                required={true}
              ></input>
                <label for="student_Name" className="form-label">
                Student Name
              </label>
              <input
                type="type"
                className="form-control rounded-5 mb-2"
                id="student_Name"
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter the student Name"
                required={true}
              ></input>
               <button
                className="btn text-white  w-100 rounded-5 mb-2"
                style={{backgroundColor:'#27374D'}}
                type="submit"
                value={"Register"}
              >
                Register
              </button>
                </div>
              </form>
             </div>
            </div>
          </>
        ))}
        {Enrolled &&
          filterd.map((e) => (
            <div className="row">
              <div className="row justify-content-center">
              <div className="col-sm-6">
                <h4>Completion Status</h4>
                <div class="progress rounded-pill ">
                  <div
                    class="progress-bar progress-bar-striped bg-success mb-3 "
                    role="progressbar"
                    style={{ width: Progress }}
                    aria-valuenow={Progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
              <h3 className="text-start fs-3">{e.M1Name}</h3>
              <div className="row">
                <div className="col">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      src={e.M1Video}
                      onPlay={() => console.log("time ")}
                    ></iframe>
                  </div>
                </div>
                <div className="col">
                  <Timer />
                </div>
              </div>
              <h3 className="text-start fs-3 ">{e.M2Name}</h3>
              <div className="row">
                <div className="col">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      src={e.M2Video}
                      onPlay={() => setProgress(Progress + 30)}
                    ></iframe>
                  </div>
                </div>
                <div className="col">
                  <Timer />
                </div>
              </div>
              <h3 className="text-start fs-3">{e.M3Name}</h3>
              <div className="row">
                <div className="col">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe
                      class="embed-responsive-item"
                      src={e.M3Video}
                      onPlay={() => setProgress(Progress + 40)}
                    ></iframe>
                  </div>
                </div>
                <div className="col">
                  <Timer />
                </div>
              </div>
            </div>
          ))}
          <Footer/>
      </div>
      
    );
}
export {cartArray};