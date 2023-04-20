import "./Header.css";
import { Typewriter, Cursor } from 'react-simple-typewriter'

export default function Header() {

  return (
    <section className="header">
      <header>
        <h1  className="header-title"> Olá, me chamo Victor.</h1>
        <div className="header-title-box">
      <h1 className="header-title-box-one">
        ⚛ Oque sei fazer ? {' '}
        <span className=" header-title-box">
          <Typewriter
            words={['Desenvolvedor Web.', 'Figma.', 'Design Ui/Ux.', 'Gestor de trafégo.', 'Desenvolvedor Backend.']}
            loop={80}
            cursor
            cursorStyle='_'
            typeSpeed={110}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </span>
      </h1>
        </div>
        <Cursor/>
      </header>
    </section>
  );
}
