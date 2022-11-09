import BtnContinue from "../Components/BtnContinue";
import { FaPlus } from 'react-icons/fa';
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const CView = () => {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    console.log('query', query);
  }, []);

  return (
    <div className="bg bg-regular-view">
      <div id="calculation-area">
        <h1 id="big-text">C</h1>

      </div>
    </div>
  )
}

export default CView;