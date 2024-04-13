import React from "react";
import CardOption from "./CardOption";
import {useNavigate} from "react-router-dom";
import image1 from "../Images/cardImage1.png";
import image2 from "../Images/cardImage5.png";
import image3 from "../Images/cardImage3.png";
const arr = [
  {
    image: image1,
    heading: "I'm looking for an oppurtunity to showcase my work",
    content:
      "I have developed some greate project and on the basis of that i want some work and ready to join immediately",
  },
  {
    image: image2,
    heading: "I'm looking for an Designer",
    content:
      "I need a designer for my company and pay ranges will be negotiable and work will be bonus based also",
  },
  {
    image: image3,
    heading: "I'm looking for some great design for my webpage",
    content:
      "I need a desig for my company website and pay ranges will be negotiable and work will be bonus based also",
  },
];
export default function ChooseCause() {
  const navigate=useNavigate();
  return (
    <div>
      <div className="mx-auto w-75 fw-bold">
        <h1 className="fs-2 fw-bold text-center mt-4">
          What brings you to dribble ?
        </h1>
        <p className="text-secondary fw-bold text-center">
          Select the Option that best describes you don't worry you can select
          more option later on
        </p>
        <div className="container">
          <div className="row">
            {arr.map((element, index) => {
              return (
                <CardOption
                  key={index}
                  image={element.image}
                  heading={element.heading}
                  content={element.content}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-5 mb-3">
          <p className="text-center fw-bold">
            Anything else ? you can select Multiple
          </p>
          <button className="custom-btn d-block mx-auto" onClick={()=>navigate('/last')}> Finish </button>
          <p className="text-center text-secondary fw-medium">or Press RETURN</p>
        </div>
      </div>
    </div>
  );
}
