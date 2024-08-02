import { Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react'
import { BookOpenIcon, CircleStackIcon, Cog6ToothIcon, FireIcon, PresentationChartBarIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
        <div className='h-full'>
            <Card className="h-[calc(100vh)] w-full max-w-[20rem]  p-4 shadow-xl shadow-blue-gray-900/5 b">

            {/* App Name */}
                <div className='flex mb -2 p-4 space-x-3' >
                    <Link to="/" className='flex'>
                        <FireIcon className='h-9  w-5'/>
                        <Typography variant='h4' color='blue-gray'>TXR</Typography>
                    </Link>
                   
                </div>
                <hr />

                {/* List in SideBar */}
                <List>
                    
                    <a href='/'>
                    <ListItem id=''>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                    </a>
                    

                    <a href='/jobs'>
                    <ListItem>
                        <ListItemPrefix>
                            <CircleStackIcon className='h-5 w-5'/>
                        </ListItemPrefix>
                        Jobs
                    </ListItem>
                    </a>
                    
                    <a href='/reports'>
                    <ListItem>
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Reports
                    </ListItem>
                    </a>
                    


                    
                    {/* <a href='/applications'>
                        <ListItem>
                        
                            <ListItemPrefix>
                                <BookOpenIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Users
                        </ListItem>
                    </a> */}
                    

                    <hr className='h-2 bg-grey 950'/>

                    <a href='/settings'>
                        <ListItem >
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Settings
                        </ListItem>
                    </a>
                
                </List>

            </Card>
        </div>
  )
}

export default Sidebar