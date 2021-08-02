import TableCell from '@material-ui/core/TableCell';
import { ProjectType } from '../Store/ProjectTypes';
import { format } from 'date-fns';
import Icon from '@material-ui/core/Icon';
export type Props = {
    project: ProjectType,
}
const ProjectTableRow = ({project}: Props) => {
    return(
        <>
        <TableCell component="th" scope="row" width="45%" >
          {project.title}
        </TableCell>
        <TableCell width="45%">
            {format(new Date(project.started), "dd/MM/yyyy")}
        </TableCell>
        <TableCell>
        <Icon color="primary">settings</Icon>
        </TableCell>
        </>
    )
}
export default ProjectTableRow;