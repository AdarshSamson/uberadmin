const BASE_URL = '';

const routes = [
  {
    label: 'Main Menu', // Label for the first section
    items: [
      {
        icon: 'iconoir-home-simple',
        name: 'Dashboards',
        routes: [
          { path: `${BASE_URL}/dashboard`, name: 'Analytics' },
          // { path: `${BASE_URL}/masters/driverMaster`, name: 'Ecommerce' },
        ],
      },
      {
        icon: 'iconoir-view-grid',
        name: 'Masters',
        routes: [
          { path: `${BASE_URL}/masters/driverMaster`, name: 'Driver Master' },
          {
            name: 'Fleet Inventory',
            routes: [
              { path: `${BASE_URL}/masters/inventory/make`, name: 'Make' },
              { path: `${BASE_URL}/masters/inventory/vehcile`, name: 'Vehicle' },
              { path: `${BASE_URL}/masters/inventory/product-documents`, name: 'Product Documents' },
            ],
          },
          {
            name: 'Scheme Managemant',
            routes: [
              { path: `${BASE_URL}/masters/scheme/preference`, name: 'Scheme Preference' },
              { path: `${BASE_URL}/masters/scheme/registration`, name: 'Scheme Registration' },
            ],
          },
          // {
          //   name: 'Projects',
          //   routes: [
          //     { path: `${BASE_URL}/projects-clients.html`, name: 'Clients' },
          //     { path: `${BASE_URL}/projects-team.html`, name: 'Team' },
          //     { path: `${BASE_URL}/projects-project.html`, name: 'Project' },
          //     { path: `${BASE_URL}/projects-task.html`, name: 'Task' },
          //     { path: `${BASE_URL}/projects-kanban-board.html`, name: 'Kanban Board' },
          //     { path: `${BASE_URL}/projects-chat.html`, name: 'Chat' },
          //     { path: `${BASE_URL}/projects-users.html`, name: 'Users' },
          //     { path: `${BASE_URL}/projects-create.html`, name: 'Project Create' },
          //   ],
          // },
          // {
          //   name: 'Ecommerce',
          //   routes: [
          //     { path: `${BASE_URL}/ecommerce-products.html`, name: 'Products' },
          //     { path: `${BASE_URL}/ecommerce-customers.html`, name: 'Customers' },
          //     { path: `${BASE_URL}/ecommerce-customer-details.html`, name: 'Customer Details' },
          //     { path: `${BASE_URL}/ecommerce-orders.html`, name: 'Orders' },
          //     { path: `${BASE_URL}/ecommerce-order-details.html`, name: 'Order Details' },
          //     { path: `${BASE_URL}/ecommerce-refunds.html`, name: 'Refunds' },
          //   ],
          // },
         
          // { path: `${BASE_URL}/apps-contact-list.html`, name: 'Contact List' },
          // { path: `${BASE_URL}/apps-calendar.html`, name: 'Calendar' },
          // { path: `${BASE_URL}/apps-invoice.html`, name: 'Invoice' },
        ],
      },
    ],
  },
  // {
  //   label: 'Components', // Label for the second section
  //   items: [
  //     {
  //       icon: 'iconoir-compact-disc',
  //       name: 'UI Elements',
  //       routes: [
  //         { path: `${BASE_URL}/ui-alerts.html`, name: 'Alerts' },
  //         { path: `${BASE_URL}/ui-avatar.html`, name: 'Avatar' },
  //         { path: `${BASE_URL}/ui-buttons.html`, name: 'Buttons' },
  //         { path: `${BASE_URL}/ui-badges.html`, name: 'Badges' },
  //         { path: `${BASE_URL}/ui-cards.html`, name: 'Cards' },
  //         { path: `${BASE_URL}/ui-carousels.html`, name: 'Carousels' },
  //         { path: `${BASE_URL}/ui-dropdowns.html`, name: 'Dropdowns' },
  //         { path: `${BASE_URL}/ui-grids.html`, name: 'Grids' },
  //         { path: `${BASE_URL}/ui-images.html`, name: 'Images' },
  //         { path: `${BASE_URL}/ui-list.html`, name: 'List' },
  //         { path: `${BASE_URL}/ui-modals.html`, name: 'Modals' },
  //         { path: `${BASE_URL}/ui-navs.html`, name: 'Navs' },
  //         { path: `${BASE_URL}/ui-navbar.html`, name: 'Navbar' },
  //         { path: `${BASE_URL}/ui-paginations.html`, name: 'Paginations' },
  //         { path: `${BASE_URL}/ui-popover-tooltips.html`, name: 'Popover & Tooltips' },
  //         { path: `${BASE_URL}/ui-progress.html`, name: 'Progress' },
  //         { path: `${BASE_URL}/ui-spinners.html`, name: 'Spinners' },
  //         { path: `${BASE_URL}/ui-tabs-accordions.html`, name: 'Tabs & Accordions' },
  //         { path: `${BASE_URL}/ui-typography.html`, name: 'Typography' },
  //         { path: `${BASE_URL}/ui-videos.html`, name: 'Videos' },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: 'Crafted', // Label for the third section
  //   items: [
  //     {
  //       icon: 'iconoir-page-star',
  //       name: 'Pages',
  //       routes: [
  //         { path: `${BASE_URL}/pages-profile.html`, name: 'Profile' },
  //         { path: `${BASE_URL}/pages-notifications.html`, name: 'Notifications' },
  //         { path: `${BASE_URL}/pages-timeline.html`, name: 'Timeline' },
  //         { path: `${BASE_URL}/pages-treeview.html`, name: 'Treeview' },
  //         { path: `${BASE_URL}/pages-starter.html`, name: 'Starter Page' },
  //         { path: `${BASE_URL}/pages-pricing.html`, name: 'Pricing' },
  //         { path: `${BASE_URL}/pages-blogs.html`, name: 'Blogs' },
  //         { path: `${BASE_URL}/pages-faq.html`, name: 'FAQs' },
  //         { path: `${BASE_URL}/pages-gallery.html`, name: 'Gallery' },
  //       ],
  //     },
  //   ],
  // },
];

export default routes;