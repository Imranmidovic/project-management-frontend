import {useHistory} from "react-router-dom";
const ProjectComponent = ({project}: any) => {
    const history = useHistory()
    
    return(<>
        <p>{project.title}</p>
        <button onClick={() => {history.goBack()}}>Go back</button>
    </>)
}
export default ProjectComponent;