

import { ChevronDownIcon, CogIcon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div id='featured' className="w-full md:w-58 shadow-custom p-4 rounded-lg">

        <div id="top" className="flex items-center justify-between text-gray-600">
            <h1 id="title" className="text-lg font-semibold">Total Jobs</h1>
            <div id="icon">
                <EllipsisVerticalIcon className="w-6 h-6"/>
            </div>
        </div>

        <div id="bottom" className="flex flex-col items-center justify-center gap-4 mt-4">

            {/* Circular Chart */}
            <div id="featuredChart" className="w-24 h-24 md:w-32 md:h-32">
                <CircularProgressbar value={30} text="30%" strokeWidth={5}/>
            </div>

            <p id="title" className="text-base md:text-lg font-medium">Total tasks done today</p>
            <p id="amount" className="text-3xl font-bold">3</p>
            <p id="desc" className="text-xs text-center text-gray-500">Previous jobs processing. Last jobs may not be included within the chart</p>

            <div id="summary" className="flex flex-col md:flex-row items-center justify-between w-full text-center gap-4 mt-4">

                <div id="targets" className="flex flex-col md:flex-row items-center justify-between w-full gap-4 text-sm text-gray-600">
                    <div id="item" className="flex flex-col items-center">
                        <div id="itemTitle" className="font-medium">Today</div>
                        <div id="ItemResult" className="flex items-center mt-2">
                            <CogIcon className="w-5 h-5 text-gray-500 mr-1"/>
                            <div id="resultAmount" className="text-base font-semibold">-</div>
                        </div>
                    </div>

                    <div id="item" className="flex flex-col items-center">
                        <div id="itemTitle" className="font-medium">Last Week</div>
                        <div id="ItemResult" className="flex items-center mt-2">
                            <CogIcon className="w-5 h-5 text-gray-500 mr-1"/>
                            <div id="resultAmount" className="text-base font-semibold">4</div>
                        </div>
                    </div>

                    <div id="item" className="flex flex-col items-center">
                        <div id="itemTitle" className="font-medium">Last Month</div>
                        <div id="ItemResult" className="flex items-center mt-2">
                            <CogIcon className="w-5 h-5 text-gray-500 mr-1"/>
                            <div id="resultAmount" className="text-base font-semibold">11</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Featured;
