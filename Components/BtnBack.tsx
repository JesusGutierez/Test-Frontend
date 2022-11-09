import { Router, useRouter } from "next/router";
import { MdArrowBackIosNew } from 'react-icons/md';
const BtnBack = () => {
  const router = useRouter();
  return (
    <button className="btn-back" onClick={() => router.back()}>
      <MdArrowBackIosNew />
    </button>
  )
}

export default BtnBack