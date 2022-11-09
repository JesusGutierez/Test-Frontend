import BtnContinue from "../Components/BtnContinue";

const BView = () => {
  return (
    <div className="bg bg-regular-view">
      <div>
        <h1 id="big-text">B</h1>
        <BtnContinue location="/bView" />
      </div>
    </div>
  )
}

export default BView;