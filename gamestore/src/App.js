import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { Header } from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { GamePage } from "./pages/gamePage/GamePage";
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
            <Route exact path="/app/:title">
              <GamePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
