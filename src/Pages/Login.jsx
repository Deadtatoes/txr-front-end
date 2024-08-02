
//  ||||| TAKE 1


// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
// import { Card, Input, Button, Typography } from "@material-tailwind/react"
// import { useState } from "react"
// import { auth } from "../firebase.js"

// const Login = () => {

//     const [error, setError] = useState(false)
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")  

    

//     const handleLogin = (e) => {
//         console.log("function working")
//         e.preventDefault()

//         // const auth = getAuth();
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user)
//         })
//         .catch((error) => {
//            setError(true);
//         });

//     }

//     return (
//         <form onClick={handleLogin} className="flex items-center justify-center min-h-screen bg-gray-200">
//             <Card color="transparent" shadow={false} className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
//                 <Typography variant="h4" color="blue-gray" className="text-center mb-6">
//                 Sign Up
//                 </Typography>
//                 <Typography color="gray" className="text-center mb-8 font-normal">
//                 </Typography>
//                 <form className="flex flex-col gap-6">

//                 <div className="mb-4">
//                     <Typography variant="h6" color="blue-gray" className="mb-2">
//                     Your Email
//                     </Typography>
//                     <Input
//                     size="lg"
//                     placeholder="name@mail.com"
//                     className="!border-t-blue-gray-200 focus:!border-t-gray-900"
//                     onChange={e => setEmail(e.target.value)}
//                     labelProps={{
//                         className: "before:content-none after:content-none",
//                     }}
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <Typography variant="h6" color="blue-gray" className="mb-2">
//                     Password
//                     </Typography>
//                     <Input
//                     type="password"
//                     size="lg"
//                     placeholder="********"
//                     className="!border-t-blue-gray-200 focus:!border-t-gray-900"
//                     onChange={e => setPassword(e.target.value)}
//                     labelProps={{
//                         className: "before:content-none after:content-none",
//                     }}
//                     />
//                 </div>
                
//                 <Button className="mt-6" fullWidth type="submit">
//                     Sign up
//                 </Button>
//                 { error && <Typography color="red" className="mt-4 text-center font-normal">Wrong email or Password</Typography> }
//                 </form>
//             </Card>
//         </form>
//     )
// }

// export default Login




// // ||||| TAKE 2 
// import {  Button  } from "@material-tailwind/react"
// import { useState } from "react" 
// import { createUserWithEmailAndPassword } from "firebase/auth"

// const Login = () => {

//     const [error, setError] = useState(false)  
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")  

//     const handleLogin = (e) => {
//         console.log("function working")
//         e.preventDefault()

//         const auth = getAuth();
//         createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user)
//         })
//         .catch((error) => {
//            setError(true);
//         });

//     }

//     return (
       
//         <div id="login" className="p-5 m-5 shadow-custom  items-center" style={{width: "700px", height: "200px"}}>

//             <form onClick={handleLogin}>
//                 <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
//                 <input type="password" placeholder="password"  onChange={e=>setPassword(e.target.value)}/>
//                 <Button type="submit" className="block m-6">Login</Button>
//                 {error && <span>Wrong email or password</span>}

//             </form>

//         </div>


//     )
// }

// export default Login




// ||||| Take 3
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// const Login = () => {
//   const [error, setError] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

  

//   const handleLogin = (e) => {
//     e.preventDefault();

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log(user)
//       })
//       .catch((error) => {
//         setError(true);
//       });
//   };

//   return (
//     <div className="login">
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="password"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         {error && <span>Wrong email or password!</span>}
//       </form>
//     </div>
//   );
// };

// export default Login;




// ||| TAKE 4
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  

    const handleLogin = (e) => {
        e.preventDefault();
        
        const auth = getAuth(); // Ensure getAuth is called correctly here

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            setError(true);
        });
    };

    return (
        <form onSubmit={handleLogin} className="flex items-center justify-center min-h-screen bg-gray-200">
            <Card color="transparent" shadow={false} className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <Typography variant="h4" color="blue-gray" className="text-center mb-6">
                    Sign Up
                </Typography>
                    <div className="mb-4">
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <Button className="mt-6" fullWidth type="submit">
                        Sign up
                    </Button>
                    {error && <Typography color="red" className="mt-4 text-center font-normal">Wrong email or Password</Typography>}
            </Card>
        </form>
    );
};

export default Login;



//  || TAKE 5
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { Card, Input, Button, Typography } from "@material-tailwind/react";
// import { useState } from "react";
// import { auth } from "../firebase.js"; // Ensure this import is correct

// const Login = () => {
//     const [error, setError] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");  

//     const handleLogin = (e) => {
//         e.preventDefault();

//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log(user);
//         })
//         .catch((error) => {
//             setError(true);
//         });
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-200">
//             <Card color="transparent" shadow={false} className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
//                 <Typography variant="h4" color="blue-gray" className="text-center mb-6">
//                     Sign Up
//                 </Typography>
//                 <form onSubmit={handleLogin} className="flex flex-col gap-6">
//                     <div className="mb-4">
//                         <Typography variant="h6" color="blue-gray" className="mb-2">
//                             Your Email
//                         </Typography>
//                         <Input
//                             size="lg"
//                             placeholder="name@mail.com"
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <Typography variant="h6" color="blue-gray" className="mb-2">
//                             Password
//                         </Typography>
//                         <Input
//                             type="password"
//                             size="lg"
//                             placeholder="********"
//                             onChange={e => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <Button className="mt-6" fullWidth type="submit">
//                         Sign up
//                     </Button>
//                     {error && <Typography color="red" className="mt-4 text-center font-normal">Wrong email or Password</Typography>}
//                 </form>
//             </Card>
//         </div>
//     );
// };

// export default Login;


