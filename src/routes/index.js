import { lazy } from 'react'



const Dashboard = lazy(() => import('../pages/dashboard'))
// const SalesAllBranch = lazy(() => import('../Mis_pages/SalesAllBranch'))

// const Service = lazy(() => import('../Mis_pages/Service'))
// const ServiceAllBranch = lazy(() => import('../Mis_pages/ServiceAllBranch'))

// const Pre_Owned = lazy(() => import('../Mis_pages/preOwned'))
// const Pre_OwnedAllBranch = lazy(() => import('../Mis_pages/preOwnedAllBranch'))

// const ReportsMain = lazy(() => import('../Mis_pages//ReportsMain'))
// const ReportsMainBranchwise = lazy(() => import('../Mis_pages/ReportsMainBranchwise'))


// const Settings = lazy(() => import('../Mis_pages/Settings'))
// const Profile = lazy(() => import('../Mis_pages/Profile'))
// const Corporate = lazy(() => import('../Mis_pages/Corporate'))
// const Training_Academy = lazy(() => import('../Mis_pages/trainingAcademy'))
// const Page404 = lazy(() => import('../pages/404'))


/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [

  // Sales
  {
    path: '/dashboard',
    component: Dashboard,
  },
  
]

export default routes
