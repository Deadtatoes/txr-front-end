import { DataGrid } from "@mui/x-data-grid";
import { taskColumns, taskRows } from "../TaskTableSource";


const TaskTable = () => {


  const handleDelete = () => {
    console.log("delete doc")
  }
     

      const actionColumn = [
        {field: "action", headerName: "Action", width: 200, 
          renderCell: (params) => {
            return(
              <div id="cellAction" className="flex items-center gap-4">
    
                <div id="viewButton" 
                  className="mt-3 py-1 px-3 text-xs rounded-2xl text-blue-800 border-2 border-blue-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer m-1">
                    View
                </div>
    
                <div id="deleteButton" 
                  onClick={() => handleDelete(params.row.id)} 
                  className="mt-3 py-1 px-3 text-xs rounded-2xl text-blue-800 border-2 border-blue-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer m-1">
                    Delete
                </div>
    
              </div>
            )
        }}
      ]
      

  return (
    <div>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={taskRows}
            columns={taskColumns.concat(actionColumn)}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ overflow: 'clip' }}
            />
        </div>
    </div>
  )
}

export default TaskTable