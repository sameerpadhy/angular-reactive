import { Component ,OnInit} from "@angular/core";
import {Customer} from "./customer"
import {NgForm} from "@angular/forms"
import {FormGroup,FormControl} from "@angular/forms"
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
@Component({
    templateUrl:'customer-template-driven.component.html',
    selector:'app-customer'
    

})
export class CustomerComponent implements OnInit{
    customer = new Customer();

    constructor() { }
  
    ngOnInit() {
    }
  
    save(customerForm: NgForm) {
      console.log(customerForm.form);
      console.log('Saved: ' + JSON.stringify(customerForm.value));
    }
  
}