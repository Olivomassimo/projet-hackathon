import React from "react";
import facebook from './../../assets/icons/facebook.svg';
import twitter from './../../assets/icons/twitter.svg';
import youtube from './../../assets/icons/youtube.svg';
import instagram from './../../assets/icons/instagram.svg';
import github from './../../assets/icons/github.svg';
import linkedin from './../../assets/icons/linkedin.svg';
import './index.css'



const FooterPage = () => {
  return (
  
  <footer className="footer">
    <ul className="fond">
      <li className="icone-footer">
        <a href="https://www.facebook.com/wildcodeschool"><img src={facebook} alt="facebook" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://twitter.com/wildcodeschool"><img src={twitter} alt="twitter" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://www.youtube.com"><img src={youtube} alt="youtube" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://www.instagram.com/wildcodeschool/"><img src={instagram} alt="instagram" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://github.com/WildCodeSchool/"><img src={github} alt="github" /></a>
      </li>
      <li className="icone-footer">
        <a href="https://www.linkedin.com/school/wild-codes-chool?pathWildcard=10387519/"><img src={linkedin} alt="linkedin" /></a>
      </li>
    </ul>
  </footer>

  );
}

export default FooterPage;