import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa6";
export default function LastCard() {
  useEffect(
    () =>
      async function fetchdata() {
        const response = await fetch("https://aeonaxy-server.vercel.app/last", {
          method: "GET",
          headers: {
            "authorization": `${localStorage.getItem("token")}`,
            'Access-Control-Allow-Origin': '*',
          },
        });
        const result = await response.json();
        console.log("The result for last page is : ", result);
      },
    []
  );
  return (
    <div>
      <Navbar />
      <div className="mx-auto w-60 fw-bold" style={{ height: "70vh" }}>
        <h1 className="fs-2 fw-bold text-center mt-5">
          Please Verify Your Email ...
        </h1>
        <p className="text-secondary fs-1 text-center">
          <FaEnvelope />
        </p>
        <p className="text-secondary fw-medium text-center">
          Please verify your email address . We have sent you confirmation
          email.
        </p>
        <p className="fw-bold text-center my-3">account@refero.design </p>
        <p className="text-secondary fw-medium text-center my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate non
          vel ratione dolore, perferendis molestiae sunt aut autem iure possimus
          illum? Corporis fugiat cupiditate, sunt odio tenetur illum, voluptatum
          doloremque, laboriosam repellendus ea quasi.
        </p>
        <p className="text-secondary fw-medium text-center my-3">
          Lorem ipsum dolor, Lorem ipsum dolor sit.{" "}
          <span className="pink fw-bold">
            Resend the confirmation email again
          </span>
        </p>
        <p className="text-secondary fw-medium text-center my-3">
          Lorem ipsum dolor{" "}
          <span className="pink fw-bold">Change Password</span>
        </p>
      </div>
    </div>
  );
}
