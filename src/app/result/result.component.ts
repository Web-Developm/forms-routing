import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public resultId!:any;

  constructor(private route:ActivatedRoute, private router:Router) {

   }

  ngOnInit(): void {
    let id=this.route.params.subscribe((params:any)=>{
      this.resultId=JSON.parse(params['id']) ;
    });

    console.log(this.resultId);

  }

}
