import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { CreateCustomerPage } from '../../new/create-customer/create-customer.page';
import { EditCustomerPage } from '../../update/edit-customer/edit-customer.page';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.page.html',
  styleUrls: ['./customers-list.page.scss'],
})
export class CustomersListPage implements OnInit {

  editModalPage= EditCustomerPage
  createModalPage = CreateCustomerPage
filterFunction =(customer:Customer)=>{
  return true
  
}
  constructor(
    public service:CustomersService
  ) { }

  ngOnInit() {
  }

}
