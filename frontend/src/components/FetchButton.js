import React from "react";
import { useSelector, useDispatch } from "react-redux";

const FetchButton = (props) => {
  const { text, className } = props;
  const questionCategory = useSelector(
    (state) => state.options.question_category
  );
  const questionAmount = useSelector(
    (state) => state.options.amount_of_questions
  );
  const questionIndex = useSelector((state) => state.index);
  const dispatch = useDispatch();

  const setLoading = (value) => {
    dispatch({
      type: "CHANGE_LOADING",
      loading: value,
    });
  };

  const setQuestions = (value) => {
    dispatch({
      type: "SET_QUESTIONS",
      questions: value,
    });
  };

  const handleQuery = async () => {
    let apiUrl = `http://localhost:4000/api/quiz?amount=${questionAmount}`;
    if (questionCategory.length) {
      apiUrl = apiUrl.concat(`&category=${questionCategory}`);
    }

    setLoading(true);
    await fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setQuestions(response.questions);
        setLoading(false);
      });
    console.log(setQuestions);
    if (questionIndex > 0) {
      dispatch({
        type: "SET_INDEX",
        index: 0,
      });
      dispatch({
        type: `SET_SCORE`,
        score: 0,
      });
    }
  };
  return (
    <button onClick={handleQuery} className={`fetch-btn ${className}`}>
      {text}
    </button>
  );
};

export default FetchButton;
