import axios from "axios";
import { getHeader } from "./main.service";
import config from "../config";

export const getNewRelease = async () => {
  const headers = await getHeader();
  const res = await axios.get(`${config.api.baseUrl}/browse/new-releases`, {
    headers,
  });
  return res.data.albums.items;
};
