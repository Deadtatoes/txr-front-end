// import TaskTable from "../Components/TaskTable";
// import Chart from "../Components/Widgets/Chart";
// import Featured from "../Components/Widgets/Featured";
// import Floatingcard from '../Components/Widgets/Floatingcard';
// import { Link } from "react-router-dom";




// export const Home = () => {
  

//   return (
//     <div>
      
//          <div className='py-5 space-y-20'>

//             {/* FLOATING CARDS */}
//             <div className="flex">

//               <Link to={"/reports"}>
//               <Floatingcard type='user'id='user'/>
//               </Link>

//               {/* <Link>
//                 <Floatingcard type='order'id='order'/>
//               </Link> */}
              
//               <Link>
//                 <Floatingcard type='earning'id='earning'/>
//               </Link>
//             </div>
            
//             {/* CHARTS AND FEATURES */}
//             <div id="charts & features" className="flex space-x-10">
             
//              {/* Features */}
//               <div className="">
//                 <Featured />
//               </div>

//               {/* Chart */}
//               <div className="flex-2">
//                 <Chart />
//               </div>
              
//             </div>

//             <div className="p-5 m-5 shadow-custom" >

//               <div id="listContainer">
//                 <div id="listTitle" style={{fontWeight: "500", color:"gray"}} className="mb-3.5 font-bold">Latest Tasks </div>

//                   {/* LATEST TASKS TABLE*/}
//                   <div className="">
//                     {/* <Totaltask isReportPage={true} /> */}
//                     <TaskTable />
//                   </div>
//               </div>

//             </div>
                        
//          </div>


//     </div>
//   )
// }


import TaskTable from "../Components/TaskTable";
import Chart from "../Components/Widgets/Chart";
import Featured from "../Components/Widgets/Featured";
import Floatingcard from '../Components/Widgets/Floatingcard';
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <div className='py-5 space-y-20'>
                {/* FLOATING CARDS */}
                <div className="flex flex-wrap gap-28 justify-center">
                    <Link to={"/reports"}>
                        <Floatingcard type='user' id='user'/>
                    </Link>
                    {/* <Link>
                        <Floatingcard type='order' id='order'/>
                    </Link> */}
                    <Link to={"/reports"}>
                        <Floatingcard type='earning' id='earning'/>
                    </Link>
                </div>
                
                {/* CHARTS AND FEATURES */}
                <div id="charts & features" className="flex flex-col md:flex-row gap-10">
                    {/* Features */}
                    <div className="flex-1">
                        <Featured />
                    </div>

                    {/* Chart */}
                    <div className="flex-2">
                        <Chart />
                    </div>
                </div>

                <div className="p-5 m-5 shadow-custom">
                    <div id="listContainer">
                        <div id="listTitle" style={{fontWeight: "500", color:"gray"}} className="mb-3.5 font-bold">
                            Latest Tasks
                        </div>
                        {/* LATEST TASKS TABLE */}
                        <div>
                            <TaskTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
