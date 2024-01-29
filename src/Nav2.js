
import './index.css'
import { Link, useNavigate,useParams} from 'react-router-dom';
import Profile from './Profile';
import {User} from './App';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
let datauser=[];
export default function Nav({children}){
  datauser=User;
const navigate=useNavigate();
    return (
      <div className=" position-sticky">
        <div className="row ">
          <div className="col">
            <nav class=" navbar  navbar-expand-md navbar-expand-lg  bg-dark  " >
              <div class="container-fluid">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav   ">
                    <li class="nav-item  ">
                    <Link className ="nav-link  active "  aria-current="page" style={{textDecoration:'none',color:'white'}} to={'/'}>Home</Link>
                    </li>
                    <li class="nav-item ml-3">
                    <Link className ="nav-link" style={{textDecoration:'none',color:'white'}} to={'/Course'}>Course</Link>
                    </li>
                  </ul>
                  
                  <div className=' col  d-flex justify-content-end ' >
                  {children}
                  </div>
                  <div className=' col  d-flex justify-content-end  '>
                  {User.length >0 ?  <div class="dropdown-center text-end  ">
                    <a style={{textDecoration:'none', color:'white'}}
                      className=" dropdown-toggle   "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={()=>navigate(`/Profile/${User.map((e)=>e.Username)}`)}
                    >
                 <i class="fs-3 bi bi-person-circle"></i>
                    </a>
                    <div className='dropdown-menu'> 
                     <div className='dropdown-item'>
                      <Profile/>
                     </div>
                    </div>
                     
                  </div> :   <Link className=' text-white nav-link       'style={{textDecoration:'none',color:'white'}}  to={'/Login'}>Login/SignUp </Link>
                   
}
                </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
}
export { datauser};