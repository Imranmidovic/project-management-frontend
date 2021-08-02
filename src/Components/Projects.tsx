import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjectsAction, getProjectAction } from "../Actions/Actions";
import { rootState } from "../Reducers/RootReducer";
import { ProjectType } from "../Store/ProjectTypes";
import ProjectTableRow from "./ProjectTableRow";
import { useHistory } from "react-router-dom";
import { Button, withStyles } from "@material-ui/core";
import { useState } from "react";
import AddProjectModal from "./AddProjectModal";
const Projects = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
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
  const history = useHistory();
  const StyledTableCell = withStyles((theme: any) => ({
    head: {
      backgroundColor: "#3f51b5",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  return (
    <div>
      <TableContainer component={Paper} color="primary">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Started</StyledTableCell>
              <StyledTableCell>Settings</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project: ProjectType) => (
              <TableRow
                key={project.id}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(getProjectAction(project.id));
                  history.push(`/Projects/${project.id}`);
                }}
              >
                <ProjectTableRow project={project} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="secondary" style={{marginTop: '20px'}} onClick={() => setIsOpenModal(true)}>
        Add Project
      </Button>
      <AddProjectModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
};
export default Projects;
