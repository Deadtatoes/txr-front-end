import { Totaltask } from "../Components/Totaltask"

export const Home = () => {
  

  return (
    <div>

         <div className='py-5 space-y-1'>

            {/* TOTAL TASKS Table heading */}
            <h2 className='mx-4 text-xl '>Total Tasks</h2>
            <div className="max-w-md">
              <Totaltask isReportPage={false} />
            </div>
         </div>


    </div>
  )
}
