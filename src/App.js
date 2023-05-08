import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import NavbarComp from "./components/NavbarComp";
import Heros from "./components/Heros";
// import Modal from "./components/Modal";
import Signin from "./components/Signin";
import CardStructure from "./components/CardStructure";
import MyAccount from "./components/MyAccount";
import BuyerForm from "./components/BuyerForm";

function App() {
  return (
    <div>
      <NavbarComp />
      <Heros />
      {/* <Modal /> */}
      <Signin />
      <CardStructure />
      <MyAccount />
      <BuyerForm />
    </div>
  );
}
export default App;
