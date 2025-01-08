import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from 'src/customer/customer.module';
import { PartnerModule } from 'src/partner/partner.module';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './store/data.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DataEffect } from './store/data.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CustomerModule,
    PartnerModule,
    StoreModule.forRoot({data: dataReducer}),
    EffectsModule.forRoot([DataEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
