import  { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";


const UserEditForm = ({ open, handleClose, userData }) => {

    const [user, setUser] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const userDoc = doc(db, "users", user.id);
      await updateDoc(userDoc, {
        ...user,
      });
      handleClose(); // Close the dialog after updating
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>

        <Dialog open={open} onClose={handleClose}>

            <DialogTitle>Edit User</DialogTitle>

            <DialogContent>
                <TextField
                margin="dense"
                name="displayName"
                label="Name"
                type="text"
                fullWidth
                variant="outlined"
                value={user.displayName || ""}
                onChange={handleChange}
                />

                

                <TextField
                margin="dense"
                name="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={user.email || ""}
                onChange={handleChange}
                />

                {/* Add other fields as needed */}
                
                <TextField
                margin="dense"
                name="phoneNumber"
                label="Phone Number"
                type="text"
                placeholder="+233 11 111 1111"
                fullWidth
                variant="outlined"
                value={user.phoneNumber || ""}
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

export default UserEditForm