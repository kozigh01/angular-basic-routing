import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'md-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  firstname: string;
  lastname: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.firstname = params.get('fname');
    });
    this.route.queryParamMap.subscribe(params => {
      this.lastname = params.get('lname');
    });
  }

}
