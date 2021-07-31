import TableCell from '@material-ui/core/TableCell';
import { ProjectType } from '../Store/ProjectTypes';

export type Props = {
    project: ProjectType,
}
const ProjectTableRow = ({project}: Props) => {
    return(
        <>
        <TableCell component="th" scope="row">
          {project.title}
        </TableCell>
        </>
    )
}
export default ProjectTableRow;