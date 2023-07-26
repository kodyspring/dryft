import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
