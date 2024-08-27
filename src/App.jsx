
// import './App.css'
// import Navbar from './Components/Navbar'
// import Sidebar from './Components/Sidebar'
// import { userInputs } from './formSource'
// import { Applications } from './Pages/Applications'
// import { Home } from './Pages/Home'
// import { Jobs } from './Pages/Jobs'
// import Login from './Pages/Login'
// import { Reports } from './Pages/Reports'
// import { Settings } from './Pages/Settings'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// function App() {
//   return (
//     <Router>
//       <div className='flex h-screen'>
//         {/* Sidebar */}
//         <div className="h-full max-w-[20rem]">
//           <Sidebar />
//         </div>

//         {/* Main Content Section */}
//         <div className="flex flex-col flex-grow">
//           {/* Navbar */}
//           <div className="h-[calc(4rem)] w-full">
//             <Navbar />
//           </div>

//           {/* Main Content */}
//           <div className="flex-grow p-4 bg-slate-200 overflow-auto">
//             <Routes>

//               <Route path="/" element={<Home />} />
//               <Route path="/login" element={<Login />} />

//               <Route path="/applications" element={<Applications />} />
//               <Route path="/jobs" element={<Jobs inputs = {userInputs} title = "Add new Entry"/>} />
//               <Route path="/reports" element={<Reports />} />
//               <Route path="/settings" element={<Settings />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   )
// }

// export default App




import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import { userInputs } from './formSource';
import { Applications } from './Pages/Applications';
import { Home } from './Pages/Home';
import { Jobs } from './Pages/Jobs';
import Login from './Pages/Login';
import { Reports } from './Pages/Reports';
import { Settings } from './Pages/Settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>

        {/* Authentication */}
        <Route 
          path="/" 
          element={<Login />} 
        />

        {/* Home Route */}
        <Route 
          path="/home" 
          element={
            <div className='flex h-screen'>
              {/* Sidebar */}    
              <div className="h-full max-w-[20rem]">
                <Sidebar />
              </div>

              {/* Main Content Section */}
              <div className="flex flex-col flex-grow">
                {/* Navbar */}
                <div className="h-[calc(4rem)] w-full">
                  <Navbar />
                </div>

                {/* Main Content */}
                <div className="flex-grow p-4 bg-slate-200 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
              </div>
            </div>
          } 
        />

        {/* Job Route */}
        <Route 
          path="/jobs" 
          element={
            <div className='flex h-screen'>
              {/* Sidebar */}    
              <div className="h-full max-w-[20rem]">
                <Sidebar />
              </div>

              {/* Main Content Section */}
              <div className="flex flex-col flex-grow">
                {/* Navbar */}
                <div className="h-[calc(4rem)] w-full">
                  <Navbar />
                </div>

                {/* Main Content */}
                <div className="flex-grow p-4 bg-slate-200 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Jobs inputs={userInputs} title="Add new Entry to data" />} />
                  </Routes>
                </div>
              </div>
            </div>
          } 
        />

        {/* Report Route */}
        <Route 
          path="/reports" 
          element={
            <div className='flex h-screen'>
              {/* Sidebar */}    
              <div className="h-full max-w-[20rem]">
                <Sidebar />
              </div>

              {/* Main Content Section */}
              <div className="flex flex-col flex-grow">
                {/* Navbar */}
                <div className="h-[calc(4rem)] w-full">
                  <Navbar />
                </div>

                {/* Main Content */}
                <div className="flex-grow p-4 bg-slate-200 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Reports />} />
                  </Routes>
                </div>
              </div>
            </div>
          } 
        />

        {/* Applications Route */}
        <Route 
          path="/applications" 
          element={
            <div className='flex h-screen'>
              {/* Sidebar */}    
              <div className="h-full max-w-[20rem]">
                <Sidebar />
              </div>

              {/* Main Content Section */}
              <div className="flex flex-col flex-grow">
                {/* Navbar */}
                <div className="h-[calc(4rem)] w-full">
                  <Navbar />
                </div>

                {/* Main Content */}
                <div className="flex-grow p-4 bg-slate-200 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Applications />} />
                  </Routes>
                </div>
              </div>
            </div>
          } 
        />

        {/* Settings Route */}
        <Route 
          path="/settings" 
          element={
            <div className='flex h-screen'>
              {/* Sidebar */}    
              <div className="h-full max-w-[20rem]">
                <Sidebar />
              </div>

              {/* Main Content Section */}
              <div className="flex flex-col flex-grow">
                {/* Navbar */}
                <div className="h-[calc(4rem)] w-full">
                  <Navbar />
                </div>

                {/* Main Content */}
                <div className="flex-grow p-4 bg-slate-200 overflow-auto">
                  <Routes>
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            </div>
          } 
        />



      </Routes>

    </Router>
  );
}

export default App;
