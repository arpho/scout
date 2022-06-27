import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {ItemModule} from "../app/modules/item/item.module"
import { UserModule } from './modules/user/user.module';
import { ProfilePage } from './modules/user/pages/profile/profile.page';
import { EditUserPage } from './modules/user/pages/edit-user/edit-user.page';
import { DynamicFormModule } from './modules/dynamic-form/dynamic-form.module';
import { SelectorItemsPage } from './modules/item/pages/selector-items/selector-items.page';
import { LogoutUserComponent } from './modules/user/components/logout-user/logout-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePage,
  EditUserPage,
  SelectorItemsPage,
  
  ],
  imports: [
    BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule,
      DynamicFormModule,
      ItemModule,
      UserModule,
       ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
}),

],
  providers: [{
     provide: RouteReuseStrategy,
     useClass: IonicRouteStrategy
     }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
