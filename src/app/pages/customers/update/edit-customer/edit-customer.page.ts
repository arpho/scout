import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { configs } from 'src/app/configs/configs';
import { Customer } from 'src/app/models/Customer';
import { OptionsMaker } from 'src/app/modules/dynamic-form/helpers/optionMaker';
import { DropdownQuestion } from 'src/app/modules/dynamic-form/models/question-dropdown';
import { TextboxQuestion } from 'src/app/modules/dynamic-form/models/question-textbox';
import { SwitchQuestion } from 'src/app/modules/item/models/question-switch';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.page.html',
  styleUrls: ['./edit-customer.page.scss'],
})

export class EditCustomerPage implements OnInit {
  customer:Customer
  formFields:any[]
  constructor(
    public modalCtrl:ModalController,
    public navParams:NavParams) { }

  ngOnInit() {
    this.customer= this.navParams.get('item')
    console.log("customer",this.customer)

    this.formFields = [
      new TextboxQuestion({
        key:"firstName",
        label:"nome",
        value:this.customer.firstName,
        required:true
      }),
      new TextboxQuestion({
        key:"lastName",
        label:"cognome",
        value:this.customer.firstName,
        required:true
      }),
      new SwitchQuestion({
        key:"enabled",
        label:"abilitato",
        value:this.customer.enabled,
        labelFalse:"utente non abilitato",
        labelTrue:"utente abilitato",
        iconFalse:"close-circle",
        iconTrue:"checkmark-circle"
      }),
      new DropdownQuestion({
        key:"level",
        label:"autorizzazioni",
        value:this.customer.level,
        options:new OptionsMaker().makeOptionFromArray(configs.accessLevel.map(role=>{
          return role.key
        }))
      })
    ]
  }

  dismiss(v?:Customer){
    return this.modalCtrl.dismiss(v)
  }

  filter(ev){
    console.log("typing",ev)
  }
  submit(ev){
    console.log("submit",ev)
  }

}
