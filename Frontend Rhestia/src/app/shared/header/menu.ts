import { MenuItem } from './menu.model';

// export const MENU: MenuItem[] = [
//
//   {
//     id: 7,
//     label: 'Sale',
//     link: '/catalog/sale',
//     parentId: 4
//   },
//   {
//     id: 5,
//     label: 'Location',
//     link: '/catalog/rent',
//     parentId: 4
//   },
//   {
//     id: 18,
//     label: 'Payement',
//     link: '/vendor/property-promotion',
//     parentId: 16,
//
//   },
//   // {
//   //   id: 35,
//   //   label: 'Advertisement',
//   //   link: '/advertisement/add-advertisement',
//   // },
//   {
//     id: 22,
//     label: 'About',
//     link: '/pages/about',
//   },
//   {
//     id: 26,
//     label: 'Contacts',
//     link: '/pages/contacts',
//   },
//   {
//     id: 22,
//     label: 'Liste de souhait',
//     link: '/account/wishlist',
//   },
//   {
//     id: 7,
//     label: 'Mon compte',
//
//     subItems: [
//
//       {
//         id: 8,
//         label: 'Profil',
//         link: '/account/info',
//         parentId: 7
//       },
//       {
//         id: 9,
//         label: 'Mot de passe & Securité',
//         link: '/account/security',
//         parentId: 7
//       },
//       {
//         id: 10,
//         label: 'Mes annonces',
//         link: '/account/properties',
//         parentId: 7
//       },
//
//     ]
//   }
// ];
//
export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Home',
    link: '',
  },
  {

    id: 5,
    label: 'Rent',
    link: '/catalog/rent',
    parentId: 4
  },
  {
    id: 7,
    label: 'Sale',
    link: '/catalog/sale',
    parentId: 4
  },




  {
    id: 18,
    label: 'Payment',
    link: '/vendor/property-promotion',
    parentId: 16,

  },

  // {
  //   id: 35,
  //   label: 'Advertisement',
  //   link: '/advertisement/add-advertisement',
  // },
  {
    id: 7,
    label: 'Account',

    subItems: [

      {
        id: 8,
        label: 'Personal Info',
        link: '/account/info',
        parentId: 7
      },

      {
        id: 9,
        label: 'Password & Security',
        link: '/account/security',
        parentId: 7
      },
      {
        id: 10,
        label: 'My Properties',
        link: '/account/properties',
        parentId: 7
      },

    ]
  },
  {
    id: 22,
    label: 'About',
    link: '/pages/about',
  },
  {
    id: 26,
    label: 'Contacts',
    link: '/pages/contacts',
  },
  {
    id: 22,
    label: 'Wishlist',
    link: '/account/wishlist',
  },
];
