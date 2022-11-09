import Image from "next/image";
import BtnBack from "../Components/BtnBack";

const DView = () => {
  return (
    <div className="bg bg-regular-view2">
      <div id="calculation-area">
        <h1 id="big-text">D</h1>
        <div id="media">
          <Image src="/images/Muñequito.png" width={150} height={150} alt="muñequito" />
          <Image src="/images/giphy.gif" width={150} height={150} alt="homero" />
          <video controls width={'90%'}>
            <source src="/images/RPReplay_Final1662780148.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <BtnBack />
    </div >
  )
};

export default DView;