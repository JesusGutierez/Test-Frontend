import BtnContinue from "../Components/BtnContinue";
import { FaPlus } from 'react-icons/fa';
import { useCallback, useRef, useState } from "react";

const BView = () => {
  const [plus, setPlus] = useState({ n1: 0, n2: 0 });

  return (
    <div className="bg bg-regular-view">
      <div id="calculation-area">
        <h1 id="big-text">B</h1>

        <div id="calculation">
          <input type={"number"} className="fieldNumber" onChange={
            (event) => {
              console.log('number1', Number(event.target.value));
              setPlus({ ...plus, n1: Number(event.target.value) })
            }
          } />
          <FaPlus id="plus" />
          <input type={"number"} className="fieldNumber" onChange={
            (event) => {
              console.log('number2', Number(event.target.value));
              setPlus({ ...plus, n2: Number(event.target.value) })
            }
          } />
        </div>

        <div className="btn-bview">
          <BtnContinue location="/cView" data={{ ...plus, plus: plus.n1 + plus.n2 }} />
        </div>
      </div>
    </div >
  )
}

export default BView;