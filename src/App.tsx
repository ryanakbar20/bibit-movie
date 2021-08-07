import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation,
} from "react-router-dom";
import { Home, Detail } from "./pages";
import { Provider } from "react-redux";
import store from "./config/redux";

function App() {
  function _ScrollToTop(props: any) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  }
  const ScrollToTop = withRouter(_ScrollToTop);

  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <div className="transition ease-in-out duration-500">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/detail/:id" component={Detail} />
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default App;
