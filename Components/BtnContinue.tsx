import Router from "next/router";
import PropTypes from "prop-types";
import { UrlObject } from "url";

const BtnContinue = ({ location, data }: { location: string, data: any }) => {
  const goToPage = () => {
    let target: Object = { pathname: location };
    if (data) {
      target = { ...target, query: data }
    }
    console.log('target', target);
    Router.push(target);
  }

  return (
    // <button className={`btn-continue`} onClick={() => goToPage()} />
    <button className="btn-continue" onClick={() => goToPage()}>Continuar</button>
  )
}
BtnContinue.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object
}

export default BtnContinue;