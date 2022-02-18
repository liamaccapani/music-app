import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Album from "./pages/Album";
import Artist from "./pages/Artist";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        {/* ------- Home ------- */}
        <Route
          path="/"
          exact
          render={(routerProps) => {
            return <Home {...routerProps} />;
          }}
        />
        {/* ------- Artist ------- */}
        {/* <Route
          path="/artist/:artistId"
          render={(routerProps) => {
            return <Artist {...routerProps} />;
          }}
        /> */}
        {/* ------- Album ------- */}
        <Route
          path="/album/:albumId"
          render={(routerProps) => {
            return <Album {...routerProps} />;
          }}
        />
        {/* ------- Default Case ------- */}
        <Route render={() => <h1>404 - NOT FOUND</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
