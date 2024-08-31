import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";





const TaskEditForm = ({open, handleClose, taskData}) => {
  const [task, setTask] = useState(taskData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const taskDoc = doc(db, "tasks", task.id);
      await updateDoc(taskDoc, {
        ...task,
      });
      handleClose(); 
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Task</DialogTitle>

          <DialogContent>
            <TextField
              margin="dense"
              name="name"
              label="Task Name"
              type="text"
              fullWidth
              variant="outlined"
              value={task.name || ""}
              onChange={handleChange}
            />

            <TextField
              margin="dense"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="outlined"
              value={task.description || ""}
              onChange={handleChange}
            />

            <TextField
              margin="dense"
              name="jobtype"
              label="Job Type"
              type="text"
              fullWidth
              variant="outlined"
              value={task.jobtype || ""}
              onChange={handleChange}
            />
        </DialogContent>

        <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleUpdate} color="primary">
              Save
            </Button>
        </DialogActions>

      </Dialog>

    </div>
  )
}

export default TaskEditForm