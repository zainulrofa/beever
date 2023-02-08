import ACTION_STRING from "../actions/actionStrings";

const initialState = {
  quote: "",
};

const quoteReducer = (prevState = initialState, { type, payload }) => {
  const { getData, createData, pending, rejected, fulfilled } = ACTION_STRING;
  switch (type) {
    case getData + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case getData + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.response.data.msg,
      };
    case getData + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
        quote: payload.data.quote,
      };
    case createData + pending:
      return {
        ...prevState,
        isLoading: true,
        isError: false,
        isFulfilled: false,
      };
    case createData + rejected:
      return {
        ...prevState,
        isError: true,
        isLoading: false,
        isFulfilled: false,
        error: payload.error.message,
      };
    case createData + fulfilled:
      return {
        ...prevState,
        isLoading: false,
        isError: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default quoteReducer;
