
import { data } from "./App";
import { Link } from "react-router-dom";
export default function Enrolled(){
    return (
        <>
      <div className="row" style={{color:'#FFA500'}}>
      <h1>Enrolled Courses</h1>
      {data.map((e) => (
              <div className="col-sm-6 col-lg-4 col-xxl-3  col-md-5  rounded-4 " style={{color:'#FFA500'}}>
                <div class=" shadow card  text  bg-dark " style={{ width: "auto" ,color:'#FFA500'}}>
                  <img src={e.Image} class="card-img-top" alt="..." />
                  <div className=" card-body text " >
                    <h5 className="card-title text ">{e.Name}</h5>
                    <h6 className="text-end ">
                      <i class="bi bi-currency-rupee"></i>
                      {e.Price}
                    </h6>
                    <p className="card-text text-justify " style={{textAlign:'justify',textJustify:'inter-word'}}>{e.Des.slice(0,200)}</p>
                    <div href="" className="w-100 text-center "   style={{backgroundColor:"black",color:'#FFA500'}}>
                      <Link
                        className=" text-decoration-none text-center text"
                        to={`/ViewCourse/${e._id}`}
                        style={{backgroundColor:"black",color:'#FFA500'}}
                      >
                        {" "}
                        View Course{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
      </>
    );
}