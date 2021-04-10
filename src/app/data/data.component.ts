import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {



  constructor(private route: ActivatedRoute, private router: Router) {
  }

  info = [
    {
      'id': 1,
      'username': 'Alfreds Futterkiste',
      'email': 'alfredsfutterkiste@gmail.com',
      'password': 12345,
      'confirm': 12345
    },

    {
      'id': 2,
      'username': 'Around the Horn',
      'email': 'aroundthehorn@gmail.com',
      'password': 12345,
      'confirm': 12345
    },

    {
      'id': 3,
      'username': 'Around the Horn',
      'email': 'aroundthehorn@gmail.com',
      'password': 12345,
      'confirm': 12345
    },

    {
      'id': 4,
      'username': 'Alfreds Futterkiste',
      'email': 'alfredsfutterkiste@gmail.com',
      'password': 12345,
      'confirm': 12345
    },
  ]

  onSelect(info1: any) {
    this.router.navigate(['/result', info1.id]);
  }

  ngOnInit(): void {

  }

}
