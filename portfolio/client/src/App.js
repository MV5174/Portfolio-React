import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/nav";
import Footer from "./Components/Footer/footer";
import About from "./Components/About/about";
import NoMatch from "./Components/NoMatch/noMatch"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path = "/" component={About} />
          {/* <Route exact path = "/portfolio" component={Portfolio} /> */}
          {/* <Route exact path = "/contact" component={Contact} /> */}
          <Route path ="*" component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
