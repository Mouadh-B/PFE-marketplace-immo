// import { Component, OnInit } from '@angular/core';
// import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
// import {MessageService} from "../../../core/services/message.service";
// import Swal from 'sweetalert2';
// import {HttpClient} from "@angular/common/http";
// @Component({
//   selector: 'app-contacts',
//   templateUrl: './contacts.component.html',
//   styleUrls: ['./contacts.component.scss']
// })
//
// /**
//  * Contacts Component
//  */
// export class ContactsComponent implements OnInit {
//
//   Message={
//     name: 'khouloud',
//     email: 'khouloud@gmail.com',
//     message: ''
//   }
//
//   // bread crumb items
//   breadCrumbItems!: Array<{}>;
//   //  Validation form
//   validationform!: UntypedFormGroup;
//   submit!: boolean;
//   formsubmit!: boolean;
//
//   constructor(private formBuilder: UntypedFormBuilder,private addmessage : MessageService ,private http: HttpClient) { }
//
//   ngOnInit(): void {
//
//     /**
//    * BreadCrumb
//    */
//      this.breadCrumbItems = [
//       { label: 'Home', link:'' },
//       { label: 'Contact us', active: true }
//     ];
//
//     /**
//      * Bootstrap validation form data
//      */
//      this.validationform = this.formBuilder.group({
//       name: ['', [Validators.required]],
//       email: ['', [Validators.required]],
//       message: ['', [Validators.required]],
//     });
//   }
//
//   /**
//   * Bootsrap validation form submit method
//   */
//    validSubmit() {
//     this.submit = true;
//   }
//
//   /**
//  * Returns form
//  */
//   get form() {
//     return this.validationform.controls;
//   }
//
//   forSubmit(){
//
//     this.addmessage.addMessage(this.Message).subscribe((data:any)=>{
//         Swal.fire('Success','message sent','success')
//         this.Message.name=''
//         this.Message.email=''
//         this.Message.message=''
//
//       },
//       (error)=>{
//         Swal.fire('error','message not sent','error')
//       }
//     )
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MessageService } from "../../../core/services/message.service";
import Swal from 'sweetalert2';
import { HttpClient } from "@angular/common/http";

import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },JwtHelperService]
})
export class ContactsComponent implements OnInit {
  Message = {
    name: '',
    email: '',
    message: ''
  };

  breadCrumbItems!: Array<{}>;
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private addmessage: MessageService,
    private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Contact us', active: true }
    ];

    this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });

  }

  validSubmit() {
    this.submit = true;
  }

  get form() {
    return this.validationform.controls;
  }

  getUserInfo(): void {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.Message.name = decodedToken.name; // Assuming the name property is present in the token payload
      this.Message.email = decodedToken.email; // Assuming the email property is present in the token payload
    }
  }

  forSubmit() {
    this.addmessage.addMessage(this.Message).subscribe(
      (data: any) => {
        Swal.fire('Success', 'message sent', 'success');
        this.Message.name = '';
        this.Message.email = '';
        this.Message.message = '';
      },
      (error) => {
        Swal.fire('error', 'message not sent', 'error');
      }
    );
  }
}
