import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users/add-users.component';
import { ListUsersComponent } from './list-users/list-users.component';



@NgModule({
  declarations: [
    AddUsersComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
