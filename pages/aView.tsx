import BtnBack from "../Components/BtnBack";
import BtnContinue from "../Components/BtnContinue";

const AView = () => {
  return (
    <div className="bg bg-regular-view">
      <h1 id="big-text">A</h1>
      <div className="btn-aview">
        <BtnContinue location="/bView" />
      </div>

      <BtnBack />
    </div>
  )
}

export default AView;