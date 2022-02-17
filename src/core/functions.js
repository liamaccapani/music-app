import axios from "axios";
// import { AxiosResponse, AxiosError } from "axios";

export const getPlaylists = async () => {
  let response = await axios.get(
    "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists?limit=30"
  );
  let playlists = response.data;
  return playlists;
};

// export const getPlaylists = async () => {
//   let response = await fetch(
//     "https://api.deezer.com/chart", 
//     {mode: 'no-cors'}
//   );
//   let playlists = await response.json()
//   return playlists;
// };