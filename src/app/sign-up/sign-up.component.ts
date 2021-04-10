import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  constructor(private fb: FormBuilder) {
  }


  data1 = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  base = [
    {
      username: "Alfreds Futterkiste",
      password: 123
    },
    {
      username:"admin",
      password:123
    }
  ];

  page() {
    for (let i = 0; i < this.base.length; i++)
    {

      let username = this.base[i].username;
      let password = this.base[i].password;

      if (username == this.data1.controls['username'].value && password == this.data1.controls['password'].value) {
        window.location.assign('http://localhost:4200/data');
      }
    }



  }



  display() {
    console.log(this.data1.value);
  }

  ngOnInit(): void {
  }




}
