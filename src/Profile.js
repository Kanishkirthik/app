import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Completed from "./Completed";
import Enrolled from "./EnrolledCourse";
import { auth } from "./firebase";
import DashBoard from "./MentorDashBoard";

 
export default function Profile() {
  const [Profile,setProfile]=useState({});
 
  const navigate = useNavigate();
  const [StateEnrolled, setEnrolled] = useState(false);
  const [StateCompleted, setCompleted] = useState(false);
  const [StateDashBoard, setDashBoard] = useState(false);
  const[Token,setToken]=useState(sessionStorage.getItem("token"));
  if(!Token){
  setToken(sessionStorage.getItem("token"));
  }
 
  useEffect(() => {
    async function getProfile() {
      try {
        
          const response = await axios.get(
            "https://kk-elearn.onrender.com/Profile",
            {
              params: { Username: auth.currentUser.displayName }, // Pass query parameters here
              headers: {
                Authorization: `Bearer ${Token}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.data);
          setProfile(response.data); // Update profile state
        
      } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Failed to fetch profile. Please try again."); // Replace with better UI feedback if possible
      }
    }
  
    getProfile(); // Call the async function
  }, []); // Include email in dependency array if it can change
  
  

  
  return (
    <div className="container-fluid">

        <div
          className="row  "
          style={{ minHeight: "calc(100vh)" }}
        >
          <div className=" col-md-3 col-xxl-2 col-xs-3 col-lg-3 col-sm-3  " style={{color:'#FFA500'}}>
            <div
              class="card    h-100"
              style={{  width: "auto" }}
            >
              <img
                src={Profile.Photourl}
                alt="..."
                className=" align-self-center  card-img-top w-auto h-auto rounded-pill"
              />
              <h5 class="card-title text-center   fs-6" style={{color:'#FFA500'}}>
                {Profile.Username}
              </h5>
              <div class="card-body text-start">
                <h6 className=" text-center  " style={{color:'#FFA500'}}>{Profile.Role}</h6>
                <div className="">
                  <ul
                    class="list-group text-start  "
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <div className="row h-100 mb-3 "style={{color:'#FFA500'}}>
                      {Profile.Role === "Mentor" && (
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
                      {Profile.Role === "Mentor" && (
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
            {StateEnrolled && <Enrolled data={Profile.Enrolled} />}
            {StateCompleted && <Completed data={Profile.Completed} />}
            {StateDashBoard && <DashBoard/>}
          </div>
        </div>

    </div>
    );
    
}

