import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerProfileComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class CustomerModule { }
