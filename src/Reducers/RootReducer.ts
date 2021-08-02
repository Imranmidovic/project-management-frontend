import { combineReducers } from "redux";
import currentProjectReducer from "./CurrentProjectReducer";
import projectsReducer from "./ProjectsReducer";
import subProjectsReducer from "./SubProjectsReducer";

const rootReducer = combineReducers(
    {
        projects: projectsReducer,
        subProjects: subProjectsReducer,
        currentProject: currentProjectReducer
    }
)
export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
