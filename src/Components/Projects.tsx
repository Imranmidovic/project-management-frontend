
import { getProjects } from "../Api/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectsAction } from "../Actions/Actions";
import { rootState } from "../Reducers/RootReducer";
import { ProjectType } from "../Store/ProjectTypes";
const Projects = () => {
    const projects = useSelector((state: rootState) => state.projects);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProjectsAction());
    }, [dispatch]);

    return <div>
        {projects.map((project: ProjectType) => (
            <p key={project.id}>{project.title}</p>
        ))}
    </div>;
}
export default Projects;