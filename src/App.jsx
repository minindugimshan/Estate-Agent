// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { LocalizationProvider } from '@mui/x-date-pickers';
// // import { Adapt#f6d1d1ns } from '@mui/x-date-pickers/AdapterDateFns';
// // import Navbar from './components/layout/Navbar';
// // import SearchPage from './pages/SearchPage';
// // import PropertyDetails from './pages/PropertyDetails';
// // import { FavoritesProvider } from './context/FavoritesContext';
// // // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// // import './App.css';

// // function App() {
// //   return (
// //     <Router>
// //       <LocalizationProvider dateAdapter={AdapterDateFns}>
// //         <FavoritesProvider>
// //           <div className="app">
// //             <Navbar />
// //             <Routes>
// //               <Route path="/" element={<SearchPage />} />
// //               <Route path="/property/:id" element={<PropertyDetails />} />
// //             </Routes>
// //           </div>
// //         </FavoritesProvider>
// //       </LocalizationProvider>
// //     </Router>
// //   )
// // }

// // export default App

// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { FavoritesProvider } from './context/FavoritesContext'
// import AppRoutes from './routes'
// import './App.css'

// function App() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <FavoritesProvider>
//         <div className="app">
//           <AppRoutes />
//         </div>
//       </FavoritesProvider>
//     </LocalizationProvider>
//   )
// }

// export default App


import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FavoritesProvider } from './context/FavoritesContext';
import AppRoutes from './routes/AppRoutes.jsx';
import './App.css';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FavoritesProvider>
        <div className="app">
          <AppRoutes />
        </div>
      </FavoritesProvider>
    </LocalizationProvider>
  )
}

export default App
