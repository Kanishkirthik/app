import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import Row from 'react-bootstrap/esm/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
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
              <button class="btn bg-black " style={{color:' #FFA500'}} type="submit">
                Search
              </button>
            </form>
          </div>
   
    </>
  )
}
