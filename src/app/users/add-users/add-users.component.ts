import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})

export class AddUsersComponent implements OnInit {

  public userForm: FormGroup;

  buttonText: string = "Add User"
  editUserActive = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {

    console.log(this.userForm)

    this.userForms();
    this.activatedRoute.params.subscribe(params => {

      console.log(params["id"])
      if (params["id"]) {


        this.userService
          .GetUser(params["id"])
          .valueChanges()
          .subscribe((data) => {
            if (data != null) {
              this.userForm.setValue(data);
              this.changeAddAndUpdate();
            } else {
              this.ResetForm();
            }
          });
      } else {
        this.ResetForm();
      }
    })


  }

  userForms() {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ]

    });
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }


  ResetForm() {
    console.log("ge");
    this.buttonText = "Add User"
    this.editUserActive = false;
    this.userForm.reset();
    this.userForm.get("firstName")?.setValue("");
    this.userForm.get("lastName")?.setValue("");
    this.userForm.get("email")?.setValue("");


  }

  submitUser() {

    if (!this.editUserActive) {
      this.userService.AdddUser(this.userForm.value);
      this.alertifyService.success(
        this.userForm.controls['firstName'].value + ' successfully added!'
      );
      this.ResetForm();
    } else {

      this.updateForm();

    }


  }
  updateForm() {
    this.userService.UpdateUser(this.userForm.value);
    this.alertifyService.success(
      this.userForm.controls['firstName'].value + ' successfully updated!'
    );
    this.location.replaceState('add-user');
    setTimeout(() => {this.ResetForm()}, 10);

  }

  changeAddAndUpdate() {
    this.buttonText = "Update User"
    this.editUserActive = true;
  }
}
