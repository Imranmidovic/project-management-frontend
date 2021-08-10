import axios from "axios";
import { ProjectAddType, ProjectType } from "../Store/ProjectTypes";
const api = axios.create({
  baseURL: "https://localhost:5001/api",
});

export const getProjects = async () => await api.get("/Projects");

export const getProject = async (id: number) =>
  await api.get(`/Projects/${id}`);

export const addProject = (project: ProjectAddType) => 
  api.post("/Projects", project);
export const updateProject = (project: ProjectType) =>
  api.put(`/Projects/${project.id}`, project);
export const deleteProject = (id: number) =>
  api.delete(`/Projects/${id}`);
export const getSubProjects = async () => await api.get("/SubProjects");
export const getSubProject = async(id: number) => api.get(`/SubProjects/${id}`);
export const addSubProject =  (subProject: any) => api.post(`/SubProjects`, subProject);
export const removeSubProject = (id: number) => api.delete(`/SubProjects/${id}`);
export const updateSubProject = (subProject: any) => api.put(`/SubProjects/${subProject.id}`, subProject);
export default api;
