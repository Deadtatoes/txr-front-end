
import { DataGrid } from "@mui/x-data-grid";
import { taskColumns } from "../TaskTableSource";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import TaskEditForm from "./TaskEditForm";

const TaskTable = () => {
  const [taskData, setTaskData] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "tasks"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setTaskData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // Deleting Task
  const handleTaskDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      setTaskData(taskData.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
    console.log("delete doc with id:", id);
  };

  const handleTaskView = (task) => {
    setSelectedTask(task);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedTask(null);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div id="cellAction" className="flex items-center gap-4">
            <div
              id="viewButton"
              onClick={() => handleTaskView(params.row)}
              className="mt-3 py-1 px-3 text-xs rounded-2xl text-blue-800 border-2 border-blue-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer m-1"
            >
              View
            </div>

            <div
              id="deleteButton"
              onClick={() => handleTaskDelete(params.row.id)}
              className="mt-3 py-1 px-3 text-xs rounded-2xl text-blue-800 border-2 border-blue-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer m-1"
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={taskData}
          columns={taskColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ overflow: "clip" }}
        />
      </div>

      {selectedTask && (
        <TaskEditForm
          open={openDialog}
          handleClose={handleDialogClose}
          taskData={selectedTask}
        />
      )}
    </div>
  );
};

export default TaskTable;
