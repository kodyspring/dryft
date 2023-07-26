import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AboutUsModule } from '../about-us/about-us.module';
import { ContactModule } from '../contact/contact.module';
import { SolutionsModule } from '../solutions/solutions.module';
import { HeaderModule } from 'src/app/core/components/header/header.module';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    AboutUsModule,
    ContactModule,
    SolutionsModule,
    HeaderModule
  ],
  exports: [
    LandingComponent
  ]
})
export class LandingModule { }
