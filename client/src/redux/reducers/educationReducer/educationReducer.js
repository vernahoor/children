import {
  LIST_EDUCATION_FAILED,
  LIST_EDUCATION_REQUEST,
  LIST_EDUCATION_SUCCESS,
} from "../../type";
const initialState = {
  educations: [],
};
export const listEduReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LIST_EDUCATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LIST_EDUCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        educations: payload,
      };
    case LIST_EDUCATION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
        return state
  }
};
