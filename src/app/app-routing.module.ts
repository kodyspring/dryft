import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  { path: "home", loadChildren: () => import('./pages/landing/landing.module').then((m) => m.LandingModule), data: { breadcrumb: 'home' }, },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
