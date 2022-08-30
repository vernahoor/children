import {
  LIST_POPULATIONS_FAILED,
  LIST_POPULATIONS_REQUEST,
  LIST_POPULATIONS_SUCCESS,
  LIST_SUM_POP_REQUEST,
  LIST_SUM_POP_SUCCESS,
  LIST_SUM_POP_FAILED,
  LIST_POPULATIONS_MIDDLE_FAILED,
  LIST_POPULATIONS_MIDDLE_REQUEST,
  LIST_POPULATIONS_MIDDLE_SUCCESS,
  LIST_POPULATIONS_AGE_SUCCESS,
  LIST_POPULATIONS_AGE_REQUEST,
  LIST_POPULATIONS_AGE_FAILED,
  LIST_POPULATIONS_TOTAL_FAILED,
  LIST_POPULATIONS_TOTAL_SUCCESS,
  LIST_POPULATIONS_TOTAL_REQUEST,
  LIST_TOTAL_AGE_REQUEST,
  LIST_TOTAL_AGE_SUCCESS,
  LIST_TOTAL_AGE_FAILED,
} from "../../type";
import axios from "axios";
export const listPop = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_REQUEST,
  });
  try {
    const res = await axios.get("http://localhost:5000/api/population/area");
    dispatch({
      type: LIST_POPULATIONS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const filterPop = (city, year) => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_REQUEST,
  });
  try {
    const res = await axios.get("/api/population/area");
    let filteredProducts = res.data;

    if (year !== "all" && city !== "all") {
      filteredProducts = res.data.filter(
        (product) => product.city === city && product.year === year
      );
    }
    if (year == "all" && city !== "all") {
      filteredProducts = res.data.filter((product) => product.city === city);
    }
    if (year !== "all" && city == "all") {
      filteredProducts = res.data.filter((product) => product.year === year);
    }

    dispatch({
      type: LIST_POPULATIONS_SUCCESS,
      payload: filteredProducts,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const listSumPop = () => async (dispatch) => {
  dispatch({
    type: LIST_SUM_POP_REQUEST,
  });
  try {
    const res = await axios.get("/api/population/sum");
    dispatch({
      type: LIST_SUM_POP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_SUM_POP_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listPopMiddle = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_MIDDLE_REQUEST,
  });
  try {
    const res = await axios.get("/api/population/middle");
    dispatch({
      type: LIST_POPULATIONS_MIDDLE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_MIDDLE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listPopAge = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_AGE_REQUEST,
  });
  try {
    const res = await axios.get("/api/population/age");
    dispatch({
      type: LIST_POPULATIONS_AGE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_AGE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listPopTotal = () => async (dispatch) => {
  dispatch({
    type: LIST_POPULATIONS_TOTAL_REQUEST,
  });
  try {
    const res = await axios.get("http://localhost:5000/api/population/total");
    dispatch({
      type: LIST_POPULATIONS_TOTAL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_POPULATIONS_TOTAL_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};

export const listTotalAge = () => async (dispatch) => {
  dispatch({
    type: LIST_TOTAL_AGE_REQUEST,
  });
  try {
    const res = await axios.get(
      "http://localhost:5000/api/population/totalAge"
    );
    dispatch({
      type: LIST_TOTAL_AGE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_TOTAL_AGE_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
