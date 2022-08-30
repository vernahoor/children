import {
  LIST_EDUCATION_FAILED,
  LIST_EDUCATION_REQUEST,
  LIST_EDUCATION_SUCCESS,
} from "../../type";
import axios from "axios";
export const listEdu = () => async (dispatch) => {
  dispatch({
    type: LIST_EDUCATION_REQUEST,
  });
  try {
    const res = await axios.get("/api/education");
    dispatch({
      type: LIST_EDUCATION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: LIST_EDUCATION_FAILED,
      payload:
        err.response && err.response.data
          ? err.response.data.msg
          : err.response.data,
    });
  }
};
export const filterEdu =
  (city, year, education_type, level, dependency) => async (dispatch) => {
    dispatch({
      type: LIST_EDUCATION_REQUEST,
    });
    try {
      const res = await axios.get("/api/education");
      let filteredProducts = res.data;

      if (
        year !== "all" &&
        city !== "all" &&
        education_type !== "all" &&
        level !== "all" &&
        dependency !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.city === city &&
            product.year === year &&
            product.education_type === education_type &&
            product.level === level &&
            product.dependency === dependency
        );
      }
      if (
        year == "all" &&
        education_type == "all" &&
        level == "all" &&
        dependency == "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter((product) => product.city === city);
      }
      if (
        year !== "all" &&
        education_type == "all" &&
        level == "all" &&
        dependency == "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter((product) => product.year === year);
      }
      if (
        year == "all" &&
        education_type !== "all" &&
        level == "all" &&
        dependency == "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) => product.education_type === education_type
        );
      }
      if (
        year == "all" &&
        education_type == "all" &&
        level !== "all" &&
        dependency == "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) => product.level === level
        );
      }
      if (
        year == "all" &&
        education_type == "all" &&
        level == "all" &&
        dependency !== "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) => product.dependency === dependency
        );
      }
      if (
        year !== "all" &&
        education_type !== "all" &&
        level == "all" &&
        dependency == "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.year === year && product.education_type === education_type
        );
      }

      if (
        year !== "all" &&
        education_type == "all" &&
        level == "all" &&
        dependency == "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) => product.year === year && product.city === city
        );
      }
      if (
        year !== "all" &&
        education_type == "all" &&
        level !== "all" &&
        dependency == "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) => product.year === year && product.level === level
        );
      }
      if (
        year !== "all" &&
        education_type == "all" &&
        level == "all" &&
        dependency !== "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.year === year && product.dependency === dependency
        );
      }
      if (
        year == "all" &&
        education_type !== "all" &&
        level !== "all" &&
        dependency == "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.education_type === education_type && product.level === level
        );
      }
      if (
        year == "all" &&
        education_type !== "all" &&
        level == "all" &&
        dependency !== "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.education_type === education_type &&
            product.dependency === dependency
        );
      }
      if (
        year == "all" &&
        education_type !== "all" &&
        level == "all" &&
        dependency == "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.education_type === education_type && product.city === city
        );
      }
      if (
        year == "all" &&
        education_type == "all" &&
        level !== "all" &&
        dependency !== "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.level === level && product.dependency === dependency
        );
      }
      if (
        year == "all" &&
        education_type == "all" &&
        level !== "all" &&
        dependency == "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) => product.level === level && product.city === city
        );
      }
      if (
        year == "all" &&
        education_type == "all" &&
        level == "all" &&
        dependency !== "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.dependency === dependency && product.city === city
        );
      }
      if (
        year !== "all" &&
        education_type !== "all" &&
        level !== "all" &&
        dependency == "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.year === year &&
            product.education_type === education_type &&
            product.level === level
        );
      }
      if (
        year !== "all" &&
        education_type !== "all" &&
        level == "all" &&
        dependency !== "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.year === year &&
            product.education_type === education_type &&
            product.dependency === dependency
        );
      }
      if (
        year !== "all" &&
        education_type !== "all" &&
        level == "all" &&
        dependency == "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.year === year &&
            product.education_type === education_type &&
            product.city === city
        );
      }
      if (
        year !== "all" &&
        education_type == "all" &&
        level !== "all" &&
        dependency !== "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.year === year &&
            product.level === level &&
            product.dependency === dependency
        );
      }
      if (
        year !== "all" &&
        education_type == "all" &&
        level !== "all" &&
        dependency == "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.year === year &&
            product.city === city &&
            product.city === city
        );
      }
      if (
        year !== "all" &&
        education_type == "all" &&
        level == "all" &&
        dependency !== "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.year === year &&
            product.dependency === dependency &&
            product.city === city
        );
      }
      if (
        year == "all" &&
        education_type !== "all" &&
        level !== "all" &&
        dependency !== "all" &&
        city == "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.level === level &&
            product.education_type === education_type &&
            product.dependency === dependency
        );
      }
      if (
        year == "all" &&
        education_type !== "all" &&
        level !== "all" &&
        dependency == "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.level === level &&
            product.education_type === education_type &&
            product.city === city
        );
      }
      if (
        year == "all" &&
        education_type !== "all" &&
        level == "all" &&
        dependency !== "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.dependency === dependency &&
            product.education_type === education_type &&
            product.city === city
        );
      }
      if (
        year == "all" &&
        education_type == "all" &&
        level !== "all" &&
        dependency !== "all" &&
        city !== "all"
      ) {
        filteredProducts = res.data.filter(
          (product) =>
            product.level === level &&
            product.dependency === dependency &&
            product.city === city
        );
      }
      dispatch({
        type: LIST_EDUCATION_SUCCESS,
        payload: filteredProducts,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: LIST_EDUCATION_FAILED,
        payload:
          err.response && err.response.data
            ? err.response.data.msg
            : err.response.data,
      });
    }
  };
