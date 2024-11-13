import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatePost from "./component/CreatePost";
import Post from "./component/Post";
import EditPost from "./component/EditPost";
import Docs from "./pages/Docs";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="page-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/create">
              <CreatePost />
            </Route>
            <Route exact path="/post/:id">
              <Post />
            </Route>
            <Route exact path="/edit/:id">
              <EditPost />
            </Route>
            <Route exact path="/docs">
              <Docs />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
