import Nav from "./Nav2";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Dp from "./717821p224_photo .jpg";
import { Link, useParams } from "react-router-dom";
import {useEffect, useState } from "react";
import axios from "axios";
import Course from "./Course";
let data=[];
function App() {

  const {Data}=useParams();
  console.log(Data)
const [Courses,setCourse]=useState([]);
useEffect(() => {
 async function getsCourse() {
 const response = await axios.get("http://localhost:3001/Course");
 setCourse(response.data);
 } getsCourse(); }, []);
data=Courses;

  return (
    <div >
    
     <Nav/>
      

      <div   className="container-fluid" style={{color:'#FFA500'}}>
        <h4>Learn from 275+ leading universities and companies</h4>
        <div className="row">
            <div className="col-sm-3">
              <img src="data:image/jpeg;base64,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"width={'100px'} height={'100px'}></img>
            </div>
            <div className="col-sm-3">
               <img src="https://tse2.mm.bing.net/th/id/OIP.vaI5mdOwfF8e50rGYjsdKgHaE6?w=249&h=180&c=7&r=0&o=5&pid=1.7" width={'100px'}  height={'100px'}></img>
            </div>
            <div className="col-sm-3">
               <img src="https://tse2.mm.bing.net/th/id/OIP.TpgvsjZ372sh_ZXSCLocAQAAAA?pid=ImgDet&w=186&h=119&c=7" width={'100px'}  height={'100px'}></img>
            </div>
            <div className="col-sm-3">
               <img src="https://1000logos.net/wp-content/uploads/2022/07/Johns-Hopkins-University-Logo-Athletics.png" width={'100px'}  height={'100px'}></img>
            </div>
        </div>
        <div className="row">
        <h5>Recently added Course </h5>
        <div className="row"  style={{color:'#FFA500'}}>
            {Courses.map((e) => (
              <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4 fs-6 mt-2 mb-2  "   style={{color:'#FFA500'}}>
                <div class="  shadow card   bg-dark  " style={{ width: "auto" }}>
                  <img src={e.Image} class="card-img-top" alt="..." width={'auto'}  />
                  <div className=" card-body " style={{color:'#FFA500'}} >
                    <h5 className="card-title  " style={{color:'#FFA500'}}>{e.Name}</h5>
                    <h6 className="text-end ">
                      <i class="bi bi-currency-rupee"style={{color:'#FFA500'}}></i>
                      {e.Price}
                    </h6>
                    <h6 className="text-end" style={{color:'#FFA500'}}>
                    <i class=" bi bi-star input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                     <i class="bi bi-star" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i class=" bi bi-star" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </h6>
                    <p className="card-text text-justify " style={{textAlign:'justify',textJustify:'inter-word'}}>{e.Des.slice(0,200)}</p>
                   <h6 className="text-end " ></h6>
                    <div href="" className="w-100 text-center " style={{backgroundColor:'black'}}>
                      <Link
                        className=" text-decoration-none text-center "
                        to={`/ViewCourse/${e._id}`}style={{color:'#FFA500'}}
                      >
                        {" "}
                        View Course{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
export {data};
export default App;
