import "./App.css";
import Projects from "./Components/Projects";
import NavBar from "./Components/NavBar";
import { addProjectAction } from "./Actions/Actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  function AddProject(){
    dispatch(addProjectAction({id: 3, title: "Projekat2"}))
  }
  return (
    <div className="App">
      <NavBar />
      <Projects />
      <button onClick={() => AddProject()}>Add project</button>
    </div>
  );
}

export default App;
