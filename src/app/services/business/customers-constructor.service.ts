import { Injectable } from '@angular/core';
import {Clerk} from "../../models/Clerk"
import { UsersType } from '../../models/usersType';
import { Customer } from 'src/app/models/Customer';
import { Athlete } from 'src/app/models/athlete';

@Injectable({
  providedIn: 'root'
})
export class CustomersFactoryService {

  constructor(
  ) { }

  makeCustomer(d: {}): Customer | Athlete |  Clerk {
    var customer: Customer | Athlete|Clerk
    if (d['userType'] == UsersType.athlete) {
      customer = new Athlete(d)
  
    }
    if (d['userType'] == UsersType.clerk) {
      customer = new Clerk(d)
    }
    if(d['usersType']==UsersType.scout){
      throw new Error("Case not implemented.")
    }
    if (d['userType']==undefined ) {
      customer = new Athlete(d)
    }
    return customer

  }
}
