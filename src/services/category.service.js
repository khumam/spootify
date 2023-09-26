import axios from "axios";
import { getHeader } from "./main.service";
import config from "../config";

export const getListCategories = async () => {
  const headers = await getHeader();
  const res = await axios.get(`${config.api.baseUrl}/browse/categories`, {
    headers,
  });
  return res.data.categories.items;
};
