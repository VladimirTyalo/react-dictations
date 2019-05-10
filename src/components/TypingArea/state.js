import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import compose from "ramda/src/compose";
import { useKeyboard } from "hooks/useKeyboard";
import path from "ramda/src/path"

const withState = (Component) => {
  const state = "hello";

  return (props) => {
    const id = path(['match', 'params', 'id'], props);
    const { keyPressed } = useKeyboard()

    useEffect(() => {
      console.log('...loading ', id);

    }, [id]);

    console.log('------', keyPressed);

    return <Component activeSymbolId={state}/>;
  };
};


export default compose(withRouter, withState);
