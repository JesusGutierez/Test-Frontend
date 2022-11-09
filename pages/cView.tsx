import BtnContinue from "../Components/BtnContinue";
import { FaPlus } from 'react-icons/fa';
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const CView = () => {
  const router = useRouter();
  const { query } = router;

  const [numbers, setNumbers] = useState({ n1: 0, n2: 0, plus: 0 });

  useEffect(() => {
    console.log('query', query);
    setNumbers({ ...numbers, ...query })
  }, [query]);

  return (
    <div className="bg bg-regular-view">
      <div id="calculation-area">
        <h1 id="big-text">C</h1>

        <div id="calculation">
          <input type={"number"} className="fieldNumber" disabled value={numbers.n1} />
          <FaPlus id="plus" />
          <input type={"number"} className="fieldNumber" disabled value={numbers.n2} />
        </div>
        <input type={"number"} className="fieldNumber" id="result" disabled value={numbers.plus} />

        <div className="btn-bview">
          <BtnContinue location="/dView" />
        </div>
      </div>
    </div >
  )
}

export default CView;