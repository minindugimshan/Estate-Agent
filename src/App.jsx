import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FavoritesProvider } from './context/FavoritesContext';
import AppRoutes from './routes/AppRoutes.jsx';
import './App.css';
// import './index.css';


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

export default App;









