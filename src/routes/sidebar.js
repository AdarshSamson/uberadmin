/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */

const BASE_URL = '';

const routes = [
  
  {
    
    icon: 'salesIcon',
    name: 'Branchwise',
    routes: [
      // submenu
      {
        path: `${BASE_URL}/sales-branchwise`,
        name: 'Sales',
      },
      {
        path: `${BASE_URL}/service-branchwise`,
        name: 'Service',
      },
      {
        path: `${BASE_URL}/preOwned-branchwise`,
        name: 'Pre Owned',
      },
      {
        path: `${BASE_URL}/corporate`,
        name: 'Corporate',
      },
    ]
  },
  {
    
    icon: 'TablesIcon',
    name: 'Consolidated',
    routes: [
      
      {
        path: `${BASE_URL}/reports-Summary`,
        name: 'Summary',
      },
      {
        path: `${BASE_URL}/reports-branchwise`,
        name: 'Branchwise',
      }
    ]
  },
  {
    path: `${BASE_URL}/settings`,
    icon: 'settingsIcon',
    name: 'Settings',
  },
  
]

export default routes







 



// const routes = [
  
//   {
    
//     icon: 'salesIcon',
//     name: 'Sales',
//     routes: [
//       // submenu
//       {
//         path: `${BASE_URL}/sales-branchwise`,
//         name: 'Branchwise',
//       },
//       {
//         path: `${BASE_URL}/sales-allBranch`,
//         name: 'All Branch',
//       },
//     ]
//   },
//   {
    
//     icon: 'serviceIcon',
//     name: 'Service',
//     routes: [
//       // submenu
//       {
//         path: `${BASE_URL}/service-branchwise`,
//         name: 'Branchwise',
//       },
//       {
//         path: `${BASE_URL}/service-allBranch`,
//         name: 'All Branch',
//       },
//     ]
//   },
//   {
    
//     icon: 'ModalsIcon',
//     name: 'Pre Owned',
//     routes: [
//       // submenu
//       {
//         path: `${BASE_URL}/preOwned-branchwise`,
//         name: 'Branchwise',
//       },
//       {
//         path: `${BASE_URL}/preOwned-allBranch`,
//         name: 'All Branch',
//       },
//     ]
//   },
//   {
    
//     icon: 'TablesIcon',
//     name: 'Reports',
//     routes: [
      
//       {
//         path: `${BASE_URL}/reports-Summary`,
//         name: 'Summary',
//       },
//       {
//         path: `${BASE_URL}/reports-branchwise`,
//         name: 'Branchwise',
//       }
//     ]
//   },
  
//   {
//     path: `${BASE_URL}/corporate`,
//     icon: 'CorporateIcon',
//     name: 'Corporate',
//   },
//   {
//     path: `${BASE_URL}/trainingAcademy`,
//     icon: 'TrainingIcon',
//     name: 'Training Academy',
//   },
//   {
//     path: `${BASE_URL}/settings`,
//     icon: 'settingsIcon',
//     name: 'Settings',
//   },
  
// ]

// export default routes
