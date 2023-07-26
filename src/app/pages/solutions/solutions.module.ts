import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import { HeaderModule } from 'src/app/core/components/header/header.module';


@NgModule({
  declarations: [
    SolutionsComponent
  ],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    HeaderModule
  ],
  exports: [
    SolutionsComponent
  ]
})
export class SolutionsModule { }
