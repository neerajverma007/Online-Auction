import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import NavbarComp from "./components/NavbarComp";
import Heros from "./components/Heros";
// import Modal from "./components/Modal";
import Signin from "./components/Signin";
import CardStructure from "./components/CardStructure";

function App() {
  return (
    <div>
      <NavbarComp />
      <Heros />
      {/* <Modal /> */}
      <Signin />
      <CardStructure />
    </div>
  );
}
export default App;
