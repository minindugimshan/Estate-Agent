


// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { FavoritesProvider } from './context/FavoritesContext';
// import AppRoutes from './routes/AppRoutes.jsx';
// import './App.css';

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


// import { BrowserRouter } from 'react-router-dom';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { AuthProvider } from './context/AuthContext';
// import { FavoritesProvider } from './context/FavoritesContext';
// import AppRoutes from './routes/AppRoutes.jsx';
// import './App.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <FavoritesProvider>
//             <div className="app">
//               <AppRoutes />
//             </div>
//           </FavoritesProvider>
//         </LocalizationProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   )
// }

// export default App




  import { LocalizationProvider } from '@mui/x-date-pickers';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FavoritesProvider } from './context/FavoritesContext';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes.jsx';
import './App.css';

function App() {
  return (
    <AuthProvider>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FavoritesProvider>
        <div className="app">
            <AppRoutes />
        </div>
          </FavoritesProvider>
         </LocalizationProvider>
    </AuthProvider>
  )
}

export default App