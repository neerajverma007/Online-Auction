import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import Heros from "./components/Heros";
import Modal from "./components/Modal";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <NavbarComp />
      <Heros />
      {/* <Modal /> */}
      <Signin />
    </div>
  );
}
export default App;
