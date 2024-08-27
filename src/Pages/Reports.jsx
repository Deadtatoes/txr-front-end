import { Link } from "react-router-dom"
import { Totaltask } from "../Components/Totaltask"
import UserTable from "../Components/UserTable"

export const Reports = () => {
  return (
    <div className="space-y-14">
      <h3>Reports page</h3>

      

      <div className="max-w-m p-5 m-5 shadow-custom rounded space-y-5">
        <span className="underline text-xl"> Task Database</span>
        <Link to="/jobs" className="block w-full text-blue-600 hover:text-red-600 transition-colors" >Create new task</Link> 

        <Totaltask isReportPage={true}/>
      </div>


      <div>
        
      </div>

      <div className="max-w-m p-5 m-5 shadow-custom rounded space-y-5">
        <span className="underline text-xl"> Personnel Data</span>
        <Link to="/jobs" className="block w-full text-blue-600 hover:text-red-600 transition-colors">
          <span >Add entry into database</span>
        </Link>
        <UserTable />
      </div>



    </div>
  )
}
