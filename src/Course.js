import React from "react";
import Nav from './Nav2'
import Search from "./Search";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import axios from "axios";
import { data } from "./App";
import { User } from "./App";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Filter from "./Filter2";
export default function Course(){
 let id;
    return (
      <>
      <Nav ><Search>
          </Search>
          </Nav>
        <div className="container-fluid ">
            <div className="row"  style={{color:'#FFA500'}}>
            {/* {Coursedata.map((e) => (
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
                   <h6 className="text-end " > <i class="bi btn text-end bi-cart-plus-fill" style={{color:'#FFA500'}} onClick={()=>{ id && axios.put(`https://kk-elearn.onrender.com/Profile/${id}`,{Cart:e.Name}).then((result)=>console.log('updated cart')).catch((err)=>console.log(err))}}></i></h6> 
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
            ))} */}
          </div>
        </div>
        <Footer/>
      </>
    );
}
