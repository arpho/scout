import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomersListPageRoutingModule } from './customers-list-routing.module';

import { CustomersListPage } from './customers-list.page';
import { ItemModule } from 'src/app/modules/item/item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersListPageRoutingModule,
    ItemModule
  ],
  declarations: [CustomersListPage]
})
export class CustomersListPageModule {}
