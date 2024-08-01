


import { Card, Typography } from '@material-tailwind/react'

export const Totaltask = ({ isReportPage }) => {

    const HOME_TABLE_HEAD = ["Name", "ID", "JobType"]
    const REPORT_TABLE_HEAD = ["Name", "ID", "JobType", "Created", "Updated", "TraceID"]

    const HOME_TABLE_ROWS = [
        {
            name: 'Fees Alert',
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
        },
        {
            name: 'Account Statement',
            id: 2748365,
            jobtype: 'Report',
            created: '22/01/15',
            updated: '23/05/22',
            traceID: 'af6gd9183'
        },
        {
            name: 'System Update',
            id: 4857693,
            jobtype: 'Notification',
            created: '22/03/25',
            updated: '22/07/14',
            traceID: 'b7jsk2809'
        },
        {
            name: 'Password Reset',
            id: 5647391,
            jobtype: 'Mail',
            created: '22/06/08',
            updated: '23/02/11',
            traceID: 'c8lqv9310'
        },
        {
            name: 'Invoice Reminder',
            id: 6789123,
            jobtype: 'Report',
            created: '22/08/19',
            updated: '23/03/09',
            traceID: 'd2mwp5406'
        },
        {
            name: 'Subscription Renewal',
            id: 7834652,
            jobtype: 'Notification',
            created: '22/11/30',
            updated: '23/01/25',
            traceID: 'e3nwr6712'
        },
        {
            name: 'Security Alert',
            id: 8925476,
            jobtype: 'Alert',
            created: '23/01/22',
            updated: '23/05/10',
            traceID: 'f4oxu7823'
        },
        {
            name: 'Account Update',
            id: 9032584,
            jobtype: 'Mail',
            created: '23/03/15',
            updated: '23/06/12',
            traceID: 'g5pyw8934'
        },
        {
            name: 'Monthly Summary',
            id: 1012345,
            jobtype: 'Report',
            created: '23/04/05',
            updated: '23/07/20',
            traceID: 'h6qzx9045'
        },
        {
            name: 'Payment Confirmation',
            id: 1123456,
            jobtype: 'Notification',
            created: '23/05/30',
            updated: '23/08/15',
            traceID: 'i7rly0156'
        },
        {
            name: 'Profile Update',
            id: 1234567,
            jobtype: 'Mail',
            created: '23/07/10',
            updated: '23/09/05',
            traceID: 'j8smz1267'
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
