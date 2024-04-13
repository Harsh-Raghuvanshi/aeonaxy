import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
export default function CreateProfile() {
  const navigate=useNavigate();
  const [previewImage, setPreviewImage] = useState(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  async function handlePostRequestAtAdd(formData){
    try{
      const response=await fetch("https://aeonaxy-server.vercel.app/add",{
        method:"PUT",
        headers: {
          "authorization": `${localStorage.getItem('token')}` // Include the token in the 'Authorization' header
        },
        body:formData,
      })
      // console.log("response",response);
      const result=await response.json();
      console.log("Success in Put request at backend at add ",result);

    }catch(err){
      console.log("Error while applying post request at backend at /add ",err);
    }
  }
  async function handleFormSubmit(e){
    e.preventDefault();
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    const locationInput = document.getElementById('addlocation');
    const location = locationInput.value;
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('location', location);
  
    await handlePostRequestAtAdd(formData);
    navigate('/createnext');
  }
  

  return (
    <div>
      <div className="mx-auto w-50 fw-bold">
        <h1 className="fs-2 fw-bold m-5 text-center" >Welcome! Let's Create Profile</h1>
        <p className="text-secondary fw-normal">
          Let others know you better! You can do these later.
        </p>
        <form onSubmit={handleFormSubmit}  encType="multipart/form-data">
          <div className="mb-3 mt-5 cursor-pointer">
            <p>Add Avatar</p>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-4">
                  <div className="avatar-preview">
                    {(previewImage)?(
                      <img
                        src={previewImage}
                        alt="Avatar Preview"
                        className="avatar-image"
                      />
                    ):null}
                  </div>
                </div>
                <div className="col">
                  <input
                    type="file"
                    id="file-input"
                    className="file-input"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="file-input" className="custom-file-input">
                    Choose File
                  </label>
                  <p className="fw-bold text-secondary"> Choose one of our default</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-75 mt-5 mb-5">
            <label htmlFor="addlocation" className="form-label">
              Add Location
            </label>
            <input
              type="text"
              className="form-control custom-border"
              id="addlocation"
              style={{ border: "border" }}
            />
          </div>
          <button type="submit" className="custom-btn ">
            Next
          </button>
          <p className="fw-bold text-secondary cursor-pointer">or Press RETURN</p>
        </form>
      </div>
    </div>
  );
}
