import { Component } from "@angular/core";
import {FormGroup, FormControl, NgForm} from "@angular/forms"
import { Customer } from "./customer";

@Component({
    templateUrl:'customer-reactive-driven.component.html',
    selector:'customer-reactive-form'
})
export class CustomerReactiveComponent{

     customerForm: FormGroup;
     customer: Customer=new Customer();
    constructor(){
        this.customerForm=new FormGroup({

            fistName: new FormControl(),
            lastname: new FormControl(),
            email: new FormControl(),
            sendCatalog: new FormControl(false)});
}

save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }
}