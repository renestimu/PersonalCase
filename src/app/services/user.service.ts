import { Injectable } from '@angular/core';
import {  AngularFireDatabase,  AngularFireList,  AngularFireObject} from '@angular/fire/compat/database';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersList: AngularFireList<any>;
  userObj: AngularFireObject<any>;
  constructor(private db:AngularFireDatabase) { }

  AdddUser(user: User) {
    this.usersList.push({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  }
  GetUser(id: string) {
    this.userObj = this.db.object('users-list/' + id);
    return this.userObj;
  }
  GetUsersList() {
    this.usersList = this.db.list('users-list');
    return this.usersList;
  }

  UpdateUser(user: User) {
    this.userObj.update({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    });
  }
  DeleteUser(id: string) {
    this.userObj = this.db.object('users-list/' + id);
    this.userObj.remove();
  }
}
