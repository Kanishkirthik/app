import { useState } from "react";
import React from "react";
export default function Checkouts(){
    const [val, setVal] = useState("");
    
function cc_format(value) {
console.log(typeof value)
value.replace(/\s+/g, " ").replace(/[^0-9]/gi, " ").substr(0, 16);;
    const parts = [];
  
    for (let i = 0; i < value.length; i += 4) {
      parts.push(value.substr(i, 4));
    }
  
    return parts.length > 1 ? parts.join(" ") : value;
  }
    return (
      <div className="container">
        <div className="card">
          <h3 className="card-title"> Machine Learning Course</h3>
          <div className="card-body">
            <form>
              <div>
                <label for="username" className="form-label">
                  Card No
                </label>
                
                <input
                  type="text"
                  className="form-control rounded-5"
                  id="username"
                  value={cc_format(val)}
                  onChange={(e)=> setVal(e.target.value)}
                  placeholder="xxxx xxxx xxxx xxxx"
                  required={true}
                
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}