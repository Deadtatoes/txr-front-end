


import { Button } from "@material-tailwind/react";

export const Jobs = () => {
  return (
    <div id="newJob" className="w-full">
      <div id="jobContainer" className="flex flex-col w-full">
        <div id="top" className="shadow-custom p-4 m-5">
          <h2>Add New Job</h2>
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
              <Button size="sm">Upload</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
