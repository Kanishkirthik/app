import Nav from "./Nav2";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Dp from "./717821p224_photo .jpg";
import { Link, useParams } from "react-router-dom";


import {useEffect, useState } from "react";
import axios from "axios";
let data=[];
let User=[];
function App() {

  const {Data}=useParams();
  console.log(Data)
  const[islogin,setLogin]=useState(false);
  if(Data){
   User=JSON.parse(Data);
 //setLogin(true);
   }
const [Courses,setCourse]=useState([]);
useEffect(() => {
 async function getsCourse() {
 const response = await axios.get("https://kk-elearn.onrender.com/Course");
 setCourse(response.data);
 } getsCourse(); }, []);
data=Courses;

  return (
    <div className="container-fluid" style={{ backgroundColor: '#9DB2BF' }}>
      <div className="row mb-3">
        <Nav istrue={islogin}></Nav>
      </div>
      <div className="row  justify-content-center ">
        <div className="col-sm-6 align-self-center">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner h-50  text-bg-secondary ">
              {data.map((e) => (
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src={e.Image}
                    width={"auto"}
                    height={"h-50"}
                    class="d-block w-100"
                    alt="..."
                  />
                  <div
                    class="carousel-caption d-none d-md-block text-white"
                  
                  >
                    <h5>TOP #1 Course</h5>
                    <p>{e.Name}</p>
                  </div>
                </div>
              ))}
              {data.map((e) => (
                <div class="carousel-item" data-bs-interval="2000">
                  <img
                    src={e.Image}
                    width={"auto"}
                    height={"h-75"}
                    class="d-block w-100"
                    alt="..."
                  />
                  <div
                    class="carousel-caption d-none d-md-block text-white   "
                   
                  >
                    <h5>New one</h5>
                    <p>{e.Name}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3 className="text-center " style={{ color: 'white' }}>
            Top learners of Month!!
          </h3>
          <div
            id="Top"
            class="carousel carousel-dark slide text-white "
            data-bs-ride="carousel"
          >
            
            <div class="carousel-inner text-white">
              <div class="carousel-item active " data-bs-interval="10000">
                <div className="row">
                  <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div  className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center  text-white"
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body  text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white "
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: 'auto' }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div  className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white "
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
               <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body  text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div  className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white "
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              </div>
              <div class="carousel-item " data-bs-interval="10000">
               <div className="row">
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body  text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white"
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body text-white  " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white "
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white"
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body  text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white "
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>
              <div class="carousel-item  text-white " data-bs-interval="10000">
                 <div className="row">
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body  text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white "
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "18rem" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white "
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card    justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white "
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4  rounded-4">
                <div class="card  text-white  justify-content-center   " style={{ width: "auto" }}>
                 
                  
                  <img
                    src={
                    Dp
                    }
                    className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
                    alt="..."
                    
                   
                  />
              
                  <div class="card-body text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 class="card-title text-center">xxx</h5>
                    <h6>Student</h6>
                    <p class="card-text">KARPAGAM COLLEGE OF ENGNIEERING</p>
                    <div className="w-100 text-center " style={{backgroundColor:'#526D82'}}>
                      <Link
                        className=" text-decoration-none text-center text-white "
                        to={'/Profile'}
                      >
                       View Profile
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
               
</div>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#Top"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#Top"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export {data};
export {User};
export default App;
