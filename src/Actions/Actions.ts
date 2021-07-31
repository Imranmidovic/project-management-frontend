import { Dispatch } from "redux";
import { addProject, getProject, getProjects } from "../Api/api";
import { ProjectType } from "../Store/ProjectTypes";
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
} from "./Constants";

export const getAllProjectsAction = () => {
  return (dispatch: Dispatch) => {
    return getProjects()
      .then((res) => {
        dispatch({ type: GET_PROJECTS, payload: res.data });
      })
      .catch((err) => console.error(err));
  };
};
export const getProjectAction = (id: number) => {
  return (dispatch: Dispatch) => {
    return getProject(id).then((res) => {
      dispatch({ type: GET_PROJECT, payload: res.data });
    });
  };
};
export const addProjectAction = (project: any) => {
  return(dispatch: Dispatch) => {
    return addProject(project).then((res) => {
      dispatch({type: ADD_PROJECT, payload: res.data})
    })
  }
};
export const deleteProjectAction = (id: number) => {
  return {
    type: DELETE_PROJECT,
    payload: id,
  };
};
export const updateProjectAction = (project: ProjectType) => {
  return {
    type: UPDATE_PROJECT,
    payload: project,
  };
};
