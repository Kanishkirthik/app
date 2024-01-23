import axios from "axios";
import { filter } from "./Profile";
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function DashBoard(props) {
  const [Create, setCreate] = useState(false);
  const [Upadte, setUpdate] = useState(false);
  const [Delete, setDelete] = useState(false);
  const [Search, setSearch] = useState();
  const [Searched, setSearched] = useState([]);
  let MentorName = "";
  let Courses = [];
  Courses = props.Mentor;
  const [updateCheck, setChecked] = useState({
    Name: "",
    Image: "",
    Des: "",
    M1Name: "",
    M2Name: "",
    M3Name: "",
    M1Video: "",
    M2Video: "",
    M3Video: "",
    Level: "",
    Price: "",
  });
  filter.map((e) => (MentorName = e.Username));
  const [Course, setCourse] = useState({
    Name: "",
    Image: "",
    Des: "",
    M1Name: "",
    M2Name: "",
    M3Name: "",
    M1Video: "",
    M2Video: "",
    M3Video: "",
    Level: "",
    Price: "",
  });
  const [Updatedata, setUpdatedata] = useState({
    Name: "",
    Image: "",
    Des: "",
    M1Name: "",
    M2Name: "",
    M3Name: "",
    M1Video: "",
    M2Video: "",
    M3Video: "",
    Level: "",
    Price: "",
  });
  let id = "";
  let handelDelete=function(){
    Searched.map((e) => (id = e._id));
    axios.delete(`http://localhost:3001/Course/${id}`).then(()=>console.log("deleted")).catch((err)=>console.log(err));
  }
  let handleupdate = function(e) {
    e.preventDefault();
    Searched.map((e) => (id = e._id));
    if(Updatedata.Name.length>0){
    axios
      .put(`http://localhost:3001/Course/${id}`, {
        Name: Updatedata.Name
      })
      .then((result) => console.log())
      .catch((error) => console.log());
    }
    if(Updatedata.Image.length>0){
      axios
        .put(`http://localhost:3001/Course/${id}`, {
          Image: Updatedata.Image
        })
        .then((result) => console.log())
        .catch((error) => console.log());
      }
      if(Updatedata.Des.length>0){
        axios
          .put(`http://localhost:3001/Course/${id}`, {
           Des : Updatedata.Des
          })
          .then((result) => console.log())
          .catch((error) => console.log());
        }
        if(Updatedata.M1Name.length>0){
          axios
            .put(`http://localhost:3001/Course/${id}`, {
              M1Name: Updatedata.M1Name
            })
            .then((result) => console.log())
            .catch((error) => console.log());
          }
          if(Updatedata.M2Name.length>0){
            axios
              .put(`http://localhost:3001/Course/${id}`, {
                M2Name: Updatedata.M2Name
              })
              .then((result) => console.log())
              .catch((error) => console.log());
            }
            if(Updatedata.M3Name.length>0){
              axios
                .put(`http://localhost:3001/Course/${id}`, {
                  M3Name: Updatedata.M3Name
                })
                .then((result) => console.log())
                .catch((error) => console.log());
              }
              if(Updatedata.M1Video.length>0){
                axios
                  .put(`http://localhost:3001/Course/${id}`, {
                    M1Video: Updatedata.M1Video
                  })
                  .then((result) => console.log())
                  .catch((error) => console.log());
                }if(Updatedata.M2Video.length>0){
                  axios
                    .put(`http://localhost:3001/Course/${id}`, {
                      M2Video: Updatedata.M2Video
                    })
                    .then((result) => console.log())
                    .catch((error) => console.log());
                  }
                  if(Updatedata.M3Video.length>0){
                    axios
                      .put(`http://localhost:3001/Course/${id}`, {
                        M3Video: Updatedata.M3Video
                      })
                      .then((result) => console.log())
                      .catch((error) => console.log());
                    }
                    if(Updatedata.Level.length>0){
                      axios
                        .put(`http://localhost:3001/Course/${id}`, {
                          Level: Updatedata.Level
                        })
                        .then((result) => console.log())
                        .catch((error) => console.log());
                      }
                      if(Updatedata.Price.length>0){
                        axios
                          .put(`http://localhost:3001/Course/${id}`, {
                            Price: Updatedata.Price
                          })
                          .then((result) => console.log())
                          .catch((error) => console.log());
                        }
  };

  let handleSearch = function(e) {
    e.preventDefault();
    console.log(Search);
    setSearched(Courses.filter((e) => e.Name === Search));

    //console.log(Searched.length);
  };
  const [generate, setgenerate] = useState(false);
  let handleupdatecheck = function(e) {
    e.preventDefault();
    if (!generate) setgenerate(true);
    else setgenerate(false);
  };

  let handleSubmit = function(E) {
    //filter.map((e) => (MentorName = e.Username));
    console.log(MentorName);
    E.preventDefault();
    axios
      .post("http://localhost:3001/Course", {
        Name: Course.Name,
        Image: Course.Image,
        Des: Course.Des,
        M1Name: Course.M1Name,
        M2Name: Course.M2Name,
        M3Name: Course.M3Name,
        M1Video: Course.M1Video,
        M2Video: Course.M2Video,
        M3Video: Course.M3Video,
        Level: Course.Level,
        Price: Course.Price,
        Mentor: MentorName,
      })
      .then((result) => console.log())
      .catch((error) => console.log());
  };

  console.log(Searched.length);
  return (
    <div className="container-fluid text-white">
      <div className="row">
        <h3 className="fst-italic ">
          "Teachers have three loves: love of learning, love of learners, and
          the love of bringing the first two loves together."
        </h3>
      </div>
      <div className="row">

        <div class="btn-group text-white " role="group" aria-label="Basic outlined example">
          <button type="button" class="btn" onClick={()=>{
            setCreate(true);
            setUpdate(false);
            setDelete(false);
            setSearched("");
          }}
          style={{backgroundColor:'#27374D',color:'white'}}>
            Create Your Course
          </button>
          <button type="button" class="btn "  onClick={()=>{
            setCreate(false);
            setUpdate(true);
            setDelete(false);
            setSearched("");
          }} style={{backgroundColor:'#27374D',color:'white'}}>
            Update Your Course
          </button>
          <button type="button" class="btn " onClick={()=>{
            setCreate(false);
            setUpdate(false);
            setDelete(true);
            setSearched("");
          }} style={{backgroundColor:'#27374D' ,color:'white'}}> 
           Delete
          </button>
        </div>
      </div>

      {Create && (
        <div className="row  mt-3" style={{ height: "auto", width: "auto" }}>
          <div
            className="  text-white col   rounded-4"
            style={{
              backgroundColor: "#526D82",
            }}
          >
            <div
              clasName="row justify-content-center"
              style={{ height: "auto", width: "auto" }}
            >
              <div  className="p-3 fs-6 col-md-6 col-lg-5 col-xl-4 col-xxl-3 col-sm-8  align-self-center " >
              <form
          
                onSubmit={handleSubmit}
              >
                <div>
                  <label for="CourseName" className="form-label">
                    Course Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-5"
                    id="CourseName"
                    placeholder="Enter the Course Name"
                    required={true}
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        Name: e.target.value,
                      });
                    }}
                  ></input>
                </div>
                <div>
                  <label for="ImageUrl" className="form-label">
                    Image Url
                  </label>
                  <input
                    type="url"
                    className="form-control rounded-5"
                    id="ImageUrl"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        Image: e.target.value,
                      });
                    }}
                    placeholder="Enter the Image Url"
                    required={true}
                  ></input>
                </div>
                <div class="mb-3">
                  <label for="Description" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    id="Description"
                    rows="3"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        Des: e.target.value,
                      });
                    }}
                  ></textarea>
                </div>
                <div>
                  <label for="M1Name" className="form-label">
                    Module 1 Title
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-5"
                    id="M1Name"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        M1Name: e.target.value,
                      });
                    }}
                    placeholder="Enter the Module 1 Title"
                    required={true}
                  ></input>
                </div>
                <div>
                  <label for="M2Name" className="form-label">
                    Module 2 Title
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-5"
                    id="M2Name"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        M2Name: e.target.value,
                      });
                    }}
                    placeholder="Enter the Module 2 Title "
                    required={true}
                  ></input>
                </div>
                <div>
                  <label for="M3Name" className="form-label">
                    Module 3 Title
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-5"
                    id="M3Name"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        M3Name: e.target.value,
                      });
                    }}
                    placeholder="Enter the Module 3 Title"
                    required={true}
                  ></input>
                </div>
                <div>
                  <label for="M1Video" className="form-label">
                    Module 1 Video
                  </label>
                  <input
                    type="url"
                    className="form-control rounded-5"
                    id="M1Video"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        M1Video: e.target.value,
                      });
                    }}
                    placeholder="Enter the Module 1 Video"
                    required={true}
                  ></input>
                </div>
                <div>
                  <label for="M2Video" className="form-label">
                    Module 2 Video
                  </label>
                  <input
                    type="url"
                    className="form-control rounded-5"
                    id="M2Video"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        M2Video: e.target.value,
                      });
                    }}
                    placeholder="Enter the  Module 2 Video"
                    required={true}
                  ></input>
                </div>
                <div>
                  <label for="M3Video" className="form-label">
                    Module 3 Video
                  </label>
                  <input
                    type="url"
                    className="form-control rounded-5"
                    id="M3Video"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        M3Video: e.target.value,
                      });
                    }}
                    placeholder="Enter the Module 3 Video"
                    required={true}
                  ></input>
                </div>
                <div>
                  <label for="Level" className="form-label">
                    Level
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-5"
                    id="Level"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        Level: e.target.value,
                      });
                    }}
                    placeholder="Enter the Level"
                    required={true}
                  ></input>
                </div>
                <div>
                  <label for="Price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-5"
                    id="Price"
                    onChange={(e) => {
                      setCourse({
                        ...Course,
                        Price: e.target.value,
                      });
                    }}
                    placeholder="Enter the Module 3 Title"
                    required={true}
                  ></input>
                </div>
                <div className="mt-2">
                  <button
                    className="btn text-white  w-100 rounded-5 mb-2"
                    style={{ backgroundColor: "#27374D" }}
                    type="submit"
                    value={"Create"}
                  >
                    Create
                  </button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {Upadte && (
        <div className="row mt-3">
          <div className="col">
            <form class="d-flex" role="search" onSubmit={handleSearch}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Enter the name of Course "
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button class="btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      )}
{Delete &&(
        <div className="row mt-3">
          <div className="col">
            <form class="d-flex" role="search" onSubmit={handleSearch}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Enter the name of Course "
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button class="btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      )
        }
    
      {Searched.length > 0 && (
        <div className="row justify-content-center ">
          <div className="col-sm-3 col-md-3   rounded-4 ">
            {Searched.map((e) => (
              <div
                class=" shadow card  mt-3 text-white "
                style={{ width: "auto" }}
              >
                <img src={e.Image} class="card-img-top" alt="..." />
                <div
                  className=" card-body text-white "
                  style={{ backgroundColor: "#526D82" }}
                >
                  <h5 className="card-title text-white ">{e.Name}</h5>
                  <h6 className="text-end ">
                    <i class="bi bi-currency-rupee"></i>
                    {e.Price}
                  </h6>
                  <p
                    className="card-text text-justify "
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    {e.Des.slice(0, 200)}
                  </p>
                  <div
                    href=""
                    className="w-100 text-center "
                    style={{ backgroundColor: "#27374D" }}
                  >
                    <Link
                      className=" text-decoration-none text-center text-white"
                      to={`/ViewCourse/${e._id}`}
                    >
                      {" "}
                      View Course{" "}
                    </Link>
                  </div>
                  {Delete &&(
                    <button style={{ backgroundColor: "#27374D" }}  className="btn text-white w-100 mt-2" onClick={handelDelete}>Delete</button>
                  )}
                </div>
              </div>
            ))}
          </div>
          {Upadte&&(
          <div className="col-xxl-6 mt-3 align-content-center">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    what are the field sets like to change ?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="row P-2">
                      <form className="row" onSubmit={handleupdatecheck}>
                        <div class=" col-sm-3 form-check  form-switch ">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="Name"
                            onChange={(e) => {
                              if (!updateCheck.Name) {
                                setChecked({
                                  ...updateCheck,
                                  Name: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  Name: "",
                                });
                              }
                            }}
                            id="Name"
                          />
                          <label class="form-check-label" for="Name">
                            Name
                          </label>
                        </div>
                        <div class=" col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="Image"
                            onChange={(e) => {
                              if (!updateCheck.Image) {
                                setChecked({
                                  ...updateCheck,
                                  Image: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  Image: "",
                                });
                              }
                            }}
                            id="Image"
                          />
                          <label class="form-check-label" for="Image">
                            Image
                          </label>
                        </div>
                        <div class=" col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="Des"
                            onChange={(e) => {
                              if (!updateCheck.Des) {
                                setChecked({
                                  ...updateCheck,
                                  Des: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  Des: "",
                                });
                              }
                            }}
                            id="Des"
                          />
                          <label class="form-check-label" for="Dest">
                            Description
                          </label>
                        </div>
                        <div class=" col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="M1Name"
                            id="M1Name"
                            onChange={(e) => {
                              if (!updateCheck.M1Name) {
                                setChecked({
                                  ...updateCheck,
                                  M1Name: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  M1Name: "",
                                });
                              }
                            }}
                          />
                          <label class="form-check-label" for="M1Name">
                            Module-1 Title
                          </label>
                        </div>
                        <div class=" col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="M2Name"
                            onChange={(e) => {
                              if (!updateCheck.M2Name) {
                                setChecked({
                                  ...updateCheck,
                                  M2Name: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  M2Name: "",
                                });
                              }
                            }}
                            id="M2Name"
                          />
                          <label class="form-check-label" for="M2Name">
                            Module-2 Title
                          </label>
                        </div>
                        <div class="col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="M3Name"
                            onChange={(e) => {
                              if (!updateCheck.M3Name) {
                                setChecked({
                                  ...updateCheck,
                                  M3Name: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  M3Name: "",
                                });
                              }
                            }}
                            id="M3Name"
                          />

                          <label class="form-check-label" for="M3Name">
                            Module-3 Title
                          </label>
                        </div>
                        <div class=" col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="M1Video"
                            onChange={(e) => {
                              if (!updateCheck.M1Video) {
                                setChecked({
                                  ...updateCheck,
                                  M1Video: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  M1Video: "",
                                });
                              }
                            }}
                            id="M1Video"
                          />
                          <label class="form-check-label" for="M1Video">
                            Module-1 Video
                          </label>
                        </div>
                        <div class=" col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="M2Video"
                            onChange={(e) => {
                              if (!updateCheck.M2Video) {
                                setChecked({
                                  ...updateCheck,
                                  M2Video: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  M2Video: "",
                                });
                              }
                            }}
                            id="M2Video"
                          />
                          <label class="form-check-label" for="M2Video">
                            Module-2 Video
                          </label>
                        </div>
                        <div class=" col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="M3Video"
                            onChange={(e) => {
                              if (!updateCheck.M3Video) {
                                setChecked({
                                  ...updateCheck,
                                  M3Video: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  M3Video: "",
                                });
                              }
                            }}
                            id="M3Video"
                          />
                          <label class="form-check-label" for="M3Video">
                            Module-3 Video
                          </label>
                        </div>
                        <div class="col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            onChange={(e) => {
                              if (!updateCheck.Level) {
                                setChecked({
                                  ...updateCheck,
                                  Level: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  Level: "",
                                });
                              }
                            }}
                            value="Level"
                            id="Level"
                          />
                          <label class="form-check-label" for="Level">
                            Level
                          </label>
                        </div>
                        <div class=" col-sm-3 form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            value="Price"
                            onChange={(e) => {
                              if (!updateCheck.Price) {
                                setChecked({
                                  ...updateCheck,
                                  Price: e.target.value,
                                });
                              } else {
                                setChecked({
                                  ...updateCheck,
                                  Price: "",
                                });
                              }
                            }}
                            id="Price"
                          />
                          <label class="form-check-label" for="Price">
                            Price
                          </label>
                        </div>
                        <div className="col-sm-4  text-center ">
                          <button
                            className="btn text-white  w-100 rounded-5 mb-2"
                            style={{ backgroundColor: "#27374D" }}
                            type="submit"
                            value={"Generate Fields"}
                          >
                            Generate Fields
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
    )}
      {generate && (
        <form
          className="p-3 fs-6 col-md-6 col-lg-5 col-xl-4 col-xxl-3 col-sm-8  align-self-center "
          onSubmit={handleupdate}
        >
          {updateCheck.Name.length > 0 && (
            <div>
              <label for="CourseName" className="form-label">
                Course Name
              </label>
              <input
                type="text"
                className="form-control rounded-5"
                id="CourseName"
                placeholder="Enter the Course Name"
                required={true}
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    Name: e.target.value,
                  });
                }}
              ></input>
            </div>
          )}{" "}
          {updateCheck.Image.length > 0 && (
            <div>
              <label for="ImageUrl" className="form-label">
                Image Url
              </label>
              <input
                type="url"
                className="form-control rounded-5"
                id="ImageUrl"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    Image: e.target.value,
                  });
                }}
                placeholder="Enter the Image Url"
                required={true}
              ></input>
            </div>
          )}
          {updateCheck.Des.length > 0 && (
            <div class="mb-3">
              <label for="Description" class="form-label">
                Description
              </label>
              <textarea
                class="form-control"
                id="Description"
                rows="3"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    Des: e.target.value,
                  });
                }}
              ></textarea>
            </div>
          )}
          {updateCheck.M1Name.length > 0 && (
            <div>
              <label for="M1Name" className="form-label">
                Module 1 Title
              </label>
              <input
                type="text"
                className="form-control rounded-5"
                id="M1Name"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    M1Name: e.target.value,
                  });
                }}
                placeholder="Enter the Module 1 Title"
                required={true}
              ></input>
            </div>
          )}
          {updateCheck.M2Name.length > 0 && (
            <div>
              <label for="M2Name" className="form-label">
                Module 2 Title
              </label>
              <input
                type="text"
                className="form-control rounded-5"
                id="M2Name"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    M2Name: e.target.value,
                  });
                }}
                placeholder="Enter the Module 2 Title "
                required={true}
              ></input>
            </div>
          )}
          {updateCheck.M3Name.length > 0 && (
            <div>
              <label for="M3Name" className="form-label">
                Module 3 Title
              </label>
              <input
                type="text"
                className="form-control rounded-5"
                id="M3Name"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    M3Name: e.target.value,
                  });
                }}
                placeholder="Enter the Module 3 Title"
                required={true}
              ></input>
            </div>
          )}
          {updateCheck.M1Video.length > 0 && (
            <div>
              <label for="M1Video" className="form-label">
                Module 1 Video
              </label>
              <input
                type="url"
                className="form-control rounded-5"
                id="M1Video"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    M1Video: e.target.value,
                  });
                }}
                placeholder="Enter the Module 1 Video"
                required={true}
              ></input>
            </div>
          )}
          {updateCheck.M2Video.length > 0 && (
            <div>
              <label for="M2Video" className="form-label">
                Module 2 Video
              </label>
              <input
                type="url"
                className="form-control rounded-5"
                id="M2Video"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    M2Video: e.target.value,
                  });
                }}
                placeholder="Enter the  Module 2 Video"
                required={true}
              ></input>
            </div>
          )}
          {updateCheck.M3Video.length > 0 && (
            <div>
              <label for="M3Video" className="form-label">
                Module 3 Video
              </label>
              <input
                type="url"
                className="form-control rounded-5"
                id="M3Video"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    M3Video: e.target.value,
                  });
                }}
                placeholder="Enter the Module 3 Video"
                required={true}
              ></input>
            </div>
          )}
          {updateCheck.Level.length > 0 && (
            <div>
              <label for="Level" className="form-label">
                Level
              </label>
              <input
                type="text"
                className="form-control rounded-5"
                id="Level"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    Level: e.target.value,
                  });
                }}
                placeholder="Enter the Level"
                required={true}
              ></input>
            </div>
          )}
          {updateCheck.Price.length > 0 && (
            <div>
              <label for="Price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control rounded-5"
                id="Price"
                onChange={(e) => {
                  setUpdatedata({
                    ...Updatedata,
                    Price: e.target.value,
                  });
                }}
                placeholder="Enter the Module 3 Title"
                required={true}
              ></input>
            </div>
          )}
          <div className="mt-2">
            <button
              className="btn text-white  w-100 rounded-5 mb-2"
              style={{ backgroundColor: "#27374D" }}
              type="submit"
              value={"update"}
            >
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
