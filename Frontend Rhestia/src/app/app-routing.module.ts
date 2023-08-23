import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from "./admin/sidebar/sidebar.component";
import {UserlistAdminComponent} from "./admin/userlist-admin/userlist-admin.component";
import {ContactsComponent} from "./pages/extrapages/contacts/contacts.component";
import {AdminContactComponent} from "./admin/admin-contact/admin-contact.component";
import {DashboardComponent} from "./admin/dashboard/dashboard.component";
import {AdminAnnonceComponent} from "./admin/admin-rent/admin-annonce.component";
import {SaleComponent} from "./admin/sale/sale.component";

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  },
  { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule)  },
  {path:'adminuser',component:UserlistAdminComponent},
  {path:'contact',component:AdminContactComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'admin-rent',component:AdminAnnonceComponent},
  {path:'admin-sale',component:SaleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
