import "./App.css";
import { Paper, Tab, Tabs } from "@material-ui/core";
import Projects from "./Components/Projects";

function App() {

  return (
    <div className="App">
      <Paper square>
        <Tabs
          value={0}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab  label="Projects" />
        </Tabs>
      </Paper>
      <Projects />
    </div>
  );
}

export default App;
