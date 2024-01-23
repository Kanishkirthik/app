
import './index.css'
import { Link, useNavigate,useParams} from 'react-router-dom';
import Profile from './Profile';
import {User} from './App';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
let datauser=[];
export default function Nav(){
  datauser=User;
const navigate=useNavigate();
    return (
      <div className="container-fluid position-sticky">
        <div className="row mt-2 mb-2 ">
          <div className="col">
            <nav class=" navbar  navbar-expand-md navbar-expand-lg  rounded-1" style={{backgroundColor:'#27374D'}}>
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
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item rounded ">
                    <Link className ="nav-link  active "  aria-current="page" style={{textDecoration:'none',color:'white'}} to={'/'}>Home</Link>
                    </li>
                    <li class="nav-item ">
                    <Link className ="nav-link" style={{textDecoration:'none',color:'white'}} to={'/Course'}>Course</Link>
                    </li>
                  </ul>
                  {User.length >0 ?  <div class="dropdown-center">
                    <a style={{textDecoration:'none', color:'white'}}
                      className=" dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={()=>navigate(`/Profile/${User.map((e)=>e.Username)}`)}
                    >
                      Profile
                    </a>
                    <div className='dropdown-menu'> 
                     <div className='dropdown-item'>
                      <Profile/>
                     </div>
                    </div>
                     
                  </div> :   <Link className='btn text-white nav-link 'style={{textDecoration:'none',color:'white'}}  to={'/Login'}>Login/SignUp </Link>
                   
}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
}
export { datauser};