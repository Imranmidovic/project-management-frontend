import axios from "axios";
import { ProjectType } from "../Store/ProjectTypes";
const api = axios.create({
  baseURL: "https://localhost:5001/api",
});

export const getProjects = async () => await api.get("/Projects");

export const getProject = async (id: number) =>
  await api.get(`/Projects/${id}`);

export const addProject = (project: ProjectType) => 
  api.post("/Projects", project);
export const updateProject = (project: ProjectType, id: number) =>
  api.put(`/Projects/${id}`, project);
export const deleteProject = (id: number) =>
  api.delete(`/Projects/${id}`);

export default api;
