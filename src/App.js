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
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
// import ProductSell from "./components/ProductSell";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div>
      <NavbarComp />
      <Heros />
      <Signin />
      <CardStructure />
      {/* <ProductSell /> */}
      <MyAccount />
      <BuyerForm />
      <Contactus />
      <Aboutus />
      <Footer />
    </div>
  );
}
export default App;
