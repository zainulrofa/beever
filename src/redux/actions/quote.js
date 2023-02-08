import ACTION_STRING from "./actionStrings";
import { getQuote, createQuote } from "../../provider/api";

const getDataPending = () => ({
  type: ACTION_STRING.getData.concat(ACTION_STRING.pending),
});

const getDataRejected = (error) => ({
  type: ACTION_STRING.getData.concat(ACTION_STRING.rejected),
  payload: { error },
});

const getDataFulfilled = (data) => ({
  type: ACTION_STRING.getData.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const createDataPending = () => ({
  type: ACTION_STRING.createData.concat(ACTION_STRING.pending),
});

const createDataRejected = (error) => ({
  type: ACTION_STRING.createData.concat(ACTION_STRING.rejected),
  payload: { error },
});

const createDataFulfilled = (data) => ({
  type: ACTION_STRING.createData.concat(ACTION_STRING.fulfilled),
  payload: { data },
});

const getDataThunk = (cbSuccess, cbDenied) => {
  return async (dispatch) => {
    try {
      dispatch(getDataPending());
      // console.log('redux', body);
      const result = await getQuote();
      dispatch(getDataFulfilled(result.data));
      console.log(result.data);
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(getDataRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error);
    }
  };
};

const createDataThunk = (cbSuccess, cbDenied) => {
  return async (dispatch) => {
    try {
      dispatch(createDataPending());
      // console.log('redux', body);
      const result = await createQuote();
      dispatch(createDataFulfilled(result.data));
      console.log(result.data);
      typeof cbSuccess === "function" && cbSuccess();
    } catch (error) {
      dispatch(createDataRejected(error));
      // console.log(error);
      typeof cbDenied === "function" && cbDenied(error);
    }
  };
};

const quoteAction = {
  getDataThunk,
  createDataThunk,
};

export default quoteAction;
// import axios from "axios";

// export const getKanyeQuote = () => async (dispatch) => {
//   try {
//     const res = await axios.get("https://api.kanye.rest/");
//     dispatch({ type: "GET_KANYE_QUOTE", payload: res.data });
//   } catch (err) {
//     dispatch({ type: "GET_KANYE_QUOTE_ERROR", payload: err });
//   }
// };
