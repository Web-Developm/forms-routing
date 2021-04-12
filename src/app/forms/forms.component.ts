import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  data!:FormGroup;

  showpassword!:boolean;
  confirmpassword!:boolean;

  constructor(private fb:FormBuilder) {
   }

  forms()
  {
    this.data=this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      cpassword:['',[Validators.required]]
    })
  }

  show()
  {
    this.showpassword=!this.showpassword;
  }

  show1()
  {
    this.confirmpassword=!this.confirmpassword;
  }

  display()
  {
    console.log(this.data.value);
    this.data.reset();

  }

  ngOnInit(): void {
    this.forms();
  }

}
