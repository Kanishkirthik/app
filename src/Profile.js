import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import Dp from "./717821p224_photo .jpg";
import Enrolled from "./EnrolledCourse";
import Completed from "./Completed";
import DashBoard from "./MentorDashBoard";
import axios from "axios";
import { useNavigate, useParams,Link } from "react-router-dom";
import { data } from "./App";
import { auth } from "./firebase";
let MentorCourse=[];
 
export default function Profile() {
  const [Profile,setProfile]=useState([]);

  const navigate = useNavigate();
  const [StateEnrolled, setEnrolled] = useState(false);
  const [StateCompleted, setCompleted] = useState(false);
  const [StateDashBoard, setDashBoard] = useState(false);
  console.log(auth);
   useEffect(() => {
    async function getsProfile() {
    const response = await axios.get("http://localhost:3001/Profile");
    setProfile(response.data);
    } getsProfile(); }, []);
    let Filter=[]
    if(auth.currentUser!=null){
    Filter=Profile.filter((e)=>e.Uid===auth._delegate.currentUser.uid)
    }else{
      alert("Please Login");
    }
  
  return (
    <div className="container-fluid">
      {Filter.map((e) => (
        <div
          className="row  "
          style={{ minHeight: "calc(100vh)" }}
        >
          <div className=" col-md-3 col-xxl-2 col-xs-3 col-lg-3 col-sm-3  " style={{color:'#FFA500'}}>
            <div
              class="card  bg-dark   h-100"
              style={{  width: "auto" }}
            >
              <img
                src={e.Photourl}
                alt="..."
                className=" align-self-center  card-img-top w-auto h-auto rounded-pill"
              />
              <h5 class="card-title text-center   fs-6" style={{color:'#FFA500'}}>
                {e.Username}
              </h5>
              <div class="card-body text-start">
                <h6 className=" text-center  " style={{color:'#FFA500'}}>{e.Role}</h6>
                <div className="">
                  <ul
                    class="list-group text-start  "
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <div className="row h-100 mb-3 "style={{color:'#FFA500'}}>
                      {e.Role === "Mentor" && (
                        <li>
                          <a
                            class="   w-100 text-decoration-none"
                            onClick={() => {
                              setEnrolled(false);
                              setCompleted(false);
                              setDashBoard(true);
                            }}
                            style={{color:'#FFA500'}}
                          >
                            DashBoard
                          </a>
                        </li>
                      )}
                    </div>
                    <div className="row h-100 mb-3 " style={{color:'#FFA500'}}>
                      {e.Role === "Mentor" && (
                        <li>
                          <a
                            class="   w-100  text-decoration-none"
                            onClick={() => {
                              setEnrolled(false);
                              setCompleted(false);
                              setDashBoard(true);
                            }}
                            style={{color:'#FFA500'}}
                          >
                            Performance
                          </a>
                        </li>
                      )}
                    </div>
                    <div className="row h-100 mb-2 "style={{color:'#FFA500'}}>
                      <li>
                        <a
                          class="     w-100 text-decoration-none"
                          onClick={() => {
                            setEnrolled(true);
                            setDashBoard(false);
                            setCompleted(false);
                          }}
                          style={{color:'#FFA500'}}
                        >
                          Enrolled Courses
                        </a>
                      </li>
                    </div>
                    <div className="row h-100 mb-3" style={{color:'#FFA500'}}>
                      <li>
                        <a
                          class="   w-100  text-decoration-none"
                          onClick={() => {
                            setEnrolled(false);
                            setCompleted(true);
                            setDashBoard(false);
                          }}
                          style={{color:'#FFA500'}}
                        >
                          Completed Courses
                        </a>
                      </li>
                    </div>
                    <div className="row h-100 mb-3"style={{color:'#FFA500'}}>
                      <li>
                        <a class="w-100  text-decoration-none" style={{color:'#FFA500'}}>
                          Certficates
                        </a>
                      </li>
                    </div>
                    <div className="row h-100 mb-3 " style={{color:'#FFA500'}}>
                      <li>
                      <Link  style={{textDecoration:'none',color:'#FFA500'}} to={`/Cart`}>Cart</Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="align-self-center" style={{ width: "100%" }}>
                <button
                  className="btn  w-100 "
                  style={{ backgroundColor: "black" ,color:'#FFA500'}}
                  onClick={async() =>{try{
                    await auth.signOut();
                  }catch(err){
                    console.log(err)
                  }}} >
                  log out
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-end p-2">
              <button
                className="btn  btn-close bg-white "
                onClick={() => navigate('/')}
              ></button>
            </div>
            {StateEnrolled && <Enrolled data={e.Enrolled} />}
            {StateCompleted && <Completed data={e.Completed} />}
            {StateDashBoard && <DashBoard Mentor={MentorCourse}/>}
          </div>
        </div>
      ))}
    </div>
    );
    
}

