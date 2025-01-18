import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
export default function Search({children}) {
  return (
    <>
          <div >
            <form class="d-flex" role="search" style={{color:' #FFA500'}}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Enter the name of Course "
                aria-label="Search"
              />
              <button class="btn " style={{color:' #FFA500'}} type="submit">
                Search
              </button>
            </form>
          </div>
   
    </>
  )
}
