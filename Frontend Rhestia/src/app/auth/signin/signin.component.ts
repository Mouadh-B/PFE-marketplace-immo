import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {UtilisateurServiceService} from "../../core/services/utilisateur-service.service";
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import {Utilisateur} from "../../core/models/utilisateur.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },JwtHelperService]

})


/**
 * Signin Component
 */
export class SigninComponent implements OnInit {

  fieldTextType!: boolean;
  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  utilisateur:Utilisateur = new Utilisateur();

  constructor(private formBuilder: UntypedFormBuilder , private userserviec: UtilisateurServiceService, private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    localStorage.clear();
     /**
     * Bootstrap validation form data
     */
      this.validationform = this.formBuilder.group({
        nomUtilisateur: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
      });

    document.body.classList.add('bg-secondary');
  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  /**
  * Bootsrap validation form submit method
  */
   validSubmit() {
    this.submit = true;
    this.userserviec.login(this.validationform.value).subscribe(res=>{
      console.log(res.token);
      localStorage.setItem('id',this.jwtHelper.decodeToken(res.token).id);
      localStorage.setItem('role',this.jwtHelper.decodeToken(res.token).role);
      localStorage.setItem('name',this.jwtHelper.decodeToken(res.token).name);
      localStorage.setItem('email',this.jwtHelper.decodeToken(res.token).email);
      localStorage.setItem('isActive',this.jwtHelper.decodeToken(res.token).isActive);

      localStorage.setItem('token', res.token);  // on passe token , role , id dans localstorage
      // if (this.jwtHelper.decodeToken(res.token).role === 'ADMIN') {
      //   window.location.href = 'http://localhost:4200/adminuser'; // Redirect to the admin user page
      // } else if (this.jwtHelper.decodeToken(res.token).role === 'USER') {
      //   window.location.href = 'http://localhost:4200'; // Redirect to the default user page
      // }
      if (this.jwtHelper.decodeToken(res.token).role === 'ADMIN') {
        window.location.href = 'http://localhost:4200/adminuser'; // Redirect to the admin user page
      } else if (this.jwtHelper.decodeToken(res.token).role === 'USER') {
        if (this.jwtHelper.decodeToken(res.token).isActive === false) {
          Swal.fire({
            title: 'User Blocked',
            text: 'Your account has been blocked.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          window.location.href = 'http://localhost:4200'; // Redirect to the default user page
        }
      }

    })
  }

  /**
 * Returns form
 */
  get form() {
    return this.validationform.controls;
  }

}
