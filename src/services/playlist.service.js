import axios from "axios";
import { getHeader } from "./main.service";
import config from "../config";

export const getFeaturedPlaylist = async () => {
  const headers = await getHeader();
  const res = await axios.get(`${config.api.baseUrl}/browse/featured-playlists`, {
    headers,
  });
  return res.data.playlists.items;
};
