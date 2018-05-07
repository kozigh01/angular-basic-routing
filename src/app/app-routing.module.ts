import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './feature1/component1/component1.component';
import { RouteNotFoundComponent } from './route-not-found/route-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'component1', pathMatch: 'full' },
  { path: 'component1', component: Component1Component },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [RouteNotFoundComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
