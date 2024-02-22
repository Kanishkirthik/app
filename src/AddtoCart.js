
import { useParams } from "react-router-dom";
import Nav from "./Nav2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useState,useEffect } from "react";
import { data } from "./App";
import axios from "axios";
import { auth } from "./firebase";
import Footer from "./Footer";

export default function AddtoCart() {
  const[Profile,setProfile]=useState([]);
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
    const [cart,setCart]=useState([]);
    console.log(data);
    data.filter((e)=>Profile.map((s)=>s.Cart.filter((f)=>f===e.Name)));
    console.log(data);
  let handleAddtocart = function() {};
  const islogin = true;

  return (
    <>
    <div className="row mb-3">
    <Nav istrue={islogin}></Nav>
  </div>
    <div className="container-fluid justify-content-evenly " style={{color:'#FFA500'}}>
      <div className="row">
        <div className="col-sm-12 table-responsive">
          <table class="table  bg-black  table-bordered text-center"  style={{color:'#FFA500'}}>
            <thead>
              <tr>
                <th scope="col " style={{color:'#FFA500'}}>Course Name</th>
                <th scope="col" style={{color:'#FFA500'}}>Author</th>
                <th scope="col"style={{color:'#FFA500'}}>Rating</th>
                <th scope="col"style={{color:'#FFA500'}}>Price</th>
                <th scope='col' style={{color:'#FFA500'}}>Remove</th>
              </tr>
            </thead>
            <tbody>
             {data.map((e)=>
              <tr >
                <td className="text-black">{e.Name} </td>
                <td  className="text-black">{e.Mentor}</td>
                <td className="text-black">4.5</td>
                <td className="text-black">{e.Price}</td>
                <td><button className='btn text'  style={{backgroundColor:"black",color:'#FFA500'}} >Remove</button></td>
              </tr>
             )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row justify-content-center">
        <button className=" w-auto  btn text-center text"  style={{backgroundColor:"black",color:'#FFA500'}}>Checkout</button>
      </div>
    </div>
    <Footer/>
    </>
  );
}
