import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { addDoc, collection, doc, serverTimestamp, Timestamp } from "firebase/firestore"; 
import { db } from "../firebase";



const TaskList = ({formType}) => {

    const [receiverName, setReceiverName] = useState("");
    const [receiverEmail, setReceiverEmail] = useState("");
    const [message, setMessage] = useState("");


    // FIRBASE DATA



    // Emaul Handling
    const handleSendEmail = (e) => {
        e.preventDefault();
        // Handle send email logic here
        console.log("Email sent to:", receiverName, receiverEmail);
        console.log("Message:", message);
      };

    //   TASK HANDLING

    const [taskData, setTaskData] = useState({})


    const handleTaskInput = (e) => {
        const id = e.target.id
        const value = e.target.value

        setTaskData({...taskData, [id]: value})
    }
    console.log(taskData)
    
    const handleTaskSubmit = async(e) => {
        e.preventDefault();
        // Handle send task logic here
        

        try{
            const taskResponse = await addDoc(collection(db, "tasks"), {
                ...taskData,
                Timestamp: serverTimestamp()
              });
            console.log(taskResponse.id);
        }catch(error){
            console.log("Error adding task: ",error)
        }

        // setOpenMenu(false)
       
      };


  return (
    <div>

        {/* EMAIL FORM */}
        {formType === "email" && (
             <div id="emailFormContainer" className="">
            
             <hr />
             <br />
           <h2 className="my-3 text">Send Email</h2>
 
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
                     <Button size="sm" onClick="submit">Send Email</Button>
                 </div>
 
           </form>
         </div>
        )}
       


        {/* ADD TASK FORM */}
        {formType ==="task" && (
            <div>   
               
            <hr />
            <br />
            <h2 className="my-3 text">Create a new Task</h2>

            <form onSubmit={handleTaskSubmit} className="flex flex-wrap gap-4">

                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <label>Task Description: </label>
                    <input
                        id="description"
                        type="text"
                        className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                        placeholder="Your task description here..."
                        // value={taskDescription}
                        onChange={handleTaskInput}
                    />
                </div>
                
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <label>Task type: </label>
                    <input
                        id="jobtype"
                        type="text"
                        className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                        placeholder="Your task description here..."
                        // value={taskDescription}
                        onChange={handleTaskInput}
                    />
                </div>


                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <label>Reminder Date:</label>
                    <input
                        id="created"
                        type="date"
                        className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                        // value={reminderDate}
                        onChange={handleTaskInput}
                    />
                </div>

                <div className="w-full flex justify-start mt-4">
                    <Button size="sm" type="submit">Add task</Button>
                </div>


            </form>

        </div>
        )}
        

    </div>
  )
}

export default TaskList

