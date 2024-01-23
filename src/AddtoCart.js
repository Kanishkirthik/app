
import { useParams } from "react-router-dom";
import Nav from "./Nav2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState,useEffect } from "react";
import { data } from "./App";
import axios from "axios";
import Footer from "./Footer";

export default function AddtoCart() {
  const {id}=useParams();
  const[Profile,setProfile]=useState([]);
  useEffect(() => {
    async function getsProfile() {
    const response = await axios.get("https://kk-elearn.onrender.com/Profile");
    setProfile(response.data);
    } getsProfile(); }, []);
    const [cart,setCart]=useState([]);
    Profile.filter((e)=>e._id===id);
    console.log(data);
    data.filter((e)=>Profile.map((s)=>s.Cart.filter((f)=>f===e.Name)));
    console.log(data);
  let handleAddtocart = function() {};
  const islogin = true;

  return (
    <div className="container-fluid justify-content-evenly" style={{ backgroundColor: '#9DB2BF' }}>
          <div className="row mb-3">
        <Nav istrue={islogin}></Nav>
      </div>
      <div className="row">
        <div className="col">
          <table class="table table-responsive table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">Course Name</th>
                <th scope="col">Author</th>
                <th scope="col">Rating</th>
                <th scope="col">Price</th>
                <th scope='col'>Remove</th>
              </tr>
            </thead>
            <tbody>
             {data.map((e)=>
              <tr>
                <td>{e.Name} </td>
                <td>{e.Mentor}</td>
                <td>4.5</td>
                <td>{e.Price}</td>
                <td><button className='btn text-white  ' style={{backgroundColor:'#27374D'}}>Remove</button></td>
              </tr>
             )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row justify-content-center">
        <button className=" w-auto  btn text-center text-white" style={{backgroundColor:'#27374D'}}>Checkout</button>
      </div>
      <Footer/>
    </div>
  );
}
