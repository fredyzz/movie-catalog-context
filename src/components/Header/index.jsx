import React from "react";
import PropTypes from "prop-types";

const Header = ({ title, subTitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

Header.defaultProps = {
  subTitle: null
};

export default Header;
