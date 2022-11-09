import BtnContinue from "../Components/BtnContinue";

const BView = () => {
  return (
    <div className="bg bg-regular-view">
      <div id="calculation-area">
        <h1 id="big-text">B</h1>

        <div className="calculation">
          <input type={"number"}></input>
          <img src="/resources/Boton.png" />
          <input type={"number"}></input>
        </div>

        <div className="btn-bview">
          <BtnContinue location="/bView" />
        </div>
      </div>
    </div>
  )
}

export default BView;