import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './feature1/component1/component1.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { Component2Component } from './feature2/component2/component2.component';
import { Subcomponent21Component } from './feature2/subcomponents/subcomponent2-1/subcomponent2-1.component';
import { Subcomponent22Component } from './feature2/subcomponents/subcomponent2-2/subcomponent2-2.component';

const routes: Routes = [
  { path: '', redirectTo: 'component1/789', pathMatch: 'full' },
  { path: 'component1/:id', component: Component1Component },
  // {
  //   path: 'component2/:fname',
  //   component: Component2Component,
  //   children: [
  //     { path: 'subcomponent1/:occupation', component: Subcomponent21Component },
  //     { path: 'subcomponent2/:location', component: Subcomponent22Component }
  //   ]
  // },
  { path: 'component2/:id', redirectTo: '/component2', pathMatch: 'full' },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [RouteNotFoundComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
