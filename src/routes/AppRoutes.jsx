
// import { Routes, Route } from 'react-router-dom';
// import Layout from '../components/layout/Layout';
// import SearchPage from '../pages/SearchPage';
// import PropertyDetails from '../pages/PropertyDetails';

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route index element={<SearchPage />} />
//         <Route path="/property/:id" element={<PropertyDetails />} />
//       </Route>
//     </Routes>
//   )
// }

// export default AppRoutes;


import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SearchPage from '../pages/SearchPage';
import PropertyDetails from '../pages/PropertyDetails';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<SearchPage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes