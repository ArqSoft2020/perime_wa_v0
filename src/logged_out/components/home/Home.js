import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

import SimpleMap from "./SimpleMap"

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
       <SimpleMap />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
