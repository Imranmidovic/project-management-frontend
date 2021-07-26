import { ADD_PROJECT, DELETE_PROJECT, GET_PROJECTS, UPDATE_PROJECT } from "./Constants"

export const getProjectsAction = () => {
    return {type: GET_PROJECTS}
}
export const addProjectAction = (project) => {
    return{
        type:ADD_PROJECT,
        payload: project
    }
}
export const deleteProjectAction = (project) => {
    return{
        type:DELETE_PROJECT,
        payload:project
    }
}
export const updateProjectAction = (project) => {
    return{
        type:UPDATE_PROJECT,
        payload:project
    }
}