import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { PagesModule } from "./pages/pages.module";
import { OrderByPipe } from './order-by.pipe';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import {AgmCoreModule} from "@agm/core";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import {SharedModule} from "./shared/shared.module";
import {SimplebarAngularModule} from "simplebar-angular";
import { UserlistAdminComponent } from './admin/userlist-admin/userlist-admin.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import {UniversalAppInterceptor} from "./auth/UniversalAppInterceptor";
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminAnnonceComponent } from './admin/admin-rent/admin-annonce.component';
import {AccountModule} from "./pages/account/account.module";
import {CatalogModule} from "./pages/catalog/catalog.module";
import { SaleComponent } from './admin/sale/sale.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    SidebarComponent,
    UserlistAdminComponent,
    AdminContactComponent,
    DashboardComponent,
    AdminAnnonceComponent,
    SaleComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ScrollToModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AgmCoreModule,
    NgbTooltip,
    NgxSliderModule,
    NgxUsefulSwiperModule,
    SharedModule,
    SimplebarAngularModule,
    AccountModule,
    //CatalogModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UniversalAppInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
