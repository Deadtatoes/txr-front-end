// import { DataGrid  } from "@mui/x-data-grid"
// import {  userColumns,  } from "../UserTableSource";
// import { useEffect, useState } from "react";
// import { collection, deleteDoc, doc, onSnapshot  } from "firebase/firestore";
// import {  db } from "../firebase";

// // Removed userRows from UserTableSource ln2
// // Removed getDocs from firebase/firestore ln4



// const UserTable = () => {




//   // Deletion Function
//   const handleUserDelete = async(id) => {
//     try{
//       await deleteDoc(doc(db, "users", id));
//       setData(data.filter(item=>item.id !== id))

//     }catch(error){
//       console.log(error)
//     }
//   }

//   // FETCHING DATA AND DISPLAYING PERSONNEL
//   const [data, setData] = useState([])
//   useEffect(() => {
  
//     const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
//       let list = []
//       snapShot.docs.forEach(doc => {
//         list.push({id:doc.id, ...doc.data()})
//       })
//       setData(list)
//     }, 
//     (error) => {
//       console.log(error)
//     });

//     return() =>{
//       unsub()
//     }
//   },[])

//   const actionColumn = [
//     {field: "action", headerName: "Action", width: 200, 
//       renderCell: (params) => {
//         return(
//           <div id="cellAction" className="flex items-center gap-4">

//             <div id="viewButton" 
//               className="mt-3 py-1 px-3 text-xs rounded-2xl text-blue-800 border-2 border-blue-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer m-1">
//                 View
//             </div>

//             <div id="deleteButton" 
//               onClick={() => handleUserDelete(params.row.id)} 
//               className="mt-3 py-1 px-3 text-xs rounded-2xl text-blue-800 border-2 border-blue-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer m-1">
//                 Delete
//             </div>

//           </div>
//         )
//     }}
//   ]
//   return (
//     <div id='datatable' className="">
//         <div style={{width: "100%"}}>
//           <DataGrid
//             rows={data}
//             columns={userColumns.concat(actionColumn)}
//             initialState={{
//               pagination: {
//                 paginationModel: { page: 0, pageSize: 5 },
//               },
//             }}
//             pageSizeOptions={[5, 10]}
//             checkboxSelection
//           />
//         </div>
    
//     </div>
//   )
// }

// export default UserTable


// NEW CODE
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../UserTableSource";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import UserEditForm from "./UserEditForm";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // Deletion Function
  const handleUserDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserView = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setSelectedUser(null);
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
              onClick={() => handleUserView(params.row)}
              className="mt-3 py-1 px-3 text-xs rounded-2xl text-blue-800 border-2 border-blue-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer m-1"
            >
              View
            </div>

            <div
              id="deleteButton"
              onClick={() => handleUserDelete(params.row.id)}
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
    <div id="datatable" className="">
      <div style={{ width: "100%" }}>
        <DataGrid
          rows={data}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>

      {selectedUser && (
        <UserEditForm
          open={openDialog}
          handleClose={handleDialogClose}
          userData={selectedUser}
        />
      )}
    </div>
  );
};

export default UserTable;
