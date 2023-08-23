import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EventService } from '../../core/services/event.service';

import { Router, NavigationEnd } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MENU } from './menu';
import { MenuItem } from './menu.model';
import {AnnonceServiceService} from "../../core/services/annonce-service.service";
import {UtilisateurServiceService} from "../../core/services/utilisateur-service.service";
import {Appartement} from "../../core/models/appartement.model";
import {Utilisateur} from "../../core/models/utilisateur.model";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {Annonce} from "../../core/models/annonce.model";
import { FormGroup, FormControl } from '@angular/forms';
import Swal from "sweetalert2";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },JwtHelperService]
})

/**
 * Header Component
 */
export class HeaderComponent implements OnInit {
  mode: string | undefined;
  loginPassfield!: boolean;
  signupPassfield!: boolean;
  signupCPassfield!: boolean;
  password!: string;
  menuItems: MenuItem[] = [];
  //  Validation form
  validationform!: UntypedFormGroup;
  signUpform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
  public submitted = false;
  fieldTextType!: boolean;
  //  Validation form


  utilisateur:Utilisateur = new Utilisateur();

  @ViewChild('sideMenu') sideMenu!: ElementRef;

  constructor(private utilisateurServiceService:UtilisateurServiceService,private router: Router,private modalService: NgbModal, private eventService: EventService, private formBuilder: UntypedFormBuilder,private jwtHelper: JwtHelperService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activateMenu();
      }
    });
  }

  ngOnInit(): void {
     //localStorage.clear();
    /**
     * Bootstrap validation form data
     */
     this.validationform = this.formBuilder.group({
       nomUtilisateur: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    /**
     * Bootstrap validation form data
     */
    //  this.signUpform = this.formBuilder.group({
    //    nom: ['', Validators.required],
    //    nomUtilisateur: ['', Validators.required],
    //    genre: ['', Validators.required],
    //    etatCivil: ['', Validators.required],
    //    adresse: ['', Validators.required],
    //    numTel: ['', Validators.required],
    //    email: ['', [Validators.required, Validators.email]],
    //    password: ['', [Validators.required, Validators.minLength(8)]],
    //    confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    // });
    this.signUpform = this.formBuilder.group({
      nom: ['', [Validators.required]],
      nomUtilisateur: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      etatCivil: ['', [Validators.required]],
      numTel: ['', [Validators.required]],
      dateDeNaissance:['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: new FormControl('', Validators.required),
    }, { validators: this.passwordMatchValidator });

    // Menu Items
    this.menuItems = MENU;
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      return null; // Passwords match, validation successful
    } else {
      return { mismatch: true }; // Passwords don't match, validation error
    }
  }

  // Inscription(): void {
  //   this.utilisateurServiceService.inscription(this.utilisateur)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.submitted = true;
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }
  Inscription(): void {
    this.utilisateurServiceService.inscription({...this.utilisateur, ...this.signUpform?.value})
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submit = true;
        },
        error: (e) => console.error(e)
      });
  }
  formSubmit() {
    this.Inscription();
  }
  // formSubmit() {
  //   this.utilisateur = {
  //     nom: this.signUpform.value.nom,
  //     nomUtilisateur: this.signUpform.value.nomUtilisateur,
  //     genre: this.signUpform.value.genre,
  //     etatCivil: this.signUpform.value.etatCivil,
  //     adresse: this.signUpform.value.adresse,
  //     numTel: this.signUpform.value.numTel,
  //     email: this.signUpform.value.email,
  //     password: this.signUpform.value.password,
  //     dateDeNaissance: new Date(), // Provide a valid date value here
  //     roles: 'USER', // Provide the appropriate roles value here
  //     type_utilisateur: '', // Provide the appropriate type_utilisateur value here
  //     annonces: new Annonce(), // Provide the appropriate value for annonces property
  //     isActive: true // Provide the appropriat
  //   };
  //   this.Inscription();
  // }

   /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.querySelector('.navbar');
    if (document.documentElement.scrollTop > 40) {
      navbar?.classList.add('navbar-stuck');
      document.querySelector('.btn-scroll-top')?.classList.add('show');
    }
    else {
      navbar?.classList.remove('navbar-stuck');
      document.querySelector('.btn-scroll-top')?.classList.remove('show');
    }
  }

  /**
   * Open scroll modal
   * @param toggleDataModal scroll modal data
   */
   toggleModal(staticDataModal: any) {
    this.modalService.open(staticDataModal, { size: 'lg', centered: true });
  }
  toggleModal2(staticDataModal: any) {
    this.modalService.dismissAll(staticDataModal);
  }
  secondModal(toggleSecondModal: any) {
    this.modalService.open(toggleSecondModal, { size: 'lg', centered: true });
  }

  /**
   * Password Hide/Show
   */
   toggleLoginPassField() {
    this.loginPassfield = !this.loginPassfield;
  }

  /**
   * Password Hide/Show
   */
   toggleSignUpPassField() {
    this.signupPassfield = !this.signupPassfield;
  }

  /**
   * Password Hide/Show
   */
   toggleSignUpCPassField() {
    this.signupCPassfield = !this.signupCPassfield;
  }


   /**
  * On menu click
  */
    onMenuClick(event: any) {
      const nextEl = event.target.nextElementSibling;
      if (nextEl) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove('show');
        }
        nextEl.classList.toggle('show');
      }
      return false;
    }

    ngAfterViewInit() {
      this.activateMenu();
    }

    /**
    * Activates the menu
    */
    private activateMenu() {
      const resetParent = (el: any) => {
        const parent = el.parentElement;
        if (parent) {
          parent.classList.remove('active');
          const parent2 = parent.parentElement;
          this._removeAllClass('mm-active');
          this._removeAllClass('mm-show');
          if (parent2) {
            parent2.classList.remove('active');
            const parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.remove('active');
              const parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.remove('active');
                const parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.remove('active');
                  const menuelement = document.getElementById(
                    'topnav-menu-content'
                  );
                  if (menuelement !== null)
                    if (menuelement.classList.contains('show'))
                      document
                        .getElementById('topnav-menu-content')!
                        .classList.remove('show');
                }
              }
            }
          }
        }
      };

      // activate menu item based on location
      const links: any = document.getElementsByClassName('side-nav-link-ref');
      let matchingMenuItem = null;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < links.length; i++) {
        // reset menu
        resetParent(links[i]);
      }
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < links.length; i++) {
        // tslint:disable-next-line: no-string-literal
        if (location.pathname === links[i]['pathname']) {
          matchingMenuItem = links[i];
          break;
        }
      }

      if (matchingMenuItem) {
        const parent = matchingMenuItem.parentElement;
        if (parent) {
          parent.classList.add('active');
          const parent2 = parent.parentElement;
          if (parent2) {
            parent2.classList.add('active');
            const parent3 = parent2.parentElement;
            if (parent3) {
              parent3.classList.add('active');
              const parent4 = parent3.parentElement;
              if (parent4) {
                parent4.classList.add('active');
                const parent5 = parent4.parentElement;
                if (parent5) {
                  parent5.classList.add('active');
                }
              }
            }
          }
        }
      }
    }

    /**
    * remove active and mm-active class
    */
    _removeAllClass(className: any) {
      const els = document.getElementsByClassName(className);
      while (els[0]) {
        els[0].classList.remove(className);
      }
    }

    /**
    * Topbar Light-Dark Mode Change
    */
    changeMode(mode: string) {
      this.mode = mode;
      this.eventService.broadcast('changeMode', mode);

      switch (mode) {
        case 'light':
          document.body.setAttribute('data-layout-mode', "light");
          document.body.setAttribute('data-sidebar', "light");
          break;
        case 'dark':
          document.body.setAttribute('data-layout-mode', "dark");
          document.body.setAttribute('data-sidebar', "dark");
          break;
        default:
          document.body.setAttribute('data-layout-mode', "light");
          break;
      }
    }

     /**
  * Returns true or false if given menu item has child or not
  * @param item menuItem
  */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * On mobile toggle button clicked
   */
   toggleMobileMenu() {
    if (window.screen.width <= 1024) {
      document.getElementById('navbarNav')?.classList.toggle('show');
    }
  }

   /**
  * Bootsrap validation form submit method
  */
   validSubmit() {
     this.submit = true;
     this.utilisateurServiceService.login(this.validationform.value).subscribe(res=>{
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

  // validSubmit22() {
  //   this.formsubmit = true;
  //
  //   if (this.validationform.invalid) {
  //     return;
  //   }
  //
  //   this.utilisateurServiceService.login(this.validationform.value).subscribe(res => {
  //     console.log(res.token);
  //     const token = res.token;
  //
  //     localStorage.setItem('token', token); // Store the token in local storage
  //
  //     // Decode the token to extract the role
  //     const decodedToken = this.jwtHelper.decodeToken(token);
  //     const role = decodedToken.role;
  //
  //     localStorage.setItem('role', role); // Store the role in local storage
  //
  //     if (role === 'ADMIN') {
  //       window.location.href = 'http://localhost:4200/adminuser'; // Redirect to the admin user page
  //     } else if (role === 'USER') {
  //       window.location.href = 'http://localhost:4200'; // Redirect to the default user page
  //     }
  //   });
  // }


  /**
   * Returns form
   */
    get form() {
      return this.validationform.controls;
    }

  /**
   * Bootstrap tooltip form validation submit method
   */


  /**
   * returns tooltip validation form
   */
   get formData() {
    return this.signUpform.controls;
  }

   /**
  * Demos Onclick
  */
  demosDroupDownClick() {
    document.querySelector('.demos')?.classList.toggle('show');
  }

}
