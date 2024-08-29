
import PropTypes from 'prop-types'; // Import PropTypes
import { UsersIcon } from "@heroicons/react/24/outline";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxArrowDownIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Floatingcard = ({ type }) => {

    const [amount, setAmount] = useState(null)
   

    let data;

    // Temporary
    // const amount = 100;

    switch(type){
        case "user":
            data = {
                title: "TOTAL TASKS",
                link: "See all Tasks",
                icon: <ClipboardDocumentIcon />
            };
            break;

        case "order":
            data = {
                title: "APPLICATIONS",
                link: "Check applications",
                icon: <ArchiveBoxArrowDownIcon />
            };
            break;

        case "earning":
            data = {
                title: "TABLES",
                link: "See Reports",
                icon: <ChartPieIcon />
            };
            break;

        case "balance":
            data = {
                title: "DATABASE",
                link: "See all Tables",
                icon: <UsersIcon />
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

    useEffect(() =>{
        const fetchData = async() => {
            const today = new Date()
            const lastMonth = new Date().setMonth(today.getMonth() - 1)
            const prevMonth = new Date().setMonth(today.getMonth() - 2)

            const lastMonthQuery = query(
                collection(db, "users"), 
                where("timeStamp", "<=", today), 
                where("timeStamp", ">", lastMonth)
            )
            const prevMonthQuery = query(
                collection(db, "users"), 
                where("timeStamp", "<=", lastMonth), 
                where("timeStamp", ">", prevMonth)
            )

            const lastMonthData = await getDocs(lastMonthQuery)
            const prevMonthData = await getDocs(prevMonthQuery)

            // PRINTING OUT NUMBER OF ELEMENTS
            setAmount(lastMonthData.docs.length)

            console.log(lastMonthData)
            console.log(prevMonthData)
        }
        fetchData()
    },[])



  return (
      <div id="widget" className="mr-5 text-gray-300 bg-gray-900 flex-1 flex flex-col justify-between p-2 shadow-[2px_4px_10px_1px_rgba(0,0,0,0.47)] shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] h-[120px] rounded-[10px] relative">
          <div id="top" className="items-center px-1">
              <div className="flex space-x-2">
                  <div className="w-5 h-5 ">
                      {data.icon}
                  </div>
                  <span id="title" className="text-sm">{data.title}</span>
              </div>
              <span id="link" className="border-b border-gray-400 absolute bottom-2 text-sm">{data.link}</span>
          </div>
          <div id="bottom" className="absolute bottom-2 right-2 px-1">
              <div id="counter">{amount}</div>
          </div>
      </div>
  );
};

// Define prop types for the component
Floatingcard.propTypes = {
    type: PropTypes.string.isRequired
};

export default Floatingcard;
