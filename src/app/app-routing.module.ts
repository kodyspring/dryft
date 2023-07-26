import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingModule), data: { breadcrumb: 'home' }, },
  { path: "**", loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingModule), data: { breadcrumb: 'home' }, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
