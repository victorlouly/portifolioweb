import React from "react";
import "./Project.css";
import Line from "../../images/line-purple.svg";
import ImageTemp from "../../images/clubenvios.png";
import SistemaFinan from "../../images/sistemafinan.png";
import Voucher from "../../images/voucher.png";
import themedia from "../../images/themedia.png";
import FigmaIcon from "../../images/figma-icon.svg";

function Project() {
  return (
    <section id="projects" className="container container-project">
      <p className="purple-text">
        ‍💻 -
        <span className="purple-smoke-text">Conheça meus ultimos projetos </span>{" "}
      </p>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text">Projeto desenvolvido para a empresa Clube Envios</span>
          <p className="gray-text text-box">
            Template desenvolvido em HTML/CSS/JS para a empresa clube envios
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>
      <div className="project-details">
        <img className="Project-img" src={ImageTemp} alt="Project Clube Envios" />
        <div className="details-left">
          <p className="gray-text">
            Veja como ficou esse projeto no
            <a target="_blank" href="https://www.figma.com/file/zlwPjLhQydmWZJmHED6nJM/Clube-Envios-Design-Website?node-id=0%3A1&t=UP1KNq1ppzrL5xaI-1">
              <img className="icon-figma" src={FigmaIcon} alt="" />
            <span className="text-figma">Figma</span>
            </a>
          </p>
          <div className="details-stack">
            <span className="white-text">Tecnologias</span>
            <ul className="gray-text">
              <li>HTML</li>
              <li>CSS (BOOTSTRAP)</li>
              <li>JS (JQUERY)</li>
            </ul>
          </div>
          <p className="gray-text">
            Clique e veja o projeto, <a target="_blank" href="https://clubeenvios.com.br/"><span className="white-text"> Ao Vivo</span></a>{" "}
          </p>
        </div>
      </div>
        <hr/>
        <div className="project-header">
        <div className="project-box">
          <span className="white-text">Projeto desenvolvido Sistema Financeiro</span>
          <p className="gray-text text-box">
            Projeto para calculo de valores e despesas, projetado na aula da B7WEB
          </p>
        </div>
      </div>
      <div className="project-details">
        <img className="Project-img" src={SistemaFinan} alt="Project Clube Envios" />
        <div className="details-left">
          <p className="gray-text">
            Esse projeto foi desenvolvido para estudos✍
          </p>
          <div className="details-stack">
            <span className="white-text">Tecnologias</span>
            <ul className="gray-text">
              <li>REACTJS</li>
              <li>CSS (STYLED-COMPONENTS)</li>
            </ul>
          </div>
          <p className="gray-text">
            Clique e veja o projeto, <a target="_blank" href="https://github.com/victorlouly/sistema-financeiro"> <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                /> <span className="white-text">Github</span></a>{" "}
          </p>
        </div>
      </div>
      <hr/>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text">Projeto desenvolvido Voucher</span>
          <p className="gray-text text-box">
            Projeto para gerar voucher de maneira automatizada, os valores são envios para um planilha no excel atráves da API sheetdb
          </p>
        </div>
      </div>
      <div className="project-details">
        <img className="Project-img" src={Voucher} alt="Project Clube Envios" />
        <div className="details-left">
          <p className="gray-text">
            Projeto desenvolvido para a Empresa FacInPro
          </p>
          <div className="details-stack">
            <span className="white-text">Tecnologias</span>
            <ul className="gray-text">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT (CANVAS)</li>
              <li>API (SHEETDB)</li>
            </ul>
          </div>
          <p className="gray-text">
            Clique e veja o projeto, <a target="_blank" href="https://github.com/victorlouly/voucher"> <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                /> <span className="white-text">Github</span></a>{" "}
          </p>
        </div>
      </div>
      <hr/>
      <div className="project-header">
        <div className="project-box">
          <span className="white-text">Projeto desenvolvido para agencia The Media Bees</span>
          <p className="gray-text text-box">
            Template desenvolvido no figma para a empresa The Media Bees, projeto ainda em construção.
          </p>
        </div>
        <img className="project-line" src={Line} alt="abajo" />
      </div>
      <div className="project-details">
        <img className="Project-img" src={themedia} alt="Project Clube Envios" />
        <div className="details-left">
          <p className="gray-text">
          Veja como ficou esse projeto no  <a target="_blank" href="https://www.figma.com/file/gJQQwgI90pYVyVLRDJEk8K/Agencia---The-Media-Bees?node-id=0%3A1&t=du3nEoKp64nlqrJK-1">
              <img className="icon-figma" src={FigmaIcon} alt="" />
            <span className="text-figma">Figma</span>
            </a>
          </p>
          <div className="details-stack">
            <span className="white-text">Tecnologias</span>
            <ul className="gray-text">
              <li>FIGMA</li>
            </ul>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}

export default Project;
