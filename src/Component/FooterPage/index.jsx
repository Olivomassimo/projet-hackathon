import React from "react";
import { Navbar } from "react-bootstrap";
import './index.css'



const FooterPage = () => {
  return (
    <>
  
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="https://wildcodeschool.be/">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' wild code scool'}
    </Navbar.Brand>
  </Navbar>
</>
  );
}

export default FooterPage;