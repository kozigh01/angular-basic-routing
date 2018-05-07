import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'md-subcomponent2-2',
  templateUrl: './subcomponent2-2.component.html',
  styleUrls: ['./subcomponent2-2.component.scss']
})
export class Subcomponent22Component implements OnInit {
  location: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.location = params.get('location');
    });
  }

}
