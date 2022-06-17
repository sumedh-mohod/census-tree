import { v4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./Types";

const SetNewAlert = (data) => {
  return (dispatch) => {
    const id = v4();
    dispatch({
      type: SET_ALERT,
      payload: { id, ...data },
    });
    if (!data.toHold) {
      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 4000);
    }
  };
};

const DeleteAlert = (data) => {
  return {
    type: REMOVE_ALERT,
    payload: data.id,
  };
};

export { SetNewAlert, DeleteAlert };