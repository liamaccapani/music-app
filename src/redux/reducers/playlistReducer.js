// Actions
import { SET_PLAYLIST_INFO } from "../actions"
// State
import { initialState } from "../store"

const playlistReducer = (state = initialState.playlist, action) => {
  switch (action.type) {
    case SET_PLAYLIST_INFO: {
        return {
            ...state,
            playlist: action.payload
        }
    }
    default:
      return state;
  }
};

export default playlistReducer;
