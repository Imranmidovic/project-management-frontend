import { AnyAction } from "redux";
import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, UPDATE_PROJECT } from "../Actions/Constants";
import { ProjectType } from "../Store/ProjectTypes";
const initialState: ProjectType[] = [];
const projectsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_PROJECTS:
        return action.payload;
    case ADD_PROJECT:
      return [...state, action.payload];
    case DELETE_PROJECT:
      return state.filter(project => project.id !== action.payload);
    case UPDATE_PROJECT:
      return action.payload;
    default:
      return state;
  }
};
export default projectsReducer;
