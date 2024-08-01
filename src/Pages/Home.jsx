import { Totaltask } from "../Components/Totaltask"
import  Floatingcard  from "../Components/Widgets/Floatingcard"

export const Home = () => {
  

  return (
    <div>

         <div className='py-5 space-y-1'>

            {/* Floating Cards */}
            <div className="flex">
              <Floatingcard />
              <Floatingcard />
              <Floatingcard />
              <Floatingcard />
            </div>
            

            {/* TOTAL TASKS Table heading */}
            <h2 className='mx-4 text-xl '>Total Tasks</h2>
            <div className="max-w-md">
              <Totaltask isReportPage={false} />
            </div>
         </div>


    </div>
  )
}
