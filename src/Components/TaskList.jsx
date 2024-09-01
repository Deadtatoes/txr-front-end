import { useState, useEffect } from "react";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import { addDoc, collection, serverTimestamp, getDocs } from "firebase/firestore"; 
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

// New TaskList component
const TaskList = ({ formType }) => {
    const [receiverName, setReceiverName] = useState("");
    const [receiverEmail, setReceiverEmail] = useState("");
    const [message, setMessage] = useState("");
    const [taskData, setTaskData] = useState({});
    const [emailList, setEmailList] = useState([]);
    const [includeAll, setIncludeAll] = useState(false); // Checkbox state
    const navigate = useNavigate();

    // Fetch email addresses from Firestore
    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                const emails = querySnapshot.docs.map(doc => doc.data().email);
                setEmailList(emails);
            } catch (error) {
                console.error("Error fetching emails: ", error);
            }
        };

        if (includeAll) {
            fetchEmails();
        }
    }, [includeAll]);

    // Handle Email Sending
    const handleSendEmail = async (e) => {
        e.preventDefault();

        const recipients = includeAll ? emailList : [receiverEmail];

        recipients.forEach(email => {
            const templateParams = {
                to_name: receiverName,
                to_email: email,
                message: message,
            };

            emailjs
                .send(
                    "service_mc0kc82", // EmailJS service ID
                    "template_vxp90rt", // EmailJS template ID
                    templateParams,
                    "Wq0J_pZJBJ7Zw7L6H" // EmailJS public key
                )
                .then(
                    (response) => {
                        console.log("Email sent successfully!", response.status, response.text);
                        // Optionally, reset the form fields
                        if (!includeAll) {
                            setReceiverName("");
                            setReceiverEmail("");
                            setMessage("");
                        }
                    },
                    (error) => {
                        console.log("Failed to send email. Error:", error);
                    }
                );
        });
    };

    // Handle Task Input Change
    const handleTaskInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setTaskData({ ...taskData, [id]: value });
    };

    // Handle Task Submission
    const handleTaskSubmit = async (e) => {
        e.preventDefault();

        try {
            const taskResponse = await addDoc(collection(db, "tasks"), {
                ...taskData,
                Timestamp: serverTimestamp(),
            });
            console.log(taskResponse.id);
        } catch (error) {
            console.log("Error adding task: ", error);
        }

        navigate("/reports"); 
    };

    return (
        <div>
            {/* EMAIL FORM */}
            {formType === "email" && (
                <div id="emailFormContainer">
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
                                disabled={includeAll} // Disable input if checkbox is checked
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

                        <div>
                            <Checkbox
                                className="font-normal"
                                checked={includeAll}
                                onChange={() => setIncludeAll(!includeAll)}
                                label={
                                    <div>
                                        <Typography variant="small" color="gray" className="font-normal">
                                           Include mails from Personnel Database
                                        </Typography>
                                    </div>
                                }
                                containerProps={{
                                    className: "-mt-1",
                                }}
                            />
                        </div>

                        <div className="w-full flex justify-start mt-4">
                            <Button size="sm" type="submit">Send Email</Button>
                        </div>
                    </form>
                </div>
            )}

            {/* ADD TASK FORM */}
            {formType === "task" && (
                <div>   
                    <hr />
                    <br />
                    <h2 className="my-3 text">Create a new Task</h2>

                    <form onSubmit={handleTaskSubmit} className="flex flex-wrap gap-4">
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                            <label>Task Name: </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                                placeholder="Your task name here..."
                                onChange={handleTaskInput}
                            />
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/3">
                            <label>Task Description: </label>
                            <input
                                id="description"
                                type="text"
                                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                                placeholder="Your task description here..."
                                onChange={handleTaskInput}
                            />
                        </div>
                        
                        <div className="w-full sm:w-1/2 lg:w-1/3">
                            <label>Task type: </label>
                            <input
                                id="jobtype"
                                type="text"
                                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                                placeholder="Your task type here..."
                                onChange={handleTaskInput}
                            />
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/3">
                            <label>Reminder Date:</label>
                            <input
                                id="created"
                                type="date"
                                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
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
    );
};

export default TaskList;
