
import PropTypes from 'prop-types'; // Import PropTypes
import { UsersIcon } from "@heroicons/react/24/outline";
import { ChartPieIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxArrowDownIcon, ClipboardDocumentIcon } from "@heroicons/react/24/solid";

const Floatingcard = ({ type }) => {

    let data;

    // Temporary
    const amount = 100;

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
