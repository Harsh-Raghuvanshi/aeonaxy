import React from "react";
import FooterCard from "./FooterCard";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="grey py-3">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h2 className="pink fs-1" style={{ fontFamily: "Brush Script MT" }}>
              dribble
            </h2>
            <p className="fw-medium text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
              mollitia sit eum suscipit adipi
            </p>
            <span className="fs-4 text-secondary cursor-pointer ">
              <FaInstagram />{"  "}<FaFacebook />{"  "}
              <FaLinkedin />{"  "}
              <FaWhatsapp />
            </span>
          </div>
          <div className="col">
            <FooterCard />
          </div>
          <div className="col">
            <FooterCard />
          </div>
          <div className="col">
            <FooterCard />
          </div>
          <div className="col">
            <FooterCard />
          </div>
          <div className="col">
            <FooterCard />
          </div>
        </div>
        <hr></hr>
        <div className="row my-2">
          <div className="col ">&copy; 2023 All rights are Reserved </div>
          <div className="col">
            <span className="fw-bold float-right">1,120,123</span> shots signed
            up
          </div>
        </div>
      </div>
    </div>
  );
}
