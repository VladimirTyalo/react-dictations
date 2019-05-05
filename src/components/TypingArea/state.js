import React, { useEffect } from "react";
import compose from "ramda/src/compose";
import path from "ramda/src/path"
import { withRouter } from "react-router";


const withState = (Component) => {
  const state = "hello";

  return (props) => {
    const id = path(['match', 'params', 'id'], props);

    useEffect(() => {
      console.log('...loading ', id);

    }, [id]);

    return <Component activeSymbolId={state}/>;
  };
};


export default compose(withRouter, withState);
