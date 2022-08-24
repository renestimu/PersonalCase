import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users/add-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddUsersComponent,
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class UsersModule { }
