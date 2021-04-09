import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {



  constructor(private route:ActivatedRoute) {
    const username:Observable<any>=route.params.pipe(map(p =>p.id));
    const email:Observable<any>=route.params.pipe(map(p =>p.email));
    const password:Observable<any>=route.params.pipe(map(p => p.password));
    const cpassword:Observable<any>=route.params.pipe(map(p =>p.cpassword));

    const data=route.data.pipe(map(d=>d.user));
  }

  ngOnInit(): void {
    //this.route.navigate(["/vav",{'data':data}]);


  }

}
