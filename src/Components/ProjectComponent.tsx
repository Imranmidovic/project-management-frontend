import { Button, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import {useHistory} from "react-router-dom";
const ProjectComponent = ({project}: any) => {
    const history = useHistory()
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      const classes = useStyles();
      const StyledTableCell = withStyles((theme: any) => ({
        head: {
          backgroundColor: "#3f51b5",
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
    return(<>
        <p>{project.title}</p>
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
           
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="secondary" style={{marginTop: '20px'}}>
        Add Subproject
      </Button>
    </div>
        <button onClick={() => {history.goBack()}}>Go back</button>
    </>)
}
export default ProjectComponent;