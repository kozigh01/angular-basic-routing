import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Component1Component } from './component1/component1.component';

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule
  ],
  declarations: [Component1Component]
})
export class Feature1Module { }
