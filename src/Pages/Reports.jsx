import { Link } from "react-router-dom"
import { Totaltask } from "../Components/Totaltask"

export const Reports = () => {
  return (
    <div className="space-y-14">
      <h3>Reports page</h3>

      

      <div className="max-w-m p-5 m-5 shadow-custom rounded space-y-5">
        <span className="underline text-xl"> Task Database</span>
        <Link to="/jobs" className="block w-full text-blue-600 hover:text-grey-600 transition-colors" >Add entry to database</Link> 

        <Totaltask isReportPage={true}/>
      </div>


      <div>
        <Link to="/jobs">
          <span className="underline hover:bg-sky-700">Add entry into database</span>
        </Link>
      </div>

    </div>
  )
}
