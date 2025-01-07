import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];
const routes: Routes = [
  { path: 'customer', 
    loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule) },  // Lazy load CustomerModule
  { path: 'partner', 
    data: { title: 'Partner Page' },
    loadChildren: () => import('../partner/partner.module').then(m => m.PartnerModule) },    // Lazy load PartnerModule
  { path: '', 
    data: { title: 'Customer Page' },
    redirectTo: '/customer', pathMatch: 'full' },  // Redirect to Customer by default
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
