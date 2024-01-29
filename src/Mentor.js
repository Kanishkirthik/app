import React from "react";
import Dp from "./717821p224_photo .jpg";
import { Link } from "react-router-dom";
function Mentor() {
  return (
    <div  style={{color:'#FFA500'}}>
      <div class="card  " style={{ width: "auto" ,height:'auto' ,color:'#FFA500'}}>
        <img
          src={Dp}
          className=" align-self-center  rounded-pill card-img-top   w-50  h-10 "
          alt="..."
        />

        <div
          class="card-body  bg-dark "
       
        >
          <h5 class="card-title text-center">xxx</h5>
          <h6>MENTOR M.E</h6>
          <p class="card-text">
            Description: Assistant Professor Computer Science and Engineering
            Karpagam college of Engineering
          </p>
          <h6>Tutiton Timing:6.00pm-8.pm</h6>
          <h6>
            <i class="bi bi-telephone p-2"></i>91+6353789923
          </h6>
          <div
            className="w-100 text-center  bg-black "
          
          >
            <Link
              className=" text-decoration-none text-center  "
              to={"/Profile"}
              style={{color:'#FFA500'}}
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentor;