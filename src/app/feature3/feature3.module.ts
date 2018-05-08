import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature3RoutingModule } from './feature3-routing.module';
import { Component3Component } from './component3/component3.component';
import { Subcomponent31Component } from './subcomponents/subcomponent3-1/subcomponent3-1.component';
import { Subcomponent32Component } from './subcomponents/subcomponent3-2/subcomponent3-2.component';

@NgModule({
  imports: [
    CommonModule,
    Feature3RoutingModule
  ],
  declarations: [Component3Component, Subcomponent31Component, Subcomponent32Component]
})
export class Feature3Module { }
