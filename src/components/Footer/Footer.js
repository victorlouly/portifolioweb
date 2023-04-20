import "./Footer.css";
import  instagram  from '../../images/instagram.png';
import  linkedin  from '../../images/linkedin.png';
import  discord  from '../../images/discord.png';
import  whatsapp  from '../../images/whatsapp.png';

export const Footer = () => {
  return (
    <footer className="container-footer">
      <p>
      <a target="_blank" href="#">
        <img className="icon-img" src={instagram} alt="instagram" /></a>
        <a target="_blank" href="#">
        <img className="icon-img" src={linkedin} alt="linkedin" /></a>
        <a target="_blank" href="#">
        <img className="icon-img" src={discord} alt="discord" /></a>
        <a target="_blank" href="#">
        <img className="icon-img" src={whatsapp} alt="whatsapp" /></a>
      </p>
    </footer>
  );
};
