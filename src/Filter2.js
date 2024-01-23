import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';


export default function Filter() {
  return (
    <>
      <button
        class=" position-sticky btn  button text-white  "
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        style={{backgroundColor:'#27374D'}}
      >Filter</button>
      <div
        class="container text-black  text-start  offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{backgroundColor:'#DDE6ED'}}

      >
        <div class="offcanvas-header text-black ">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
          Filter
          </h5>
          <button
            type="button"
            class="btn-close text-reset bg-white "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body fs-4">
        <div className=" text-fs-3  text-capitalize text-justify ">
    <form >
        <div class="form-check">
       
        <h4 >Rating</h4>
        <input className="form-check-input" type="radio" name="exampleRadios" value="4.5-5"/>
        <label className="form-check-label" >
        4.5-5
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios" value="4-4.5"/>
        <label className="form-check-label" >
        4-4.5
        </label>
        </div>
        <div class="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios"  value="3.5-4"/>
        <label className="form-check-label">
        3.5-4
        </label>
        </div>
        <div className="form-check">
        <h4>Price</h4>
        <input className="form-check-input" type="checkbox" value="1000-1200" id="price" />
        <label className="form-check-label" for="flexCheckDefault">1000-1200</label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="500-1000" id="price" />
        <label class="form-check-label" for="flexCheckDefault">500-1000</label>
        </div>
        <div className="form-check">   
        <input className="form-check-input" type="checkbox" value="300-500" id="price" />
        <label class="form-check-label" for="flexCheckDefault">300-500</label>
        </div>
        <div className="form-check">
        <h4 >Language</h4>
        <input className="form-check-input" type="checkbox" value="English" id="langauage" />
        <label className="form-check-label" for="flexCheckDefault">English</label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="Tamil" id="langauage" />
        <label class="form-check-label" for="flexCheckDefault">Tamil</label>
        </div>
        <div className="form-check">   
        <input className="form-check-input" type="checkbox" value="Hindi" id="langauage"  />
        <label class="form-check-label" for="flexCheckDefault">Hindi</label>
        </div>
        <div className="form-check">   
        <input className="form-check-input" type="checkbox" value="Malayalam" id="langauage"  />
        <label class="form-check-label" for="flexCheckDefault">Malayalam</label>
        </div> 
        <div className="form-check">   
        <input className="form-check-input" type="checkbox" value="Telugu" id="langauage"  />
        <label class="form-check-label" for="flexCheckDefault">Telugu</label>
        </div>
        <div className="form-check">
        <h4 >Level</h4>
        <input className="form-check-input" type="checkbox" value="All" id="level" />
        <label className="form-check-label" for="flexCheckDefault">ALl level</label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="Beginner" id="level"   />
        <label class="form-check-label" for="flexCheckDefault">Beginner</label>
        </div>
        <div className="form-check">   
        <input className="form-check-input" type="checkbox" value="Intermediate" id="level"   />
        <label class="form-check-label" for="flexCheckDefault">Intermediate</label>
        </div>
        <div className="form-check">   
        <input className="form-check-input" type="checkbox" value="Expert" id="level"   />
        <label class="form-check-label" for="flexCheckDefault">Expert</label>
        </div> 
      <div className="text-center">
        <button type="button"  style={{backgroundColor:'#27374D'}} className=" btn text-white" >Apply Filter</button>
        </div>
        </form>
        </div>
      </div>
      </div>
    </>
  );
}