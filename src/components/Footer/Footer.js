import "./Footer.css";
import  instagram  from '../../images/instagram.png';
import  linkedin  from '../../images/linkedin.png';
import  discord  from '../../images/discord.png';
import  whatsapp  from '../../images/whatsapp.png';

export const Footer = () => {
  return (
    <footer className="container-footer">
      <p>
      <a rel="noreferrer" href="https://www.instagram.com/victorlo97/">
        <img className="icon-img" src={instagram} alt="instagram" /></a>
        <a rel="noreferrer" href="https://www.linkedin.com/in/victor-hugo-louly-125372172/">
        <img className="icon-img" src={linkedin} alt="linkedin" /></a>
        <a rel="noreferrer" href="https://wa.me/5562982439372">
        <img className="icon-img" src={whatsapp} alt="whatsapp" /></a>
        <a rel="noreferrer" href="#">
        <img className="icon-img" src={discord} alt="discord" />:::::=> victorlo#7737</a>
      </p>
    </footer>
  );
};
