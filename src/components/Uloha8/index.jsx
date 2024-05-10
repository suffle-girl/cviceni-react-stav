/*
Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.
*/

import { useState } from "react"

export const Uloha8 = () => {
  const [prsi, setPrsi] = useState("možná")

  const handleClick = () => {
    // if (prsi === "možná") {
    //   setPrsi("ano")
    // } else if (prsi === "ano") {
    //   setPrsi("ne")
    // } else if (prsi === "ne") {
    //   setPrsi("možná")
    // }
    
    // const novyStav = prsi === "možná" ? "ano" : prsi === "ano" ? "ne" : "možná"
    // setPrsi(novyStav)

    if (prsi === "možná") setPrsi("ano")
    else if (prsi === "ano") setPrsi("ne")
    else if (prsi === "ne") setPrsi("možná")

  }

  return (
    <>
      <h3>Prší v Brně: {prsi}</h3>
      <button onClick={handleClick} >změnit</button>
    </>
  )
}
