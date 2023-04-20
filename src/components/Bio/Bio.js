import { BIO } from "../../constants/bio";
import "./Bio.css";

export const Bio = () => {
  return (
    <section className="container container-lines">
      <p className="purple-text">
        ⌛ Bio <span className="purple-smoke-text">-Quando comecei ??</span>{" "}
      </p>
      <div className="line"></div>
      {BIO.map((e) => (
        <div key={e.year} className="lines-items">
          <span className="white-text">{e.year}: </span>
          <span className="gray-text" data-tip="soo cuteeeee">
            {e.title.cargo} na empresa {e.title.name}
          </span>
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};
