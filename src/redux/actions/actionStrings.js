import { ActionType } from "redux-promise-middleware";

const ACTION_STRING = {
  getData: "GET_DATA",
  createData: "CREATE_DATA",
  pending: `_${ActionType.Pending}`,
  fulfilled: `_${ActionType.Fulfilled}`,
  rejected: `_${ActionType.Rejected}`,
};

export default ACTION_STRING;
