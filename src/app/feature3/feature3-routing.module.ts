import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component3Component } from './component3/component3.component';
import { Subcomponent31Component } from './subcomponents/subcomponent3-1/subcomponent3-1.component';
import { Subcomponent32Component } from './subcomponents/subcomponent3-2/subcomponent3-2.component';

const routes: Routes = [
  {
    path: '', component: Component3Component,
    children: [
      { path: '', component: Component3Component }
    ]
    // children: [
    //   { path: 'sub1', component: Subcomponent31Component },
    //   { path: 'sub2', component: Subcomponent32Component }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature3RoutingModule { }
