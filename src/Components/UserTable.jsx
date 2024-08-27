import { DataGrid  } from "@mui/x-data-grid"
import {  userColumns } from "../UserTableSource";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot  } from "firebase/firestore";
import {  db } from "../firebase";

// Removed userRows from UserTableSource ln2
// Removed getDocs from firebase/firestore ln4



const UserTable = () => {




  // Deletion Function
  const handleDelete = async(id) => {
    try{
      await deleteDoc(doc(db, "users", id));
      setData(data.filter(item=>item.id !== id))

    }catch(error){
      console.log(error)
    }
  }

  // FETCHING DATA AND DISPLAYING PERSONNEL
  const [data, setData] = useState([])
  useEffect(() => {
    // const fetchData = async () =>{

    //   let list = []

    //   try{
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       list.push({id: doc.id, ...doc.data()})
    //       console.log(doc.id, " => ", doc.data());
    //     });
    //     setData(list)
    //     console.log(list)
    //   }catch(error){
    //     console.log(Error)
    //   }
      
    // }
    // fetchData()
    
    const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
      let list = []
      snapShot.docs.forEach(doc => {
        list.push({id:doc.id, ...doc.data()})
      })
      setData(list)
    }, 
    (error) => {
      console.log(error)
    });

    return() =>{
      unsub()
    }
  },[])

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
    <div id='datatable' className="">
        <div style={{width: "100%"}}>
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
    
    </div>
  )
}

export default UserTable