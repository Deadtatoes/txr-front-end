

import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
   {name: "January", Total: 12 },
   {name: "February", Total: 21 },
   {name: "March", Total: 8 },
   {name: "April", Total: 14 },
   {name: "May", Total: 9 },
   {name: "June", Total: 3 },

];

const Chart = () => {
  console.log("Chart component rendered");  

  return (
    <div id="chart" className="h-96 w-full md:w-96 shadow-custom p-4 pb-6  rounded-lg " style={{height:"415px", width: "500px", color: "gray"}}> 

        <div id="title" style={{marginBottom: "0px"}}>Last 6 Months (Jobs)</div>

        <ResponsiveContainer width="100%" height="100%">

            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>

                <XAxis dataKey="name" color='gray'/>
                {/* <YAxis /> */}
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}

export default Chart;

