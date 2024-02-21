import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import FetchButton from "./FetchButton";
const Settings = () => {
  const [options, setOptions] = useState(null);
  const loading = useSelector((state) => state.options.loading);
  const questionCategory = useSelector(
    (state) => state.options.question_category
  );
  const questionAmount = useSelector(
    (state) => state.options.amount_of_questions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const apiUrl = `http://localhost:4000/api/quiz_category`;

    const handleLoadingChange = (value) => {
      dispatch({
        type: "CHANGE_LOADING",
        loading: value,
      });
    };

    handleLoadingChange(true);
    console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        handleLoadingChange(false);
        setOptions(response.category);
      });
  }, [setOptions, dispatch]);

  const handleCategoryChange = (event) => {
    dispatch({
      type: "CHANGE_CATEGORY",
      question_category: event.target.value,
    });
  };
  const handleAmountChange = (event) => {
    dispatch({
      type: "CHANGE_AMOUNT",
      amount_of_questions: event.target.value,
    });
  };

  return (
    <div className="settings">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div>
            <h2>Select Category:</h2>
            <select
              value={questionCategory}
              onChange={handleCategoryChange}
              className="select-cat"
            >
              <option>All</option>
              {options &&
                options.length &&
                options.map((option) => (
                  <option value={option.name} key={option.id}>
                    {option.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <h2>Amount of Questions:</h2>
            <input
              value={questionAmount}
              onChange={handleAmountChange}
              className="input-no"
            />
          </div>
          <FetchButton text="Get started" className="settings-btn" />
        </>
      )}
    </div>
  );
};

export default Settings;
