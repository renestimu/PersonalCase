import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-user', pathMatch: 'full' },
  { path: 'add-user', component: AddUsersComponent },
  { path: 'edit-user/:id', component: AddUsersComponent },
  { path: 'view-users', component: ListUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
