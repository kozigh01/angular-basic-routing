import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { Component2Component } from './component2/component2.component';
import { Subcomponent21Component } from './subcomponents/subcomponent2-1/subcomponent2-1.component';
import { Subcomponent22Component } from './subcomponents/subcomponent2-2/subcomponent2-2.component';

@NgModule({
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
  declarations: [Component2Component, Subcomponent21Component, Subcomponent22Component]
})
export class Feature2Module { }
