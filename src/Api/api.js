import axios from "axios";
const api = axios.create({
    baseURL: "https://localhost:5001/api",
});

export const getProjects = () => {
    api.get("/Projects").then(res => res.data).catch(err => console.log(err));
}
export const getProject = (id) => {
    api.get("/Projects/__id__", id);
}
export const addProject = (project) => {
    api.post("/Projects", project);
}
export const updateProject = (project) => {
    api.put("/Projects/__id__", project);
}
export const deleteProject = (id) => {
    api.delete("/Projects/__id__", id);
}
export default api;