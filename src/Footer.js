import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <footer  className="  conatiner-fluid   bg-dark"  style={{color:'#FFA500',mariginBottom:'0px'}}>
    
             <div className="col-sm-2  "style={{color:'#FFA500'}}>
                
                <ul   className="p-2 lh-base " style={{listStyle:'none',lineSpacing:'even'}}> 
                    <h3>Section</h3>
                    <li >
                    <Link  style={{textDecoration:'none',color:'#FFA500'}} to={'/'}>Home</Link>
                    </li>
                    <li>
                    <Link  style={{textDecoration:'none',color:'#FFA500'}} to={'/Course'}>Course</Link>
                    </li>
                    <li>
                    <Link style={{textDecoration:'none',color:'#FFA500'}} to={'/Login'}>Login/SignUp </Link> 
                    </li>
                    <li>
                    <Link style={{textDecoration:'none',color:'#FFA500'}}  to={'/Profile'}>Profile</Link> 
                    </li>

                </ul>
                </div>
                <div className="col-sm-12 ">
                <p className="fs-4   text-center  fst-italic">“Education is one thing no one can take away from you.”</p>
                </div>
    
             <div className="col text-center ">
    
            <i class="bi bi-facebook btn  "style={{color:'#FFA500'}} ></i>
            
          
            <i class="bi bi-instagram  btn "style={{color:'#FFA500'}} ></i>
            
       
            <i class="bi bi-twitter btn  "style={{color:'#FFA500'}} ></i>
           
           
            <i class="bi bi-linkedin btn "style={{color:'#FFA500'}} ></i>
          
          
            <i class="bi bi-github btn  " style={{color:'#FFA500'}}></i>
          

         
            </div>
            
            
                <div className="col">
               <h6 className="fs-6  text-center "> © 2024 Copyright KK Inc,</h6>
                    </div>
        </footer>
    );
}