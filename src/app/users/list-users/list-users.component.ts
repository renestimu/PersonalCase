import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  p: number = 1;
  users: User[];
  hideNoUser: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;
  constructor(private userService:UserService,private alertifyService:AlertifyService)  { }

  ngOnInit(): void {
    this.dataState();
    let s = this.userService.GetUsersList();
    s.snapshotChanges().subscribe((data) => {
      this.users = [];
      data.forEach((item) => {
        let a = item.payload.val();

        const keyField = '$key' as string;
        a[keyField]=item.key;
         this.users.push(a as User);
      });

    });
  }
  dataState() {
    this.userService
      .GetUsersList()
      .valueChanges()
      .subscribe((data) => {
        this.preLoader = false;
        if (data.length <= 0) {
          this.hideNoUser = false;
          this.noData = true;
        } else {
          this.hideNoUser = true;
          this.noData = false;
        }
      });
  }
  deleteUser(user:User) {
    if (window.confirm('Are sure you want to delete this user ?')) {
      this.userService.DeleteUser(user.$key);
      this.alertifyService.success(user.firstName + ' successfully deleted!');
    }
  }
}
