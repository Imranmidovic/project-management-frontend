
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectsAction } from "../Actions/Actions";
import { rootState } from "../Reducers/RootReducer";
import { ProjectType } from "../Store/ProjectTypes";
import Project from './ProjectTableRow';
const Projects = () => {
    const projects = useSelector((state: rootState) => state.projects);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProjectsAction());
    }, [dispatch]);
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project: ProjectType) => (
            <TableRow key={project.id}>
                <Project project={project}/>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Projects;
