import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from 'src/customer/customer.module';
import { PartnerModule } from 'src/partner/partner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CustomerModule,
    PartnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
