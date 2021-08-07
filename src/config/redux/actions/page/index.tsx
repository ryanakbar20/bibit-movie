import { FETCH_PAGE } from "../../types";
import axios from "axios";
import store from "../../index";

export const fetchPage = (url: string, page: string, params: any) => {
  axios({
    method: "GET",
    url,
    params,
  }).then((res) => {
    res.data.Response &&
      store.dispatch({
        type: FETCH_PAGE,
        value: {
          [page]: res.data,
        },
      });
  });
};
