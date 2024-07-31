// import { Card, Typography } from '@material-tailwind/react'

// export const Totaltask = () => {

//     const TABLE_HEAD = ["Name", "ID", "JobType","Created", "Updated", "TraceID"]
  
//     const TABLE_ROWS =[
//       {
//         name: 'Fees Alert',
//         id: 3945492,
//         jobtype: 'Mail',
//         created: '23/04/18',
//         updated: '24/12/08',
//         TraceID: 'dd4hu2903'
//       }
//     ]
  

//   return (
//     <div className='max-w-96'>
//          <Card>

//             <table>

//                 <thead>
//                     <tr>
//                     {TABLE_HEAD.map((head) => (
//                         <th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>

//                         <Typography 
//                         variant='small'
//                         color='blue-gray'
//                         className='font-normal leading-none opacity-70'>
//                             {head}
//                         </Typography>

//                         </th>
//                     ))}
//                     </tr>
//                 </thead>


//                 <tbody>
//                     {TABLE_ROWS.map(({ name, id, jobtype }, index) => {
//                         const isLast = index === TABLE_ROWS.length - 1;
//                         const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            
//                         return (
//                         <tr key={name}>
//                             <td className={classes}>
//                             <Typography variant="small" color="blue-gray" className="font-normal">
//                                 {name}
//                             </Typography>
//                             </td>

//                             <td className={`${classes} bg-blue-gray-50/50`}>
//                             <Typography variant="small" color="blue-gray" className="font-normal">
//                                 {id}
//                             </Typography>
//                             </td>

//                             <td className={classes}>
//                             <Typography variant="small" color="blue-gray" className="font-normal">
//                                 {jobtype}
//                             </Typography>
//                             </td>
                            
//                             <td className={classes}>
//                             <Typography variant="small" color="blue-gray" className="font-normal">
//                                 {}
//                             </Typography>
//                             </td>
//                         </tr>
//                         );
//                     })}
//                 </tbody>

//             </table>

//         </Card>
        
//     </div>
//   )
// }


import { Card, Typography } from '@material-tailwind/react'

export const Totaltask = ({ isReportPage }) => {

    const HOME_TABLE_HEAD = ["Name", "ID", "JobType"]
    const REPORT_TABLE_HEAD = ["Name", "ID", "JobType", "Created", "Updated", "TraceID"]

    const HOME_TABLE_ROWS = [
        {
            name: 'Anaella Alert',
            id: 3945492,
            jobtype: 'Mail'
        }
    ]
    const REPORT_TABLE_ROWS = [
        {
            name: 'Fees Alert',
            id: 3945492,
            jobtype: 'Mail',
            created: '23/04/18',
            updated: '24/12/08',
            traceID: 'dd4hu2903'
        }
    ]

    const TABLE_HEAD = isReportPage ? REPORT_TABLE_HEAD : HOME_TABLE_HEAD
    const TABLE_ROWS = isReportPage ? REPORT_TABLE_ROWS : HOME_TABLE_ROWS

    return (
        <div className=''>
            <Card className='h-full w-full overflow-scroll'>
                <table className='w-full min-w-max table-auto text-left'>
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                                    <Typography
                                        variant='small'
                                        color='blue-gray'
                                        className='font-normal leading-none opacity-70'>
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {TABLE_ROWS.map((row, index) => (
                            <tr key={row.id} className=''>
                                {TABLE_HEAD.includes("Name") && (
                                    <td className='p-4 bg-gray-100'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>{row.name}</Typography>
                                    </td>
                                )}
                                {TABLE_HEAD.includes("ID") && (
                                    <td className='p-4 bg-gray-200'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>{row.id}</Typography>
                                    </td>
                                )}
                                {TABLE_HEAD.includes("JobType") && (
                                    <td className='p-4 bg-gray-100'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>{row.jobtype}</Typography>
                                    </td>
                                )}
                                {TABLE_HEAD.includes("Created") && (
                                    <td className='p-4 bg-gray-200'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>{row.created}</Typography>
                                    </td>
                                )}
                                {TABLE_HEAD.includes("Updated") && (
                                    <td className='p-4 bg-gray-100'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>{row.updated}</Typography>
                                    </td>
                                )}
                                {TABLE_HEAD.includes("TraceID") && (
                                    <td className='p-4 bg-gray-200'>
                                        <Typography variant='small' color='blue-gray' className='font-normal'>{row.traceID}</Typography>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    )
}
