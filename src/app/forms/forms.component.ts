import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  data!:FormGroup;
  constructor(private fb:FormBuilder) { }

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
    /*let x:any=this.data.controls['password'].value;

    if(x.type === "password")
    {
      x.type="text"
    }
    else{
      x.type="password";
    }*/

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
