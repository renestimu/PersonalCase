import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
