import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component2Component } from './component2/component2.component';
import { Subcomponent21Component } from './subcomponents/subcomponent2-1/subcomponent2-1.component';

const routes: Routes = [
  {
    path: '',
    component: Component2Component,
    children: [
      { path: 'subcomponent1', component: Subcomponent21Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
