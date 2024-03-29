
import './index.css'
import { Link, useNavigate,useParams} from 'react-router-dom';
import Profile from './Profile';
import {auth} from './firebase.js'
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';

export default function Nav({children}){
  console.log(auth.currentUser);
const navigate=useNavigate();
    return (
      <div className=" position-sticky">
          <div className="col">
            <nav class=" navbar  navbar-expand-md navbar-expand-lg  bg-dark fs-6  " >
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
                    <Link className ="nav-link  active "  aria-current="page" style={{textDecoration:'none',color:' #FFA500'}} to={'/'}>Home</Link>
                    </li>
                    <li class="nav-item ml-3">
                    <Link className ="nav-link" style={{textDecoration:'none',color:' #FFA500'}} to={'/Course'}>Course</Link>
                    </li>
                  </ul>
         
                  <div className=' col-xxl-10  d-flex justify-content-center   text-center   ' >
                  {children}
                  </div>
                  <div className=' col  d-flex justify-content-end  '>
                  {auth.currentUser!=null ?  <div class="dropdown-center text-end  ">
                    <a style={{textDecoration:'none',color:' #FFA500'}}
                      className=" dropdown-toggle   "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={()=>navigate('/Profile')}
                    >
                 <i class="fs-3 bi bi-person-circle"></i>
                    </a>
                    <div className='dropdown-menu'> 
                     <div className='dropdown-item'>
                      <Profile/>
                     </div>
                    </div>
                     
                  </div> :   <Link className='  nav-link       'style={{textDecoration:'none',color:' #FFA500'}}  to={'/Login'}>Login/SignUp </Link>
                   
}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
   
    );
}
