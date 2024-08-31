import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { Button, Menu, MenuHandler, MenuList, MenuItem, Typography } from "@material-tailwind/react"
import { useState, useEffect } from "react"
import TaskList from "../Components/TaskList"


export const Applications = () => {


  const menuItems = [
    {
      title: "Send emails",
      link: "#email",
      description:
        "Send emails to a person or group of people",
      
    },
    {
      title: "Add New tasks",
      link: "#task",
      description:
        "Create a task list and assign priorities to them",
    },
    {
      title: "Add Personnel Data",
      link: "/jobs",
      description:
        "Include data of persons into database.",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false)
  const [selectedForm, setSelectedForm] = useState(null)


  // DISPLAYING FORMS BY CLICKS
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setSelectedForm(hash);
    };
  
    handleHashChange();
  
    // Add event listener
    window.addEventListener("hashchange", handleHashChange);
  
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  

  return (
    <div>
      <div className="max-w-m p-5 m-5 shadow-custom rounded space-y-5">
        <h3>Add new task</h3>
      </div>

      <div className="max-w-m p-5 m-5 shadow-custom rounded space-y-5">


        {/* Menu */}
        <div className="">
          
          <Menu open={openMenu} handler={setOpenMenu} allowHover>
            <MenuHandler>
              <Button variant="text" 
                className="flex items-center gap-3 text-base font-normal capitalize tracking-normal" 
                >
                  Create new task
                  <ChevronDownIcon strokeWidth={2.5} 
                  className={'h-3.5 w-3.5 transition-transform ${ openMenu ? "rotate-180" : "" }'}/>
                  
              </Button>

            </MenuHandler>

            <MenuList>

              <ul className="col-span-4 flex w-full flex-col gap-1">
                {menuItems.map(({title, description, link}) =>(
                  <a href={link} key={title}>
                    <MenuItem>

                      <Typography variant="h6" color="blue-gray" className="mb-1">
                        {title}
                      </Typography>
                  
                      <Typography variant="small" color="gray" className="font-normal">
                        {description}
                      </Typography>

                    </MenuItem>
                  </a>
                ))}
              </ul>
            </MenuList>

          </Menu>
          
        </div>


        {/* Selection */}
        <div>
          <TaskList />
          {selectedForm === "#email" &&(
            <TaskList formType= "email" />
          )}
          {selectedForm === "#task" &&(
            <TaskList formType= "task" />
          )}
          
        </div>
        
      </div>



    </div>
    
  )
}
