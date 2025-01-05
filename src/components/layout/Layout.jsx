

// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar/index';
// import Footer from './footer/Footer';

// function Layout() {
//   return (
//     <div>
//       <Navbar />
//         <main>
//           <Outlet /> {/* This will render child routes like SearchPage and PropertyDetails */}
//         </main>
//       <Footer />
//     </div>
//   )
// }

// export default Layout ;


import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/index';
import Footer from './footer/Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <header>
        <Navbar />
      </header>

      {/* Main content area */}
      <main className="flex-grow">
        <Outlet /> {/* Child routes will render here */}
      </main>

      {/* Footer at the bottom */}
      <footer>
       <Footer />
      </footer>
    </div>
  );
}

export default Layout;

