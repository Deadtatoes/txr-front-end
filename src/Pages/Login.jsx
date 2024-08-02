
// import {  signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { Card, Input, Button, Typography } from "@material-tailwind/react";
// import { useState } from "react";

// const Login = () => {
//     const [error, setError] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");  

//     const handleLogin = async (e) => {
//         e.preventDefault();// Ensure getAuth is called correctly here

//         await signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//         })
//         .catch((error) => {
//             console.log(error)
//         });
//     };

//     return (
//         <form onSubmit={handleLogin} className="flex items-center justify-center min-h-screen bg-gray-200">
//             <Card color="transparent" shadow={false} className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
//                 <Typography variant="h4" color="blue-gray" className="text-center mb-6">
//                     Sign Up
//                 </Typography>
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
//             </Card>
//         </form>
//     );
// };

// export default Login;



import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
            navigate("/home"); // Redirect to Home page after successful login
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    return (
        <form onSubmit={handleLogin} className="flex items-center justify-center min-h-screen bg-gray-200">
            <Card color="transparent" shadow={false} className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <Typography variant="h4" color="blue-gray" className="text-center mb-6">
                    Sign In
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
                    Sign In
                </Button>
                {error && <Typography color="red" className="mt-4 text-center font-normal">Wrong email or Password</Typography>}
            </Card>
        </form>
    );
};

export default Login;
