import React from "react";
import Nav from './Nav2'
import Search from "./Search";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import axios from "axios";
import { data } from "./App";
import { User } from "./App";
import { datauser } from "./Nav2";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Filter from "./Filter2";
export default function Course(){
 const  Coursedata=data;
 console.log(datauser);
 let id;
 datauser.map((e)=>id=e._id);
    return (
      <div>
      <div className="row"> <Nav ><Search>
          </Search>
          </Nav></div>
        <div>
            <div className="row" >
            {Coursedata.map((e) => (
              <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4    ">
                <div class="  shadow card  text-white bg-dark  " style={{ width: "auto" }}>
                  <img src={e.Image} class="card-img-top" alt="..." width={'auto'}  />
                  <div className=" card-body text-white " >
                    <h5 className="card-title text-white ">{e.Name}</h5>
                    <h6 className="text-end ">
                      <i class="bi bi-currency-rupee"></i>
                      {e.Price}
                    </h6>
                    <h6 className="text-end">
                    <i class=" bi bi-star input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                     <i class="bi bi-star" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <i class=" bi bi-star" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </h6>
                    <p className="card-text text-justify " style={{textAlign:'justify',textJustify:'inter-word'}}>{e.Des.slice(0,200)}</p>
                   <h6 className="text-end " > <i class="bi btn text-end bi-cart-plus-fill" onClick={()=>{ id && axios.put(`https://kk-elearn.onrender.com/Profile/${id}`,{Cart:e.Name}).then((result)=>console.log('updated cart')).catch((err)=>console.log(err))}}></i></h6> 
                    <div href="" className="w-100 text-center " style={{backgroundColor:'black'}}>
                      <Link
                        className=" text-decoration-none text-center text-white"
                        to={`/ViewCourse/${e._id}`}
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
        <Footer/>
      </div>
    );
}