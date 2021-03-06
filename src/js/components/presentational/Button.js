import React from "react";
import PropTypes from "prop-types";
const Button = ({
  type,
  text,
  onClick
}) => (<div className="form-group">
  <button type={type} onClick={onClick}>{text}</button>
</div>);
Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Button;
