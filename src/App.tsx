import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Detail } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
