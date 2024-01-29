
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import certificate from'./Certificate.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState ,useEffect} from 'react';

export default function Cert(){
  const [width,setWidth]=useState(window.innerWidth);
  const handleResize=function(){
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize',handleResize);
  },[])
    const[name,setName]=useState('Kanish kirthik.K');
    const[Course,setCourse]=useState('Python Fundamentals ');
    const ComponentToPrint = React.forwardRef((props, ref) => (
        <div ref={ref} >
           
        <div  className='row ratio-16x9  position-relative' >
        <div className='position-absolute  align-self-center '>

        <br></br>
         <h6 className='text-center ' >{name}</h6>
         <p className='text-center ' >{Course}</p>
     </div>

     <img src={certificate} alt="" width={'auto'} height={'auto'}></img>
     </div>
     </div>
      ));
    const ref=useRef();
    return(
        <div className='container'>
            <div className='row'>
        <ComponentToPrint ref={ref}/>

        <button onClick={() => exportComponentAsJPEG(ref)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(ref)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(ref)}>
        Export As PNG
      </button>
      </div>
        </div>
    )
}