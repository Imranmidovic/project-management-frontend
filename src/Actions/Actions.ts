import { Dispatch } from "redux";
import {
  addProject,
  addSubProject,
  deleteProject,
  getProject,
  getProjects,
  getSubProject,
  getSubProjects,
  updateProject,
  updateSubProject,
} from "../Api/api";
import { ProjectAddType, ProjectType } from "../Store/ProjectTypes";
import { SubProjectType, SubProjectAddType } from "../Store/SubProjectTypes";
import {
  ADD_PROJECT,
  ADD_SUBPROJECT,
  DELETE_PROJECT,
  GET_PROJECT,
  GET_PROJECTS,
  GET_SUBPROJECT,
  GET_SUBPROJECTS,
  UPDATE_PROJECT,
  UPDATE_SUBPROJECT,
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

export const addProjectAction = (project: ProjectAddType) => {
  return (dispatch: Dispatch) => {
    return addProject(project).then((res) => {
      dispatch({ type: ADD_PROJECT, payload: res.data });
    });
  };
};
export const deleteProjectAction = (id: number) => {
  return (dispatch: Dispatch) => {
    return deleteProject(id).then(() => {
      dispatch({ type: DELETE_PROJECT, payload: id });
    });
  };
};
export const updateProjectAction = (project: ProjectType) => {
  return (dispatch: Dispatch) => {
    return updateProject(project).then(() =>
      getProjects().then((res) => {
        dispatch({ type: UPDATE_PROJECT, payload: res.data });
      })
    );
  };
};
//SUBPROJECTS
export const getAllSubProjectsAction = (fk: number) => {
  return (dispatch: Dispatch) => {
    return getSubProjects().then((res) => {
      dispatch({
        type: GET_SUBPROJECTS,
        payload: res.data.filter((item: SubProjectType) => item.fk === fk),
      });
    });
  };
};
export const getSubProjectAction = (id: number) => {
  return (dispatch: Dispatch) => {
    return getSubProject(id).then((res) => {
      dispatch({ type: GET_SUBPROJECT, payload: res.data });
    });
  };
};
export const addSubProjectAction = (subProject: SubProjectAddType) => {
  return (dispatch: Dispatch) => {
    return addSubProject(subProject).then((res) => {
      dispatch({ type: ADD_SUBPROJECT, payload: res.data });
    });
  };
};
export const updateSubProjectAction = (subProject: SubProjectType) => {
  return (dispatch: Dispatch) => {
    return updateSubProject(subProject).then((res) => {
      dispatch({ type: UPDATE_SUBPROJECT, payload: res.data });
    });
  };
};
