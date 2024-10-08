

// import { MagnifyingGlassIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { Avatar, Button, Input, Menu, MenuHandler, MenuList, MenuItem, Typography, Badge, IconButton } from '@material-tailwind/react'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
// import { auth, db } from '../firebase'; // Import Firebase auth and db

// const Navbar = () => {
//   const [displayName, setDisplayName] = useState('Admin'); // Initialize state for displayName
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const user = auth.currentUser; // Get current user
//         if (user) {
//           const docRef = doc(db, 'users', user.uid); // Reference to user's document
//           const docSnap = await getDoc(docRef); // Fetch the document

//           if (docSnap.exists()) {
//             setDisplayName(docSnap.data().displayName); // Set displayName from Firestore
//           } else {
//             console.log('No such document!');
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

//   const profileMenuItems = [
//     {
//       label: displayName,
//       icon: UserCircleIcon,
//       href: "src/Pages/Settings.jsx"
//     },
//     {
//       label: 'Sign Out',
//       link: "/",
//       icon: PowerIcon,
//       href: "#"
//     },
//   ];

//   // Close Menu function
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   }

//   // Sign Out handler
//   const handleSignOut = () => {
//     navigate("/"); // Redirect to the home page
//     closeMenu(); // Close the menu after signing out
//   }

//   return (
//     <nav className='bg-gray-200 px-4 py-3 relative flex justify-between h-[calc(4rem)] w-full rounded-xl'>
//       <div className='flex '>
//         <div className='flex space-x-1.5'>
//           <MagnifyingGlassIcon className='h-5 w-5 my-4 ' />
//           <Input variant='static' label='' className='w-80' placeholder='Search' />
//         </div>

//         <div className='flex space-x-0.5 absolute right-0'>
//           {/* Other Icons */}
//           <div className='py-2 '>
//             <Badge>
//               <IconButton size='sm' color='white'>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
//                 </svg>
//               </IconButton>
//             </Badge>
//           </div>

//           <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
//             <MenuHandler>
//               {/* Navbar Profile */}
//               <Button 
//                 variant='text'
//                 color='blue-gray'
//                 className='flex items-center'>
//                 <div className='flex space-x-1'>
//                   <Avatar 
//                     variant='circular'
//                     size='xs'
//                     alt='Profile Picture'
//                     withBorder={true}
//                     color='blue-gray'
//                     className='absolute-right'
//                     src='https://docs.material-tailwind.com/img/face-2.jpg'
//                   />
//                   <Typography variant='h8'>{displayName}</Typography>
//                 </div>
//               </Button>
//             </MenuHandler>

//             <MenuList className='p-1'>
//               {profileMenuItems.map(({ label, icon }, key) => {
//                 const isLastItem = key === profileMenuItems.length - 1;
//                 return (
//                   <MenuItem
//                     key={label}
//                     onClick={isLastItem ? handleSignOut : closeMenu} // Sign out for the last item
//                     className={`flex items-center gap-2 rounded ${
//                       isLastItem
//                         ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
//                         : ""
//                     }`}
//                   >
//                     {React.createElement(icon, {
//                       className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
//                       strokeWidth: 2,
//                     })}
//                     <Typography
//                       as="span"
//                       variant="small"
//                       className="font-normal"
//                       color={isLastItem ? "red" : "inherit"}
//                     >
//                       {label}
//                     </Typography>
//                   </MenuItem>
//                 );
//               })}
//             </MenuList>

//           </Menu>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;



// NEW CODE
import { MagnifyingGlassIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Avatar, Button, Input, Menu, MenuHandler, MenuList, MenuItem, Typography, Badge, IconButton } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const Navbar = () => {
  const [displayName, setDisplayName] = useState(null); // Initialize as null
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Use onAuthStateChanged to check for auth state changes
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setDisplayName(docSnap.data().displayName);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setDisplayName('Admin'); // Set to Admin or an appropriate default if no user is logged in
      }
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  const profileMenuItems = [
    {
      label: displayName || 'Admin',
      icon: UserCircleIcon,
      href: "src/Pages/Settings.jsx"
    },
    {
      label: 'Sign Out',
      link: "/",
      icon: PowerIcon,
      href: "#"
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
    closeMenu();
  };

  return (
    <nav className='bg-gray-200 px-4 py-3 relative flex justify-between h-[calc(4rem)] w-full rounded-xl'>
      <div className='flex'>
        <div className='flex space-x-1.5'>
          <MagnifyingGlassIcon className='h-5 w-5 my-4 ' />
          <Input variant='static' label='' className='w-80' placeholder='Search' />
        </div>

        <div className='flex space-x-0.5 absolute right-0'>
          <div className='py-2 '>
            <Badge>
              <IconButton size='sm' color='white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>
              </IconButton>
            </Badge>
          </div>

          <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
            <MenuHandler>
              <Button 
                variant='text'
                color='blue-gray'
                className='flex items-center'>
                <div className='flex space-x-1'>
                  <Avatar 
                    variant='circular'
                    size='xs'
                    alt='Profile Picture'
                    withBorder={true}
                    color='blue-gray'
                    className='absolute-right'
                    src='https://docs.material-tailwind.com/img/face-2.jpg'
                  />
                  <Typography variant='h8'>{displayName || "Admin"}</Typography>
                </div>
              </Button>
            </MenuHandler>

            <MenuList className='p-1'>
              {profileMenuItems.map(({ label, icon }, key) => {
                const isLastItem = key === profileMenuItems.length - 1;
                return (
                  <MenuItem
                    key={label}
                    onClick={isLastItem ? handleSignOut : closeMenu}
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
  );
}

export default Navbar;
