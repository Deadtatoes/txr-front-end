import { ClipboardDocumentIcon } from "@heroicons/react/24/solid"

const Floatingcard = () => {
  return (
    // <div id="widget" className="mr-5 text-gray-300 bg-gray-900 flex-1 justify-between p-2 shadow-[2px_4px_10px_1px_rgba(0,0,0,0.47)] shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] h-[120px] rounded-[10px]">


    //     <div id="top" className="">
    //         <div className="w-5 h-5">
    //             <ClipboardDocumentIcon color=""/>
    //         </div>

    //         <span id="title">Users</span>
         

    //     </div>
    //     <div id="bottom" className="bottom-0">
    //         <div id="percentage">
                
    //             20</div>
    //     </div>
    // </div>

    <div id="widget" className="mr-5 text-gray-300 bg-gray-900 flex-1 flex flex-col justify-between p-2 shadow-[2px_4px_10px_1px_rgba(0,0,0,0.47)] shadow-[2px_4px_10px_1px_rgba(201,201,201,0.47)] h-[120px] rounded-[10px] relative">

    <div id="top" className="flex items-center px-1">
        <div className="w-5 h-5">
            <ClipboardDocumentIcon color=""/>
        </div>
        <span id="title">Users</span>
    </div>

    <div id="bottom" className="absolute bottom-2 px-1">
        <div id="percentage">
            20
        </div>
    </div>

</div>

  )
}

export default Floatingcard