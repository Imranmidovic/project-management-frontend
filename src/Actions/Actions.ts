import { Dispatch } from "redux";
import { getProjects } from "../Api/api";
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
export const getProjectAction = () => {
  return { type: GET_PROJECT };
};
export const addProjectAction = (project: any) => {
  return {
    type: ADD_PROJECT,
    payload: project,
  };
};
export const deleteProjectAction = (project: any) => {
  return {
    type: DELETE_PROJECT,
    payload: project,
  };
};
export const updateProjectAction = (project: any) => {
  return {
    type: UPDATE_PROJECT,
    payload: project,
  };
};
