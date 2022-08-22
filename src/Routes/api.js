import axios from "axios";

export function GetData({ page = 1 }) {
  return axios.get(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10`
  );
}
