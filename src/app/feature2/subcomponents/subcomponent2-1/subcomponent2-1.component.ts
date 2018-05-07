import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'md-subcomponent2-1',
  templateUrl: './subcomponent2-1.component.html',
  styleUrls: ['./subcomponent2-1.component.scss']
})
export class Subcomponent21Component implements OnInit {
  occupation: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.occupation = params.get('occupation');
    });
  }

}
