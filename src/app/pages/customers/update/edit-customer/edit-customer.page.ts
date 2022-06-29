import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Customer } from 'src/app/models/Customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.page.html',
  styleUrls: ['./edit-customer.page.scss'],
})
export class EditCustomerPage implements OnInit {
  customer:Customer

  constructor(
    public modalCtrl:ModalController,
    public navParams:NavParams) { }

  ngOnInit() {
    this.customer= this.navParams.get('item')
    console.log("customer",this.customer)
  }

  dismiss(v?:Customer){
    return this.modalCtrl.dismiss(v)
  }

}
