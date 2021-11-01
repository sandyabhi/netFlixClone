import "./app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Watch from "./pages/Watch";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movies">
            <Home type="movies" />
          </Route>
          <Route path="/series">
            <Home type="series" />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
