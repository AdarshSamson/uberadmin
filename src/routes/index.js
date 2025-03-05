import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster

const Sales = lazy(() => import('../Mis_pages/Sales'))
const SalesAllBranch = lazy(() => import('../Mis_pages/SalesAllBranch'))

const Service = lazy(() => import('../Mis_pages/Service'))
const ServiceAllBranch = lazy(() => import('../Mis_pages/ServiceAllBranch'))

const Pre_Owned = lazy(() => import('../Mis_pages/preOwned'))
const Pre_OwnedAllBranch = lazy(() => import('../Mis_pages/preOwnedAllBranch'))

const ReportsMain = lazy(() => import('../Mis_pages//ReportsMain'))
const ReportsMainBranchwise = lazy(() => import('../Mis_pages/ReportsMainBranchwise'))


const Settings = lazy(() => import('../Mis_pages/Settings'))
const Profile = lazy(() => import('../Mis_pages/Profile'))
const Corporate = lazy(() => import('../Mis_pages/Corporate'))
const Training_Academy = lazy(() => import('../Mis_pages/trainingAcademy'))
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
    path: '/sales-branchwise',
    component: Sales,
  },
  {
    path: '/sales-allBranch',
    component: SalesAllBranch,
  },

  // service
  {
    path: '/service-branchwise',
    component: Service,
  },
  {
    path: '/service-allBranch',
    component: ServiceAllBranch,
  },
 
  // preOwned
  {
    path: '/preOwned-branchwise',
    component: Pre_Owned,
  },
  {
    path: '/preOwned-allBranch',
    component: Pre_OwnedAllBranch,
  },

 // reports
 {
  path: '/reports-Summary',
  component: ReportsMain,
},
{
  path: '/reports-branchwise',
  component: ReportsMainBranchwise,
},

  {
    path: '/settings',
    component: Settings,
  },
  {
    path: '/corporate',
    component: Corporate ,
  },
  {
    path: '/trainingAcademy',
    component: Training_Academy,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

export default routes
