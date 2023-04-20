import "./Mode.css";
import { RiLock2Line } from "react-icons/ri";

export default function Mode () {
  return (
    <section className=" container-mode">
      <div className="mode-left white-text">
        <ul>
          <li>
            <a href="#projects" >Projetos</a>
            
          </li>
          <li>
            <a target="_blank" href="https://github.com/victorlouly">
              <span class="link-decoration">GitHub</span>
              <span class="icon-change">
                <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/182744b0662c24bb7d37846566bdb7ebee3470d6-15x15.svg"
                  alt="External Link"
                />
                <img
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />
              </span>
            </a>
          </li>
          <li>
            <a href="#about">Olá</a>
          </li>
        </ul>
      </div>
      <button className="container-icon">
          <RiLock2Line className="mode-icon" />
      </button>
    </section>
  );
}
