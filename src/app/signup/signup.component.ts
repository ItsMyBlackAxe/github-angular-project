import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  email: string;
  password: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    console.log('Submitted:', this.name, this.email, this.password);
  }

  ngOnInit(): void {
  }

}
