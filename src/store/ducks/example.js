/**
 * Action Types
 */
export const Types = {
  GET_DATE: "date/GET_DATE"
};
/**
 * Reducer
 */
const initialState = {};
export default function example(state = initialState, action) {
  switch (action.type) {
    case Types.GET_DATE:
      return { ...state, date: action.payload.date };

    default:
      return state;
  }
}
/**
 *  Action Creators
 */

export const Creators = {
  getDate: date => ({
    type: Types.GET_DATE,
    payload: { date }
  })
};
