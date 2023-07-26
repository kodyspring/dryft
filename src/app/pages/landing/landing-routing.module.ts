import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  { path: "about", loadChildren: () => import('../../pages/about-us/about-us.module').then((m) => m.AboutUsModule), data: { breadcrumb: 'about' }, },
  { path: "contact", loadChildren: () => import('../../pages/contact/contact.module').then((m) => m.ContactModule), data: { breadcrumb: 'contact' }, },
  { path: "solutions", loadChildren: () => import('../../pages/solutions/solutions.module').then((m) => m.SolutionsModule), data: { breadcrumb: 'solutions' }, },
  { path: "**", component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
