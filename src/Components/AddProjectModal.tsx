import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { addProject } from "../Api/api";
import { ProjectAddType } from "../Store/ProjectTypes";
import Dialog, { DialogSize } from "./Dialog";

export interface Props {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddProjectModal = ({ isOpenModal, setIsOpenModal }: Props) => {
  const [project, setProject] = useState<ProjectAddType>({
    title: "",
    started: new Date(),
  });
  return (
    <Dialog open={isOpenModal} onClose={setIsOpenModal} size={DialogSize.Small}>
      <form onSubmit={() => addProject(project)}>
        <div className="m-4">
          <TextField
            onChange={(e) => setProject({ ...project, title: e.target.value })}
            autoComplete="off"
            id="standard-basic"
            label="Project title"
          />
        </div>
        <div className="m-6">
          <TextField
            id="date"
            label="Started"
            type="date"
            defaultValue={new Date(project.started)}
            onChange={(e) =>
              setProject({ ...project, started: new Date(e.target.value) })
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="m-4">
        <Button variant="contained" className="my-4" color="primary" type="submit">
          Add project
        </Button>
        </div>
      </form>
      <Button color="secondary" className="m-4" onClick={() => {setIsOpenModal(false);
      setProject({title: "", started: new Date()})}}>
        Close
      </Button>
    </Dialog>
  );
};
export default AddProjectModal;
