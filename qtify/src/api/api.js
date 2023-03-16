// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new

import axios from "axios";
const apiURL = "https://qtify-backend-labs.crio.do";

export const fetchTopSongs = async () => {
  try {
    const res = await axios.get(`${apiURL}/albums/top`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchNewSongs = async () => {
  try {
    const res = await axios.get(`${apiURL}/albums/new`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
