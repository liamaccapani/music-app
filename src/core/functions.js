import axios from "axios";
// import { AxiosResponse, AxiosError } from "axios";

export const getPlaylists = async () => {
  let response = await axios.get(
    "http://localhost:8080/https://api.deezer.com/chart/0/playlists?limit=30"
  );
  let playlists = response.data;
  return playlists;
};