import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Card, Input, Button, Typography, Dialog, CardBody, CardFooter } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../firebase";
import {  createUserWithEmailAndPassword } from "firebase/auth";



const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const navigate = useNavigate();

    // DIALOGUE BOX
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen((cur) => !cur);


    // LOGIN
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


    // SIGN UP 

    const [signUpData, setSignUpData] = useState({})

    const handleSignUpInput = (e) =>{
        const id = e.target.id
        const value = e.target.value

        setSignUpData({...signUpData, [id]: value})
        console.log("running")
    }
    console.log(signUpData, "running")


    const signUp = async(e) => {
        e.preventDefault()
        
        // LOGIC
        try{
            const signUpResponse = await createUserWithEmailAndPassword(
                auth, 
                signUpData.email,
                signUpData.password
            )
            await setDoc(doc(db, "users", signUpResponse.user.uid), {
                ...signUpData,
              });
              handleOpen()
              navigate("/home");
        }catch(error){
            console.log(error)
        }

    }

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
                        onChange={(e)=> setEmail(e.target.value)}
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
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <Button className="mt-6" fullWidth type="submit">
                    Sign In
                </Button>

                <br />

                <Button size="sm" variant="text" onClick={handleOpen}>
                    <Typography variant="small" className="mt-4 flex justify-center">
                        Create new account
                    </Typography>
                </Button>

                    <Dialog size="xs" open={open} className="bg-transparent shadow-none p-5">

                        <form onSubmit={signUp}>
                            <Card   className="mx-auto w-full max-w-[24rem]">

                                <CardBody className="flex flex-col gap-4">

                                    <Typography variant="h4" color="blue-gray">Sign Up</Typography>

                                    <Typography 
                                    className="mb-3 font-normal"
                                    variant="paragraph"
                                    color="gray"
                                    >
                                            Enter your email and password to Sign Up
                                    </Typography>

                                    <Typography className="-mb-2" variant="h6"> UserName</Typography>
                                    <Input 
                                     label="Username" 
                                     size="lg"
                                     type="text"
                                     id="displayName"
                                     onChange={handleSignUpInput}
                                     />

                                    <Typography className="-mb-2" variant="h6"> Your Email</Typography>
                                    <Input 
                                     label="Email" 
                                     size="lg"
                                     type="email"
                                     id="email"
                                    onChange={handleSignUpInput}

                                     />

                                    <Typography className="-mb-2" variant="h6"> Your Password</Typography>
                                    <Input 
                                     label="Password" 
                                     size="lg"
                                     type="password"
                                     id="password"
                                    onChange={handleSignUpInput}

                                     />

                                </CardBody>

                                <CardFooter className="pt-0">
                                    <Button variant="gradient" type="submit" fullWidth >Sign Up</Button>
                                    <Button variant="text" onClick={handleOpen} fullWidth >Close</Button>
                                </CardFooter>

                            </Card>
                        </form>


                    </Dialog>
               
                

                {error && <Typography color="red" className="mt-4 text-center font-normal">Wrong email or Password</Typography>}
            </Card>
        </form>
    );
};

export default Login;
