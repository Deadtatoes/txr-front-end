import PropTypes from 'prop-types'; // Import PropTypes
import { UserCircleIcon, UsersIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxArrowDownIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Floatingcard = ({ type }) => {
    const [amount, setAmount] = useState(null);

    let data;

    switch(type) {
        case "user":
            data = {
                title: "TOTAL TASKS",
                link: "See all Tasks",
                icon: <ClipboardDocumentIcon className="w-8 h-8" /> // Adjusted icon size
            };
            break;

        case "order":
            data = {
                title: "APPLICATIONS",
                link: "Check applications",
                icon: <ArchiveBoxArrowDownIcon className="w-8 h-8" />
            };
            break;

        case "earning": // USERS type
            data = {
                title: "PERSONNEL  ",
                link: "See Users",
                icon: <UserCircleIcon className="w-8 h-8" />
            };
            break;

        case "balance":
            data = {
                title: "DATABASE",
                link: "See all Tables",
                icon: <UsersIcon className="w-8 h-8" />
            };
            break;

        default:
            data = {
                title: "DEFAULT",
                link: "See all",
                icon: null
            };
            break;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let collectionName = "";

                if (type === "user") {
                    collectionName = "tasks";
                } else if (type === "earning") { // USERS type
                    collectionName = "users";
                }

                if (collectionName) {
                    const collectionRef = collection(db, collectionName);
                    const snapshot = await getDocs(collectionRef);
                    setAmount(snapshot.docs.length);
                }
            } catch (error) {
                console.error(`Error fetching ${type} data:`, error);
            }
        };

        fetchData();
    }, [type]);

    return (
        // <div
        //     id="widget"
        //     className="text-gray-300 bg-gray-900 flex-1 flex flex-col justify-between p-4 shadow-lg h-[200px] md:h-[250px] lg:h-[200px] rounded-[20px] relative transition-all duration-300 ease-in-out transform hover:scale-105"
        // >
        //     <div id="top" className="flex items-center space-x-2">
        //         <div className="w-10 h-10">
        //             {data.icon}
        //         </div>
        //         <span id="title" className="text-lg font-semibold">{data.title}</span>
        //     </div>
        //     <div id="bottom" className="flex flex-col justify-end flex-1">
        //         <span id="counter" className="text-4xl font-bold">{amount}</span>
        //         <span id="link" className="border-b border-gray-400 mt-2 text-sm self-start">
        //             {data.link}
        //         </span>
        //     </div>
        // </div>


        // <div id="widget" className="mr-5 text-gray-300 bg-gray-900 flex-1 flex flex-col justify-between p-4 shadow-lg h-[200px] md:h-[250px] lg:h-[200px] rounded-[20px] relative transition-all duration-300 ease-in-out transform hover:scale-105">
        //     <div id="top" className="flex flex-col justify-between h-full">
        //         <div className="flex items-center space-x-2 mb-2">
        //             <div className="w-6 h-6">
        //                 {data.icon}
        //             </div>
        //             <span id="title" className="text-sm font-semibold">{data.title}</span>
        //         </div>
        //         <span id="link" className="border-b border-gray-400 text-sm">{data.link}</span>
        //     </div>
        //     <div id="bottom" className="absolute bottom-2 right-2 px-2">
        //         <div id="counter" className="text-lg font-bold">{amount}</div>
        //     </div>
        // </div>
    
        <div
            id="widget"
            className="text-gray-300 bg-gray-900 flex-1 flex flex-col justify-between p-4 shadow-lg w-full md:w-[250px] lg:w-[300px] xl:w-[350px] h-[200px] md:h-[250px] lg:h-[200px] rounded-[20px] relative transition-all duration-300 ease-in-out transform hover:scale-105"
        >
            <div id="top" className="flex items-center space-x-2">
                <div className="w-10 h-10">
                    {data.icon}
                </div>
                <span id="title" className="text-lg font-semibold">{data.title}</span>
            </div>
            <div id="bottom" className="flex flex-col justify-end flex-1">
                <span id="counter" className="text-4xl font-bold">{amount}</span>
                <span id="link" className="border-b border-gray-400 mt-2 text-sm self-start">
                    {data.link}
                </span>
            </div>
        </div>

    );
};

// Define prop types for the component
Floatingcard.propTypes = {
    type: PropTypes.string.isRequired
};

export default Floatingcard;
