import { Totaltask } from "../Components/Totaltask"
import Chart from "../Components/Widgets/Chart";
import Featured from "../Components/Widgets/Featured";
import Floatingcard from '../Components/Widgets/Floatingcard';

export const Home = () => {
  

  return (
    <div>
      
         <div className='py-5 space-y-20'>

            {/* FLOATING CARDS */}
            <div className="flex">
              <Floatingcard type='user'id='user'/>
              <Floatingcard type='order'id='order'/>
              <Floatingcard type='earning'id='earning'/>
              <Floatingcard type='balance'id='balance'/>
            </div>
            
            {/* CHARTS AND FEATURES */}
            <div id="charts & features" className="flex space-x-10">
             
             {/* Features */}
              <div className="">
                <Featured />
              </div>

              {/* Chart */}
              <div className="flex-2">
                <Chart />
              </div>
              
            </div>

            <div className="p-5 m-5 shadow-custom" >

              <div id="listContainer">
                <div id="listTitle" style={{fontWeight: "500", color:"gray"}} className="mb-3.5 font-bold">Latest Tasks </div>

                  {/* LATEST TASKS TABLE*/}
                  <div className="">
                    <Totaltask isReportPage={true} />
                  </div>
              </div>

            </div>
                        
         </div>


    </div>
  )
}
