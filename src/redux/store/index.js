import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";
// Reducer
import playlistReducer from "../reducers/playlistReducer.js";

export const initialState = {
  playlist: {
    playlistData: {
      id: "",
      title: "",
    },
    creatorData: {
      name: "",
    },
    tracksData: [
      {
        id: "",
        duration: "",
        preview: "",
        album: {
          title: "",
          cover: "",
        },
        artist: {
          name: "",
        },
      },
    ],
    isLoading: true,
    isError: false,
  },
};

// No persistor
export const configureStore = createStore(
  playlistReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Persistor
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistConfig = {
//   key: "root",
//   storage: localStorage,
//   transforms: [
//     encryptTransform({
//       secretKey: process.env.REACT_APP_SECRET_KEY,
//       onError: (error) => {
//         console.log(error);
//       },
//     }),
//   ],
// };

// const persistedReducer = persistReducer(persistConfig, playlistReducer);

// const configureStore = createStore(
//   persistedReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(thunk))
// );

// const persistor = persistStore(configureStore);

// export { configureStore, persistor };
