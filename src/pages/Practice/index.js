import React from "react";
import Main from "components/Layout/Main";
import TypingArea from "../../components/TypingArea";


const Practice = (props) => {


  const { match: { params } } = props;
  return (
    <Main>
      <TypingArea />
    </Main>
  );
};

export default Practice;
