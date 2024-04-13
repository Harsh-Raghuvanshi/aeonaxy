import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import background3 from "../Images/background3.png";
export default function Signup() {
  const navigate=useNavigate();
  let [userdata, setUserdata] = useState({
    fullName: "",
    userName: "",
    emailId: "",
    password: "",
  });
  function handleChange(event) {
    let { name, value } = event.target;
    setUserdata((prev) => {
      return { ...prev, [name]: value };
    });
  }
  async function applyPostRequestAtServer(data){
    try{
      const response= await fetch("http://localhost:5000/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(data),
      });
      const result=await response.json();
      console.log("The token is : ",result.token);
      localStorage.setItem('token', result.token);
      console.log("Again the token is :",localStorage.getItem('token'));
      console.log("Success signup data posted successfully to backend",result);
    }catch(err){
      console.log("Error while posting signup data to backend",err);
    }
  }
  async function handleFormSubmit(event) {
    event.preventDefault();
    let { fullName, userName, emailId, password } = userdata;
    if(!fullName || !userName || !emailId || !password){
      alert("<<<<  NO FIELD SHOULD BE EMPTY  >>>>");
      return;
    }
    await applyPostRequestAtServer(userdata);
    navigate('/create')
    
  }
  return (
    <>
      <div className="container text-center ms-0" style={{ height: "100vh" }}>
        <div className="row h-100">
          <div className="col-5 border custom-pink h-100 d-flex justify-content-center flex-column">
            <div
              className="fs-1 text-lg-start ms-5"
              style={{
                fontFamily: "Brush Script MT ",
                position: "absolute",
                top: "1.5rem",
              }}
            >
              dribble
            </div>
            <h1 className="fw-bold mb-5 text-white">
              Discover World's top Designer
            </h1>
            <img
              src={background3}
              alt="..."
              className="d-block mx-auto w-75"
            ></img>
          </div>
          <div className="col-7 fw-bolder h-100 d-flex justify-content-center flex-column">
            <div className="">
              <div className="fw-normal text-lg-end">
                Already a member <span className="text-primary">Sign in</span>
              </div>
              <h1 className="fw-bold mb-5">Sign Up to Dribble</h1>
              <form className="mt-4 w-75 mx-auto" onSubmit={handleFormSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="mb-3 col">
                      <label htmlFor="Name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control bg-body-secondary"
                        id="Name"
                        onChange={handleChange}
                        name="fullName"
                        value={userdata.fullName}
                      />
                    </div>
                    <div className="mb-3 col">
                      <label htmlFor="Username" className="form-label ">
                        UserName
                      </label>
                      <input
                        type="text"
                        className="form-control bg-body-secondary"
                        id="Username"
                        name="userName"
                        value={userdata.userName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label ">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-body-secondary"
                    id="exampleInputEmail1"
                    name="emailId"
                    value={userdata.emailId}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-body-secondary"
                    id="exampleInputPassword1"
                    name="password"
                    value={userdata.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input border border-2"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label fw-normal"
                    htmlFor="exampleCheck1"
                  >
                    Creating an Account means that you are okay with our{" "}
                    <span className="text-primary"> Privacy Policy</span> and
                    <span className="text-primary"> Term and Conditions</span>
                  </label>
                </div>
                <button type="submit" className="custom-btn fw-bolder">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
