
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SearchPage from '../pages/SearchPage';
import PropertyDetails from '../pages/propertyDetails/PropertyDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes;





