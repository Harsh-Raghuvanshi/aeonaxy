import React from "react";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import CreateProfile from "./Components/CreateProfile";
import ChooseCause from "./Components/ChooseCause";
import LastCard from "./Components/LastCard";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/create" element={<CreateProfile />}></Route>
        <Route path="/createnext" element={<ChooseCause />}></Route>
        <Route path="/last" element={<LastCard />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}
