import { combineReducers } from "redux";
import projectsReducer from "./ProjectsReducer";
import subProjectsReducer from "./SubProjectsReducer";

const rootReducer = combineReducers(
    {
        projects: projectsReducer,
        subProjects: subProjectsReducer
    }
)
export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
