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
let filter = [];
let MentorCourse=[];
export default function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [StateEnrolled, setEnrolled] = useState(false);
  const [StateCompleted, setCompleted] = useState(false);
  const [StateDashBoard, setDashBoard] = useState(false);
  console.log(username);
  
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function getsUser() {
      const response = await axios.get("https://kk-elearn.onrender.com/Profile");
      setUser(response.data);
    }
    getsUser();
  }, []);
 
  console.log(user);

  filter = user.filter((e) => e.Username === username);
  let role="";
  
  filter.map((e)=>role=e.Role);
  console.log(role);
  if(role==='Mentor'){
    console.log("hi")
  MentorCourse=data.filter((e)=>e.Mentor===username);
 

  }
  console.log(MentorCourse);
  


  //console.log(JSON.stringify(filter));
  return (
    <div className="container-fluid">
      {filter.map((e) => (
        <div
          className="row  "
          style={{ backgroundColor: "#9DB2BF", minHeight: "calc(100vh)" }}
        >
          <div className=" col-md-3 col-xxl-2 col-xs-3 col-lg-3 col-sm-3 text-white  ">
            <div
              class="card   h-100"
              style={{ backgroundColor: "#27374D", width: "auto" }}
            >
              <img
                src={Dp}
                alt="..."
                className=" align-self-center  card-img-top w-50 h-10 rounded-pill"
              />
              <h5 class="card-title text-center  text-white fs-6">
                {e.Username}
              </h5>
              <div class="card-body text-start">
                <h6 className="text-white text-center  ">{e.Role}</h6>
                <div className="">
                  <ul
                    class="list-group text-start  "
                    style={{
                      listStyleType: "none",
                      backgroundColor: "#27374D",
                    }}
                  >
                    <div className="row h-100 mb-3 ">
                      {e.Role === "Mentor" && (
                        <li>
                          <a
                            class="   w-100 text-white text-decoration-none"
                            onClick={() => {
                              setEnrolled(false);
                              setCompleted(false);
                              setDashBoard(true);
                            }}
                          >
                            DashBoard
                          </a>
                        </li>
                      )}
                    </div>
                    <div className="row h-100 mb-3 ">
                      {e.Role === "Mentor" && (
                        <li>
                          <a
                            class="   w-100 text-white text-decoration-none"
                            onClick={() => {
                              setEnrolled(false);
                              setCompleted(false);
                              setDashBoard(true);
                            }}
                          >
                            Performance
                          </a>
                        </li>
                      )}
                    </div>
                    <div className="row h-100 mb-2 ">
                      <li>
                        <a
                          class="     w-100 text-white text-decoration-none"
                          onClick={() => {
                            setEnrolled(true);
                            setDashBoard(false);
                            setCompleted(false);
                          }}
                        >
                          Enrolled Courses
                        </a>
                      </li>
                    </div>
                    <div className="row h-100 mb-3">
                      <li>
                        <a
                          class="   w-100 text-white text-decoration-none"
                          onClick={() => {
                            setEnrolled(false);
                            setCompleted(true);
                            setDashBoard(false);
                          }}
                        >
                          Completed Courses
                        </a>
                      </li>
                    </div>
                    <div className="row h-100 mb-3">
                      <li>
                        <a class="w-100 text-white text-decoration-none">
                          Certficates
                        </a>
                      </li>
                    </div>
                    <div className="row h-100 mb-3 ">
                      <li>
                      <Link  style={{textDecoration:'none',color:'white'}} to={`/Cart/${e._id}`}>Cart</Link>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="align-self-center" style={{ width: "100%" }}>
                <button
                  className="btn text-white w-100 "
                  style={{ backgroundColor: "#27374D" }}
                  onClick={() => {
                    filter.pop();
                    console.log(filter);
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  log out
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-end p-2">
              <button
                className="btn  btn-close bg-white "
                onClick={() => navigate(`/${JSON.stringify(filter)}`)}
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
export { filter };