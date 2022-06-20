import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { Header } from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux/index";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
