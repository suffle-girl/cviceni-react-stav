import { useState } from 'react'
import './style.css'
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [prvniHodnota, setPrvniHodnota] = useState(0)
  const [druhaHodnota, setDruhaHodnota] = useState(0)

  const handleChangePrvni = (event) => {
    setPrvniHodnota(Number(event.target.value))
  }

  const handleChangeDruha = (event) => {
    setDruhaHodnota(Number(event.target.value))
  }

  return (
    <div className='bonus4'>
      <input onChange={handleChangePrvni} type="number" defaultValue="0" /> +{' '}
      <input onChange={handleChangeDruha} type="number" defaultValue="0" /> = <output>{prvniHodnota + druhaHodnota}</output>
    </div>
  )
}
