import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "./App";
import Nav from "./Nav2";
import { auth } from "./firebase";

export let cartArray = [];

export default function ViewCourse() {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [enrolled, setEnrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [enrolledData, setEnrolledData] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [Count, setCount] = useState(0);
  const [videoIds, setVideoIds] = useState({ M1: "", M2: "", M3: "" });
  const [lastStopTimes, setLastStopTimes] = useState({ M1: "", M2: "", M3: "" });
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const playerRefs = useRef({});
  const [Profile,setProfile]=useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function getProfile() {
      try {
        
          const response = await axios.get(
            "https://kk-elearn.onrender.com/Profile",
            {
              params: { Username: auth.currentUser.displayName }, // Pass query parameters here
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.data);
          setProfile(response.data); // Update profile state
        
      } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Failed to fetch profile. Please try again."); // Replace with better UI feedback if possible
      }
    }
  
    getProfile(); // Call the async function
  }, []); // Include email in dependency array if it can change
  
  
  const filteredCourse = data.find((course) => course._id === id);
  useEffect(() => {
    if (filteredCourse) {
      const extractVideoId = (url) =>
        url.substring(
          url.indexOf("embed/") + 6,
          url.indexOf("?", url.indexOf("embed/") + 6)
        );

      setVideoIds({
        M1: extractVideoId(filteredCourse.M1Video),
        M2: extractVideoId(filteredCourse.M2Video),
        M3: extractVideoId(filteredCourse.M3Video),
      });
    }
  }, [filteredCourse]);


  useEffect(() => {
    const fetchEnrollmentData = async () => {
      try {
        const response = await axios.get(
          `https://kk-elearn.onrender.com/Ecourse/${auth.currentUser.email}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEnrolledData(response.data);
        response.data.map((e) => {
          if (e.CourseName == filteredCourse.Name) {
            lastStopTimes.M1=e.LastPassedM1Time;
            lastStopTimes.M2=e.LastPassedM2Time;
            lastStopTimes.M3=e.LastPassedM3Time;
            setEnrolled(true);
          }
          
        })
        console.log(lastStopTimes);


      } catch (err) {
        console.error("Error fetching enrollment data:", err);
      } finally {
        setLoading(false);
      }
    };


    fetchEnrollmentData();

  }, [Count]);


  let fun = async function () {
    try {
      const payload = {
        UserId: auth.currentUser.email,
        CourseName: filteredCourse.Name,
        LastPassedM1Time: lastStopTimes.M1 || 0,
        LastPassedM2Time: lastStopTimes.M2 || 0,
        LastPassedM3Time: lastStopTimes.M3 || 0,
        Progress: progress,
      };
      const response = await axios.put(
        `https://kk-elearn.onrender.com/Ecourse/${auth.currentUser.email}`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
      setCount((res) => res + 1);
    } catch (err) {
      console.error("Error updating progress:", err.response?.data || err.message);
    }

  };

  const handleEnroll = async () => {
    if (!auth.currentUser) {
      console.warn("No user is authenticated."); // Debugging auth check
      return;
    }

    try {
      const payload = {
        UserId: auth.currentUser.email,
        CourseName: filteredCourse.Name,
        LastPassedM1Time: lastStopTimes.M1 || 0,
        LastPassedM2Time: lastStopTimes.M2 || 0,
        LastPassedM3Time: lastStopTimes.M3 || 0,
        Progress: progress,
      };
      const response = await axios.post(
        "https://kk-elearn.onrender.com/Ecourse",
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEnrolled(true);
    } catch (err) {
      console.error("Error enrolling:", err.response?.data || err.message);
    }
  };

  if (window.YT) {
    console.log("hello iam here");
  } else {
    console.error("mad i am no more");
  }
  const watchTimes = useRef({}); // To store watch times for all videos

  const handleStateChange = (event, videoId) => {
    const playerState = event.data;
    const player = playerRefs.current[videoId];

    if (!player) {
      console.error("Player instance not found for videoId:", videoId);
      return;
    }

    const currentTime = Date.now(); // Current time in milliseconds

    if (playerState === window.YT.PlayerState.PLAYING) {
      // Start tracking time when video is playing
      if (!watchTimes.current[videoId]) {
        watchTimes.current[videoId] = { startTime: currentTime, totalTime: 0 };
      } else {
        const lastStopTime = lastStopTimes[videoId] || 0;
        player.seekTo(lastStopTime, true); // Seek to the last stop time (in seconds)

        watchTimes.current[videoId].startTime = currentTime;
      }
      startTrackingTime(player);
    } else if (playerState === window.YT.PlayerState.PAUSED || playerState === window.YT.PlayerState.ENDED) {
      // Calculate and update watch time when video is paused or ended
      if (watchTimes.current[videoId]?.startTime) {
        const timeSpent =
          (currentTime - watchTimes.current[videoId].startTime) / 1000; // Convert to seconds
        watchTimes.current[videoId].totalTime += timeSpent;

        console.log(
          `Video ${videoId} watched for ${timeSpent.toFixed(2)} seconds. Total time: ${watchTimes.current[videoId].totalTime.toFixed(2)
          } seconds.`
        );

        lastStopTimes[videoId] = watchTimes.current[videoId].totalTime.toFixed(2);

        fun();


        // Reset start time
        watchTimes.current[videoId].startTime = null;
      }

      stopTrackingTime(player);

      // Update progress when video ends
      if (playerState === window.YT.PlayerState.ENDED) {
        const increment = 100 / Object.keys(videoIds).length;
        setProgress((prev) => Math.min(prev + increment, 100));
        fun();
      }
    }
  };
  const startTrackingTime = (player) => {
    if (player) {
      player.interval = setInterval(() => {
        player.getCurrentTime();
      }, 1000);
    }
  };

  const stopTrackingTime = (player) => {
    console.log(player);

    if (player?.interval) {
      clearInterval(player.interval);
    }
  };


  const handlePlayVideo = (module) => {
    const iframe = document.getElementById(module);
    const videoId = videoIds[module];

    if (iframe && videoId) {


      // Update iframe source to play the video
      iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1`;
      iframe.style.display = "block";
      // Hide thumbnail
      const thumbnail = iframe.previousSibling;
      if (thumbnail) thumbnail.style.display = "none";
      const player = new window.YT.Player(module, {
        events: {
          onStateChange: (event) => handleStateChange(event, module),
        },
      });
      playerRefs.current[module] = player; // Store player reference
    } else {
      console.error("Invalid module or video ID:", module);
    }
  }
  // Submit Feedback
  const handleFeedSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://kk-elearn.onrender.com/Feed",
        {
          title,
          CourseName: filteredCourse.Name,
          Desc: message,
          Uid: auth.currentUser.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.error(err);
    }
  };
  if (!auth.currentUser) {
    navigate("/login");
  }
  else {
    return (
      <div>
        <Nav />
        <div className="   container-fluid app-container " >
          {filteredCourse && (
            <>
              <div className="row justify-content-center">
                <div className="col-sm-4 align-self-center">
                  <div className="card" style={{ width: "auto", height: "auto" }}>
                    <img
                      src={filteredCourse.Image}
                      className="card-img-top rounded-3"
                      alt="Course"
                    />
                  </div>
                </div>
                <div className="col-sm-4">
                  <p style={{ textAlign: "justify" }} className="p-3 fs-6">
                    {filteredCourse.Des}
                  </p>
                </div>
              </div>
              <div>
                <h6 className="title">If you enroll, you will unlock a treasure trove of benefits</h6>
                <div className="row justify-content-center">
                  <div className="col-md-3 ben">
                    <div className="card" >
                      <div className="card-body">
                        <ul className="list">
                          <li >Tech Professional Videos categorized into modules (e.g., Module 1, 2, 3).</li>
                          <li>Mastery in the mentioned domains through structured learning</li>
                          <li>Weekly 1-on-1 Doubt-Solving Sessions with industry professionals</li>
                          <li>Certification from GainWithUs and leading product vendors upon completion.</li>
                          <li>Quizzes at the end of each module to reinforce learning.</li>
                        </ul>
                        <div className="col custom-btn">
                          {Profile.Role==='Student' && !enrolled  && <button className=" text-center" onClick={handleEnroll}>Enroll</button>}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              {enrolled && (
                <div className="row">
                  <div className="row justify-content-center">
                    <div className="col-sm-3">
                      <h4>Completion Status</h4>
                      <div className="progress rounded-pill">
                        <div
                          className="progress-bar progress-bar-striped bg-success mb-3"
                          role="progressbar"
                          style={{ width: `${progress}%` }}
                          aria-valuenow={progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        />
                      </div>
                    </div>
                  </div>
                  {["M1", "M2", "M3"].map((module, index) => (
                    <React.Fragment key={module}>
                      {/* Module Name */}
                      <h3 className="text-start fs-3">{filteredCourse[`M${index + 1}Name`]}</h3>

                      <div className="video">
                        <div className="col">
                          <div
                            className="embed-responsive embed-responsive-16by9"
                            style={{ position: "relative", cursor: "pointer" }}
                            onClick={() => handlePlayVideo(module)}
                          >
                            {/* Thumbnail Overlay */}
                            <img
                              src={`https://img.youtube.com/vi/${videoIds[module]}/hqdefault.jpg`}
                              alt="Thumbnail"
                              style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 1,
                                objectFit: "cover",
                              }}
                            />
                            {/* Iframe (hidden by default) */}
                            <iframe
                              id={module}
                              className="embed-responsive-item"
                              src=""
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "block",
                              }}
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </>
          )}
          { Profile.Role==="Student" && 
            <>
          <h6 className="title">through Your valuable Feeds Here</h6>
          <div className="row-form">

            <div className="  card custom-btn  col-form col-md-3">
              <form className="form " onSubmit={handleFeedSubmit}>
                <table>
                  <tr>
                    <td><input type="text" className="form-title" placeholder="Enter the Title" onChange={(e) => setTitle(e.target.value)}></input></td>
                  </tr>
                  <tr>
                    <td><textarea type="text" className="form-title" placeholder="Enter the Message" onChange={(e) => {
                      setMessage(e.target.value);
                    }}></textarea></td>
                  </tr>
                  <tr>
                    <td><button className=" text-center">Feeds</button></td>
                  </tr>
                </table>
              </form>
            </div>
          </div>
  </>}
        </div>
      </div>
                  
    );
  }
}
