const initState = {
  options: {
    loading: false,
    question_category: ``,
    amount_of_questions: 10,
    popup_state: false,
    file_category: ``,
    files: [],
  },
  questions: [],
  index: 0,
  score: 0,
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_LOADING":
      return {
        ...state,
        options: {
          ...state.options,
          loading: action.loading,
        },
      };
    case "SET_POPUP":
      return {
        ...state,
        options: {
          ...state.options,
          popup_state: action.popup_state,
        },
      };
    case "CHANGE_CATEGORY":
      return {
        ...state,
        options: {
          ...state.options,
          question_category: action.question_category,
        },
      };
      case "SET_FILE":
        return{
          ...state,
          options: {
            ...state.options,
            files : action.files,
          }
        };
      case "CREATE_FILE" :
        return{
          ...state,
          options:{
            ...state.options,
            files:[...state.options.files, action.files],
          }
        }
    case "SET_FILE_CATEGORY":
      return{
        ...state,
        options: {
          ...state.options,
          file_category: action.file_category,
        }
      }
    case "CHANGE_AMOUNT":
      return {
        ...state,
        options: {
          ...state.options,
          amount_of_questions: action.amount_of_questions,
        },
      };
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.questions,
      };
    case "SET_INDEX":
      return {
        ...state,
        index: action.index,
      };
    case "SET_SCORE":
      return {
        ...state,
        score: action.score,
      };

    default:
      return state;
  }
};

export default Reducer;
