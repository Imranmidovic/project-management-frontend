import "./App.css";
import {getProjects} from "./Api/api";
import { useEffect, useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() =>{

  },[])
  return <div className="App">
      {projects && projects.map((project) => (
        <p>{project.Title}</p>
      ))}
  </div>;
}

export default App;
