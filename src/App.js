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
 const response = await axios.get("http://localhost:3001/Course");
 setCourse(response.data);
 } getsCourse(); }, []);
data=Courses;

  return (
    <div>
    <div className="row ">
        <Nav istrue={islogin}></Nav>
      </div>

    <Footer/>
    </div>
  );
}
export {data};
export {User};
export default App;
