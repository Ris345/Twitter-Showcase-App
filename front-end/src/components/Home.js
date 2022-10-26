import React from "react";
import Content from "./Content";
import Navmenu from "./Navmenu";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Navmenu />
      <Content />
      <Footer/>
    </div>
  );
}

export default Home;
