import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ListOfAnimals from "./ListOfAnimals";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/animals">Animals</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/animals">
            <ListOfAnimals />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
