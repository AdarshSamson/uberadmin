import { lazy } from 'react'



const Dashboard = lazy(() => import('../pages/dashboard'))
const DriverMaster= lazy(() => import('../pages/masters/driverMaster'))
const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/masters/driverMaster',
    component: DriverMaster,
  },
]

export default routes
