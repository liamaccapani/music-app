import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Album from "./pages/Album";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import Frame from "./components/./Frame/Frame";

function App() {
  return (
    <Router>
      <Switch>
        {/* ------- Home ------- */}
        <Route
          path="/"
          exact
          render={(routerProps) => {
            return (
              // <Frame>
                //{" "}
                <Home {...routerProps}/>
              // </Frame>
            );
          }}
        />
        {/* ------- Artist ------- */}
        <Route
          path="/artist/:artistId"
          render={(routerProps) => {
            return (
              // <Frame>
                <Artist {...routerProps}/>
              // </Frame>
            );
          }}
        />
        {/* ------- Album ------- */}
        <Route
          path="/album/:albumId"
          render={(routerProps) => {
            return (
              // <Frame>
              // {" "}
                <Album {...routerProps}/>
              // </Frame>
            );
          }}
        />
        {/* ------- Default Case ------- */}
        <Route
          render={() => (
            <h1>404 - NOT FOUND</h1>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
