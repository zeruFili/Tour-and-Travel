import { useState } from "react";

import Header from "../Navigation/nad";
import Browse from "../from/browse";
import "./zer.css";
import Footer from "../Footer/fot";

function Mains() {
  return (
    <>
      <div className="flex-container">
        <div className="header">
          <Header />
        </div>
        <div className="flexed-container">
          <div className="container">
            <Browse />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Mains;
