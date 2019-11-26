import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private payment: PaymentService) { }

  ngOnInit() {
  }
register(){
  let username="aa";
  let password="ss";
this.payment.accountCreation(username,password);
}
}
