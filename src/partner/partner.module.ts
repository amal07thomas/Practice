import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
import { PartnerProfileComponent } from './partner-profile/partner-profile.component';
import { PartnerRoutingModule } from './partner-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PartnerDashboardComponent,
    PartnerProfileComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
  ],
  exports: [
    RouterModule
  ]
})
export class PartnerModule { }
