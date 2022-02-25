import axios from "axios";

export const getPlaylists = async () => {
  let response = await axios.get(
    "http://localhost:8080/https://api.deezer.com/chart/0/playlists?limit=30"
  );
  let playlists = response.data;
  return playlists;
};

export const getPlaylistById = async (playlistId) => {
  let response = await axios.get(
    `http://localhost:8080/https://api.deezer.com/playlist/${playlistId}`
  );
  let playlist = response.data;
  return playlist;
};