import { Button } from "@material-ui/core";
import { ProjectType } from "../Store/ProjectTypes";
import Dialog, { DialogSize } from "./Dialog";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteProjectAction, updateProjectAction } from "../Actions/Actions";
export interface Props {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  project?: ProjectType;
}
const UpdateProjectModal = ({
  isOpenModal,
  setIsOpenModal,
  project,
}: Props) => {
  const dispatch = useDispatch();
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    null
  );
  useEffect(() => {
    if (project) setCurrentProject(project);
  }, [project]);

  const updateProject = () => {
    if (currentProject) {
      dispatch(updateProjectAction(currentProject));
      setCurrentProject(null);
      setIsOpenModal(false);
    }
  };

  const onClose = () => {
    setCurrentProject(null);
    setIsOpenModal(false);
  };


  const deleteProject = () => {
      if(currentProject){
        dispatch(deleteProjectAction(currentProject.id));
        setCurrentProject(null);
        setIsOpenModal(false);
      }
  }

  return (
    <Dialog open={isOpenModal} size={DialogSize.Small}>
      <div className="justify-center">
        <form noValidate autoComplete="off" onSubmit={updateProject}>
          <div className="my-8">
            {project && currentProject && (
              <TextField
                label="Project Title"
                value={currentProject.title}
                onChange={(e) =>
                  setCurrentProject({
                    ...currentProject,
                    title: e.target.value,
                  })
                }
              />
            )}
          </div>
          <Button
            className="w-48 m-auto"
            variant="contained"
            color="primary"
            type="submit"
          >
            Update Project
          </Button>
          <Button variant="contained" color="secondary" type="button" className="m-2 w-48" onClick={deleteProject}>Delete project</Button>
        </form>
      </div>
      <Button onClick={onClose}>Close</Button>
    </Dialog>
  );
};
export default UpdateProjectModal;
