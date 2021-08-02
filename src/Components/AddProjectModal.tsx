import { TextField } from "@material-ui/core";
import { useState } from "react";
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
    <Dialog
      open={isOpenModal}
      onClose={setIsOpenModal}
      size={DialogSize.Large}
    >
      <form>
        <p>
          Project title: <TextField onChange={(e) => setProject({...project, title: e.target.value})} autoComplete="off" id="standard-basic" label="Project title" />
        </p>
        <p>Started: <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue={new Date()}
    InputLabelProps={{
      shrink: true,
    }}
  /></p>
      </form>
      <button onClick={() => setIsOpenModal(false)}>Close</button>
    </Dialog>
  );
};
export default AddProjectModal;
