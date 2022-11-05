import React from "react";

function Footer() {
  return (
    <div>
      <div 
        className="text-center p-3 fixed-bottom "
        style={{ backgroundColor: "rgba(0, 179, 222, 1)" }}
        bgColor='primary' >
        &copy; {new Date().getFullYear()} Copyright{" "}
        <a className="text-white" href="https://github.com/Ris345">.</a>
      </div>
    </div>
  );
}

export default Footer;


