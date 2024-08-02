
// 
import { Button } from "@material-tailwind/react";
import { useState } from "react";

export const Jobs = () => {
  const [receiverName, setReceiverName] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = async(e) => {
    // Handle upload logic here

    // fireLine next
  
    
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    // Handle send email logic here
    console.log("Email sent to:", receiverName, receiverEmail);
    console.log("Message:", message);
  };

  return (
    <div id="newJob" className="">
      <div id="jobContainer" className="flex flex-col w-full">
        <div id="top" className="shadow-custom p-4 m-5">
          <h2>Add new Entry</h2>
        </div>

        <div id="bottom" className="shadow-custom p-4 m-5">
          <form className="flex flex-wrap gap-4">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Username:</label>
              <input
                type="text"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="john_doe"
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Name and Surname:</label>
              <input
                type="text"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="John Doe"
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Email:</label>
              <input
                type="email"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="john_doe@gmail.com"
              />
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/3">
              <label>Phone:</label>
              <input
                type="text"
                className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
                placeholder="+233 24 444 4444"
              />
            </div>

            <div className="w-full flex justify-start mt-4">
              <Button size="sm" onClick={handleUpload}>Upload</Button>
            </div>
          </form>
        </div>

        <div id="emailFormContainer" className="shadow-custom p-4 m-5">
          <h2>Send Email</h2>
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
              <Button size="sm" type="submit">Send Email</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



// import { useState, useEffect } from "react";
// import { Button } from "@material-tailwind/react";
// import { auth, db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";

// export const Jobs = () => {
//   const [receiverName, setReceiverName] = useState("");
//   const [receiverEmails, setReceiverEmails] = useState([]);
//   const [selectedEmails, setSelectedEmails] = useState([]);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Fetch emails from Firestore
//     const fetchEmails = async () => {
//       try {
//         const emailsCollection = collection(db, "emails");
//         const emailSnapshot = await getDocs(emailsCollection);
//         const emailList = emailSnapshot.docs.map(doc => ({
//           id: doc.id,
//           email: doc.data().email
//         }));
//         setReceiverEmails(emailList);
//       } catch (error) {
//         console.error("Error fetching emails:", error);
//       }
//     };

//     fetchEmails();
//   }, []);

//   const handleUpload = () => {
//     // Handle upload logic here
//   };

//   const handleSendEmail = (e) => {
//     e.preventDefault();
//     // Handle send email logic here
//     console.log("Receiver's Name:", receiverName);
//     console.log("Selected Emails:", selectedEmails);
//     console.log("Message:", message);
//   };

//   return (
//     <div id="newJob" className="">
//       <div id="jobContainer" className="flex flex-col w-full">
//         <div id="top" className="shadow-custom p-4 m-5">
//           <h2>Add new Entry</h2>
//         </div>

//         <div id="bottom" className="shadow-custom p-4 m-5">
//           <form className="flex flex-wrap gap-4">
//             <div className="w-full sm:w-1/2 lg:w-1/3">
//               <label>Username:</label>
//               <input
//                 type="text"
//                 className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
//                 placeholder="john_doe"
//               />
//             </div>

//             <div className="w-full sm:w-1/2 lg:w-1/3">
//               <label>Name and Surname:</label>
//               <input
//                 type="text"
//                 className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
//                 placeholder="John Doe"
//               />
//             </div>

//             <div className="w-full sm:w-1/2 lg:w-1/3">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
//                 placeholder="john_doe@gmail.com"
//               />
//             </div>

//             <div className="w-full sm:w-1/2 lg:w-1/3">
//               <label>Phone:</label>
//               <input
//                 type="text"
//                 className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
//                 placeholder="+233 24 444 4444"
//               />
//             </div>

//             <div className="w-full flex justify-start mt-4">
//               <Button size="sm" onClick={handleUpload}>Upload</Button>
//             </div>
//           </form>
//         </div>

//         <div id="emailFormContainer" className="shadow-custom p-4 m-5">
//           <h2>Send Email</h2>
//           <form onSubmit={handleSendEmail} className="flex flex-wrap gap-4">
//             <div className="w-full sm:w-1/2 lg:w-1/3">
//               <label>Receiver's Name:</label>
//               <input
//                 type="text"
//                 className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
//                 placeholder="Receiver's Name"
//                 value={receiverName}
//                 onChange={(e) => setReceiverName(e.target.value)}
//               />
//             </div>

//             <div className="w-full sm:w-1/2 lg:w-1/3">
//               <label>Receiver's Email:</label>
//               <select
//                 multiple
//                 className="w-full outline outline-gray-600 h-10 focus:outline-blue-500 p-2 rounded"
//                 value={selectedEmails}
//                 onChange={(e) => setSelectedEmails(Array.from(e.target.selectedOptions, option => option.value))}
//               >
//                 {receiverEmails.map(email => (
//                   <option key={email.id} value={email.email}>{email.email}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="w-full">
//               <label>Message:</label>
//               <textarea
//                 className="w-full outline outline-gray-600 h-20 focus:outline-blue-500 p-2 rounded"
//                 placeholder="Your message here..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//             </div>

//             <div className="w-full flex justify-start mt-4">
//               <Button size="sm" type="submit">Send Email</Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
