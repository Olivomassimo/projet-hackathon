import React from "react";
import facebook from './../../assets/icons/facebook.svg';
import twitter from './../../assets/icons/twitter.svg';
import youtube from './../../assets/icons/youtube.svg';
import instagram from './../../assets/icons/instagram.svg';
import github from './../../assets/icons/github.svg';
import linkedin from './../../assets/icons/linkedin.svg';
import wild from './../../assets/icons/wild.jpg';
import './index.css'



const FooterPage = () => {
  return (
  
  <footer className="footer">
    <ul className="fond">
      <li className="icone-footer">
        <a href="https://www.facebook.com/wildcodeschoolbelgium/"><img src={facebook} alt="facebook" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://twitter.com/WildSchool_Bxl"><img src={twitter} alt="twitter" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://www.youtube.com"><img src={youtube} alt="youtube" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://www.instagram.com/wildcodeschoolbelgium/?hl=fr"><img src={instagram} alt="instagram" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://github.com/WildCodeSchool/"><img src={github} alt="github" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://www.linkedin.com/school/wild-codes-chool/"><img src={linkedin} alt="linkedin" /></a>
      </li>
      <li  className="icone-footer">
        <a className="wild" href="https://wildcodeschool.be/brussels/"><img class="image" src={wild} alt="wild" /></a>
      </li>
    </ul>
  </footer>

  );
}

export default FooterPage;