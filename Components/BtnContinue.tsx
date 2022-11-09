import Router from "next/router";
import PropTypes from "prop-types";
import { UrlObject } from "url";

const BtnContinue = ({ location }: { location: string }) => {
  const goToPage = () => {
    Router.push(location);
  }

  return (
    <button className={`btn-continue`} onClick={() => goToPage()} />
  )
}
BtnContinue.propTypes = {
  location: PropTypes.string,
}

export default BtnContinue;