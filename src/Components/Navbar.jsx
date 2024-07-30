// import { MagnifyingGlassIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/16/solid'
// import { Avatar, Button, Input, Menu, MenuHandler, MenuList, Typography } from '@material-tailwind/react'
// import React, { useState } from 'react'

// const Navbar = () => {

//   const profileMenuItems =[
//     {
//       label: 'Admin',
//       icon: UserCircleIcon,
//       href: "settings"
//     },
//     {
//       label: 'Sign Out',
//       icon: PowerIcon,
//       href: "#"
//     },
//   ]

//   const [isMenuOpen, setIsMenuOpen] =useState(false);

//   // Close Menu function
//   const closeMenu = () => {
//     setIsMenuOpen(false)
//   }


//   return (
//     <nav className='bg-gray-300 px-4 py-3 relative flex justify-between h-[calc(4rem)] w-full rounded-xl'>

//       <div className='flex '>

//         <div className='flex space-x-1.5'>
//           <MagnifyingGlassIcon className='h-5 w-5 my-4 ' color=''/>
//           <Input variant='static' label='' className='w-80' />
//         </div>

//         <div className='absolute right-0'>
//           <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>

//             <MenuHandler>

//               {/* Navbar Profile */}
//               <Button 
//               variant='text'
//               color='blue-gray'
//               className='flex items-center'>
                
//                 <div className='flex space-x-1'>

//                   <Avatar 
//                   variant='circular'
//                   size='xs'
//                   alt='tania andrew'
//                   withBorder={true}
//                   color='blue-gray'
//                   className='absolute-right '
//                   src='https://docs.material-tailwind.com/img/face-2.jpg'
//                   />

//                   <Typography variant='h8'>Admin</Typography>

//                 </div>
              

//               </Button>

//             </MenuHandler>

//             <MenuList className='p-1'>
              

//             </MenuList>
            
//           </Menu>
//         </div>

//       </div>
//     </nav>
//   )
// }

// export default Navbar



import { MagnifyingGlassIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Avatar, Button, Input, Menu, MenuHandler, MenuList, MenuItem, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'

const Navbar = () => {
  const profileMenuItems = [
    {
      label: 'Admin',
      icon: UserCircleIcon,
      href: "settings"
    },
    {
      label: 'Sign Out',
      icon: PowerIcon,
      href: "#"
    },
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close Menu function
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='bg-gray-200 px-4 py-3 relative flex justify-between h-[calc(4rem)] w-full rounded-xl'>

      <div className='flex '>

        <div className='flex space-x-1.5'>
          <MagnifyingGlassIcon className='h-5 w-5 my-4 ' />
          <Input variant='static' label='' className='w-80' placeholder='Search' />
        </div>

        <div className='absolute right-0'>
          <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>

            <MenuHandler>

              {/* Navbar Profile */}
              <Button 
                variant='text'
                color='blue-gray'
                className='flex items-center'>
                
                <div className='flex space-x-1'>

                  <Avatar 
                    variant='circular'
                    size='xs'
                    alt='tania andrew'
                    withBorder={true}
                    color='blue-gray'
                    className='absolute-right'
                    src='https://docs.material-tailwind.com/img/face-2.jpg'
                  />

                  <Typography variant='h8'>Admin</Typography>

                </div>
              </Button>

            </MenuHandler>

            <MenuList className='p-1'>
              {profileMenuItems.map(({ label, icon }, key) => {
                const isLastItem = key === profileMenuItems.length - 1;
                return (
                  <MenuItem
                    key={label}
                    onClick={closeMenu}
                    className={`flex items-center gap-2 rounded ${
                      isLastItem
                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                        : ""
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      strokeWidth: 2,
                    })}
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                      color={isLastItem ? "red" : "inherit"}
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>

          </Menu>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;


