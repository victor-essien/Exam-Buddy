import React from "react";
import Settings from "../components/Settings";
import Question from "../components/Question";
import FinalScreen from "../components/FinalScreen";
import { useSelector } from "react-redux";
const Quiz = () => {
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  } else if (!questions.length) {
    component = <Settings />;
  } else {
    component = <FinalScreen />;
  }
  return (
    <div className="container">
      <div className="app-container">{component}</div>
    </div>
  );
};

export default Quiz;
