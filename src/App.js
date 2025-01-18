import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { auth } from "./firebase";
import Footer from "./Footer";
import Nav from "./Nav2";
let data = [];
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);
function App() {
  const { Data } = useParams(); 
  
  console.log(Data)
  const [Courses, setCourse] = useState([]);
  useEffect(() => {
    async function getsCourse() {
      const response = await axios.get("https://kk-elearn.onrender.com/Course");
      setCourse(response.data);
      if(auth.currentUser){
      sessionStorage.setItem("token", (await auth.currentUser.getIdTokenResult()).token)
      }
    } getsCourse();
  }, []);
  data = Courses;
  const[Feedback,setFeedBack]=useState([]);
  useEffect(()=>{
    async function getFeed(){
      const res=await axios.get("https://kk-elearn.onrender.com/Feed");
      setFeedBack(res.data);
    }
    getFeed();
  },[]);
  console.log(Feedback);



  return (
    <div >
      <Nav />
      <div className="container-fluid  app-container" style={{ color: '#FFA500' }}>
      
        <div className="row">
          <h5 className="title">Recently added Courses </h5>
          <div className="row" style={{ color: '#FFA500' }}>
            {Courses.map((e) => (
              <div className="col-sm-3 col-md-5  col-xl-4 col-xxl-3 col-lg-4 fs-6 mt-2 mb-2  " style={{ color: '#FFA500' }}>
                <div class="  shadow card     " style={{ width: "18rem" ,maxHeight:"auto" ,minBlockSize:'200px'}}>
                  <img src={e.Image} class="card-img-top" alt="..." width={'auto'} />
                  <div className=" card-body " style={{ color: '#FFA500' }} >
                    <h5 className="card-title  " style={{ color: '#FFA500' }}>{e.Name}</h5>
                    <h6 className="text-end ">
                      <i class="bi bi-currency-rupee" style={{ color: '#FFA500' }}></i>
                      {e.Price}
                    </h6>
                    <h6 className="text-end" style={{ color: '#FFA500' }}>
                      <i class=" bi bi-star input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <i class="bi bi-star" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <i class=" bi bi-star" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    </h6>
                    <p className="card-text text-justify " style={{ textAlign: 'justify', textJustify: 'inter-word' }}>{e.Des.slice(0, 200)}</p>
                    <h6 className="text-end " ></h6>
                    <div href="" className="w-100 text-center " style={{ backgroundColor: 'black' }}>
                      <Link
                        className=" text-decoration-none text-center "
                        to={`/ViewCourse/${e._id}`} style={{ color: '#FFA500' }}
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
        </div>
        <div className="row">
        <h5 className="title">hearty feedbacks from  Our top learners and companies </h5>
        <div>
          <div className="row">
          {Feedback.map((p)=>(
            <div className="col-sm-3 col-md-5  col-xl-3 col-xxl-3 col-lg-4 fs-6 mt-2 mb-2 ">
          <div className="card shadow  p-2  feed-form"   >
          
            <div className="col ">
                <h6 className="card-title text-center">{p.title}</h6>
                <p className="card-body">
                  {p.Desc}
                </p>
            </div>
            <div className="col feed-head ">
              <h5 className="m-1">{p.CourseName}</h5>
              <h6 className=" m-1 text-end">{p.Uid}</h6>
            </div>
          </div>
          </div>))}
          </div>
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export { data };
export default App;
