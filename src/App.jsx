
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Applications } from './Pages/Applications'
import { Home } from './Pages/Home'
import { Jobs } from './Pages/Jobs'
import { Reports } from './Pages/Reports'
import { Settings } from './Pages/Settings'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
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
              <Route path="/applications" element={<Applications />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
