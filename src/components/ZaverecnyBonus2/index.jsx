import { useState } from "react";
import "./kasicka.css";
import penizeUrl from "./penize.svg";

/*
Zadání 1: Přichystej v komponentě `Kasicka` proměnnou pro počet uložených peněz s výchozí hodnotou
  podle prop proměnné `pocatecniStav`.
Zadání 2: Prvním tlačítkem přidej pět a druhým nastav na nulu.
Zadání 3: Počet peněz vypiš.
*/

const Kasicka = ({ pocatecniStav }) => {
  const [penize, setPenize] = useState(pocatecniStav);

  const handleClickAdd = () => {
    setPenize(penize + 5);
  };

  const handleClickEmpty = () => {
    setPenize(0);
  };

  return (
    <div className="kasicka">
      <h3>
        <img src={penizeUrl} width={24} height={24} alt="" /> Peníze v kasičce:{" "}
        {penize} Kč
      </h3>
      <button onClick={handleClickAdd}>přihodit pětikorunu</button>{" "}
      <button onClick={handleClickEmpty}>vysypat</button>
    </div>
  );
};

export const ZaverecnyBonus2 = () => {
  return (
    <>
      {[0, 20, 50, 8].map((hodnota, i) => (
        <Kasicka pocatecniStav={hodnota} key={i} />
      ))}
    </>
  );
};
