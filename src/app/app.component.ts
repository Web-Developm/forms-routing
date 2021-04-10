import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:ActivatedRoute, private router:Router)
  {

  }

  title()
  {
    this.router.navigate(['title'], {relativeTo:this.route});
  }

  signin()
  {
    this.router.navigate(['forms'], {relativeTo:this.route});
  }

  signup()
  {
    this.router.navigate(['sign-up'], {relativeTo:this.route})
  }

  data()
  {
    this.router.navigate(['data'],{relativeTo: this.route});
  }

}
