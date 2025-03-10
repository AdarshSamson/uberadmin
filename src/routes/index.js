import { lazy } from 'react'



const Dashboard = lazy(() => import('../pages/dashboard'))

const routes = [

  // Sales
  {
    path: '/dashboard',
    component: Dashboard,
  },
  
]

export default routes
