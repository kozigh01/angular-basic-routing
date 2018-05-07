import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component2Component } from './component2/component2.component';
import { Subcomponent21Component } from './subcomponents/subcomponent2-1/subcomponent2-1.component';
import { Subcomponent22Component } from './subcomponents/subcomponent2-2/subcomponent2-2.component';

const routes: Routes = [
  // { path: '', component: Component2Component },
  // { path: 'component2', component: Component2Component },
  {
    path: 'component2/:fname',
    component: Component2Component,
    children: [
      { path: 'subcomponent1/:occupation', component: Subcomponent21Component },
      { path: 'subcomponent2/:location', component: Subcomponent22Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
