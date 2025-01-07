import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PartnerDashboardComponent } from './partner-dashboard/partner-dashboard.component';
const routes: Routes = [
  { path: '', component: PartnerDashboardComponent }  // Default route for the PartnerModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PartnerRoutingModule { }
