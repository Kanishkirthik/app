import { data } from "./App";
import { Link } from "react-router-dom";
export default function Completed(){
    return (
    
      <div className="row">
        <h1>Completed Courses</h1>
        {data.map((e) => (
              <div className="col-sm-6 col-lg-4 col-xxl-3  col-md-5  rounded-4  ">
                <div class=" shadow card  text-white " style={{ width: "auto" }}>
                  <img src={e.Image} class="card-img-top" alt="..." />
                  <div className=" card-body text-white " style={{backgroundColor:'#526D82'}}>
                    <h5 className="card-title text-white ">{e.Name}</h5>
                    <h6 className="text-end ">
                      <i class="bi bi-currency-rupee"></i>
                      {e.Price}
                    </h6>
                    <p className="card-text text-justify " style={{textAlign:'justify',textJustify:'inter-word'}}>{e.Des.slice(0,200)}</p>
                    <div href="" className="w-100 text-center " style={{backgroundColor:'#27374D'}}>
                      <Link
                        className=" text-decoration-none text-center text-white"
                        to={`/ViewCourse/${e._id}`}
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
    );
}