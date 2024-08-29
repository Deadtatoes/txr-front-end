
// 
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import {  collection, doc, serverTimestamp, setDoc, Timestamp } from "firebase/firestore"; 
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const Jobs = () => {
  // const [receiverName, setReceiverName] = useState("");
  // const [receiverEmail, setReceiverEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [data, setData] = useState({})
  const navigate = useNavigate()


  // UPLOADING TO FIREBASE DB
  const handleUpload = async(e) => {
    // Upload logic here
    e.preventDefault()
    // fireLine next
    try{
      const res = await createUserWithEmailAndPassword(
        auth, 
        data.email, 
        data.password
      )

      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        Timestamp: serverTimestamp()
      });
      navigate("/reports")
      console.log("Document is with ID: ", res.id )

    }catch(error){
      if(error.code === "auth/email-already-in-use"){
        console.error("The email address is already in use by another account.")
      }else{
        console.error("An error occured", error)
      }
    }
  };



  // SENDING DATA TO DB
  const handleUserInput = (e) =>{
    const id = e.target.id
    const value =e.target.value

    setData({...data, [id]: value})
  }
  console.log(data)




  // EMAIL HANDLING
  // const handleSendEmail = (e) => {
  //   e.preventDefault();
  //   // Handle send email logic here
  //   console.log("Email sent to:", receiverName, receiverEmail);
  //   console.log("Message:", message);
  // };

  return (
    <div id="newJob" className="">
      <div id="jobContainer" className="flex flex-col w-full">
        <div id="top" className="shadow-custom p-4 m-5">
          <h2>Add Personnel Into Database</h2>
        </div>

        <div id="bottom" className="shadow-custom p-4 m-5">

          <form onSubmit={handleUpload} className="flex flex-wrap gap-4">
            
            
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Username:</label>
              <input
                id="username"
                type="text"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="john_doe"
                onChange={handleUserInput}
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Name and Surname:</label>
              <input
                id="displayName"
                type="text"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="John Doe"
                onChange={handleUserInput}
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Email:</label>
              <input
                id="email"
                type="email"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="john_doe@gmail.com"
                onChange={handleUserInput}
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Password:</label>
              <input
                id="password"
                type="password"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="john_doe"
                onChange={handleUserInput}
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Phone:</label>
              <input
                id="phoneNumber"
                type="text"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="+233 24 444 4444"
                onChange={handleUserInput}
              />
            </div>

            <div className="w-full flex justify-start mt-4">
              <Button size="sm" type="submit">Upload</Button>
            </div>
          </form>
        </div>

        {/* Email Container */}
        {/* <div id="emailFormContainer" className="shadow-custom p-4 m-5">
          <h2>Select Job type</h2>
          <hr />
          <form onSubmit={handleSendEmail} className="flex flex-wrap gap-4">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Receiver Name:</label>
              <input
                type="text"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="Receiver's Name"
                value={receiverName}
                onChange={(e) => setReceiverName(e.target.value)}
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Receiver Email:</label>
              <input
                type="email"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="receiver_email@gmail.com"
                value={receiverEmail}
                onChange={(e) => setReceiverEmail(e.target.value)}
              />
            </div>

            <div className="w-full">
              <label>Message:</label>
              <textarea
                className="w-full outline outline-gray-600 h-20 focus:outline-blue-500 p-2 rounded"
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="w-full flex justify-start mt-4">
              <Button size="sm" onClick={handleUpload}>Send Email</Button>
            </div>
          </form>
        </div> */}

        
      </div>
    </div>
  );
};

