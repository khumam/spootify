import axios from "axios";
import config from "../config";

export const getAccessToken = async () => {
  // const formdata = new FormData();
  // formdata.append("grant_type", "client_credentials");
  // formdata.append("client_id", config.api.clientId);
  // formdata.append("client_secret", config.api.clientSecret);

  const formdata = serialize({
    grant_type: "client_credentials",
    client_id: config.api.clientId,
    client_secret: config.api.clientSecret,
  });

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const res = await axios.post(config.api.authUrl, formdata, { headers });
  localStorage.setItem("access_token", res.data.access_token);
  return res;
};

export const getHeader = async () => {
  await getAccessToken();
  return {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };
};

export const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};
