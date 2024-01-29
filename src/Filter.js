import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
export default function Filter(){
return (
  <div className="container">
  <div className="row  rounded-3" style={{backgroundColor:'#F3F0CA'}}>
    <div className=" text-fs-3 white text-center   text-capitalize text-justify ">
    <form >
        <div class="form-check">
        <h4 className="text-center  ">Filter</h4>
        <h4 className="text-center">Rating</h4>
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
        <h4 className="text-center ">Price</h4>
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
        <h4 className="text-center ">Language</h4>
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
        <h4 className="text-center ">Level</h4>
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
      
        <button type="button" className="btn" >Apply Filter</button>
        
        </form>
    </div>
  
  </div>
  </div>
);
}