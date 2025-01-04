

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/index'

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This will render child routes like SearchPage and PropertyDetails */}
      </main>
    </div>
  )
}

export default Layout
