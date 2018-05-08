import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './feature1/component1/component1.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';
import { Component2Component } from './feature2/component2/component2.component';
import { Subcomponent21Component } from './feature2/subcomponents/subcomponent2-1/subcomponent2-1.component';
import { Subcomponent22Component } from './feature2/subcomponents/subcomponent2-2/subcomponent2-2.component';
// import { Component3Component } from './feature3/component3/component3.component';
// import { Subcomponent31Component } from './feature3/subcomponents/subcomponent3-1/subcomponent3-1.component';
// import { Subcomponent32Component } from './feature3/subcomponents/subcomponent3-2/subcomponent3-2.component';


const routes: Routes = [
  { path: '', redirectTo: 'component1/789', pathMatch: 'full' },
  { path: 'component1/:id', component: Component1Component },
  { path: 'feature3', loadChildren: 'app/feature3/feature3.module#Feature3Module', data: { preload: false } },
  // {
  //   path: 'feature3', component: Component3Component,
  //   children: [
  //     { path: '', component: Subcomponent31Component },
  //     { path: 'sub1/:a', component: Subcomponent31Component },
  //     { path: 'sub2/:b', component: Subcomponent32Component }
  //   ]
  // },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [RouteNotFoundComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
