import "./App.css";
import Projects from "./Components/Projects";
import NavBar from "./Components/NavBar";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectComponent from "./Components/ProjectComponent";
import { Paper } from "@material-ui/core";
function App() {
  const currentProject = useSelector((state) => state.currentProject);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <div style={{margin: '50px'}}>
              <Projects />
            </div>
          </Route>
          <Route path="/Projects/:id">
            <ProjectComponent project={currentProject} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
