// import {Component, OnInit} from '@angular/core';
// import {MessageService} from "../../core/services/message.service";
// import {Annonce} from "../../core/models/annonce.model";
//
// @Component({
//   selector: 'app-admin-annonce',
//   templateUrl: './admin-annonce.component.html',
//   styleUrls: ['./admin-annonce.component.scss']
// })
// export class AdminAnnonceComponent implements OnInit{
//
//   annonce: Annonce = new Annonce();
//   constructor(private listannonces :MessageService) { }
//   ngOnInit(): void {
//
//     this.listannonces.getAdminAnnonces().subscribe((data:any)=>{
//         this.annonce=data;
//         console.log(this.annonce);
//       }
//     );
//   }
// }
//
//
import { Component, OnInit } from '@angular/core';
// Range Slider
import { Options } from '@angular-slider/ngx-slider';

import { topOffer } from '../../pages/catalog/rent/rent.model';
import { topOfferData } from '../../pages/catalog/rent/data';
import {AnnonceServiceService} from "../../core/services/annonce-service.service";
import {Annonce} from "../../core/models/annonce.model";
import {MessageService} from "../../core/services/message.service";
import Swal from "sweetalert2";
import {FileHandle} from "../../core/models/file-handle.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-annonce',
  templateUrl: './admin-annonce.component.html',
  styleUrls: ['./admin-annonce.component.scss']
})
export class AdminAnnonceComponent implements OnInit {

  filterCriteria: {
    idAnnnoce: 1,
    typeAnnonce: '',
    prix: 0,
    surface: 0,
    region: ''
  }

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  topOfferData!: topOffer[];
  longitude = 20.728218;
  latitude = 52.128973;
  dataCount: any;

  checkedVal: any[] = [];

  public images: string[] = [
    'assets/img/real-estate/catalog/01.jpg',
    'assets/img/real-estate/catalog/02.jpg',
    'assets/img/real-estate/catalog/03.jpg',
    'assets/img/real-estate/catalog/04.jpg',
    'assets/img/real-estate/catalog/05.jpg',
    'assets/img/real-estate/catalog/06.jpg',
    'assets/img/real-estate/catalog/07.jpg',
    'assets/img/real-estate/catalog/08.jpg',
    'assets/img/real-estate/catalog/09.jpg',
    'assets/img/real-estate/catalog/10.jpg',
    'assets/img/real-estate/catalog/11.jpg',
    'assets/img/real-estate/catalog/12.jpg',
    'assets/img/real-estate/catalog/13.jpg',
    'assets/img/real-estate/catalog/14.jpg',
    'assets/img/real-estate/catalog/15.jpg',
    'assets/img/real-estate/catalog/16.jpg',
    'assets/img/real-estate/catalog/17.jpg',
    'assets/img/real-estate/catalog/18.jpg',
  ];
  constructor(private annonceService: AnnonceServiceService, private router:Router) {
  }

  //annonce: Annonce = new Annonce();
annonces!: any[];


  annonce={
    categorie: '',
    region: '',
    ville: '',
 images: '',
    adresse: '',
    surface: '',
    description: '',
    prix: '',
    etat: '',
    numTel:'',
    longitude:'',
    latitude:'',
    type_Annonce: '',
  }


  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      {label: 'Home', link: ''},
      {label: 'Property for rent', active: true}
    ];

    // Data Get Function
    this._fetchData();
    this.getAllRents();
    this.images = this.getImage();
  }
  public getImage(){
    return this.images
  }
  // Data Fetch
  private _fetchData() {
    this.dataCount = this.annonceService.getLocationAnnonce().subscribe((annonces) => {
      this.dataCount = annonces.length;
    });
    this.topOfferData = topOfferData;
    this.topOfferDatas = Object.assign([], this.topOfferData);
  }

  getAllRents(filter?: any) {
    this.annonceService.getLocationAnnonce(filter).subscribe(ans => {
      this.annonces = ans
      console.log(ans)
    })
  }

  // getAllRentsByRegion(region:string){
  //   this.annonceService.getLocationAnnonceParRegion(region).subscribe(ans =>{
  //     this.annonces=ans
  //     console.log(ans)
  //   })
  // }
  //
  // getRentsByTypeAnnonce(typeAnnonce:string){
  //   this.annonceService.getLocationAnnonceParTypeAnnonce(typeAnnonce).subscribe(ans =>{
  //     this.annonces=ans
  //     console.log(ans)
  //   })
  // }


  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true
  };

  /**
   * Filter button clicked
   */
  FilterSidebar() {
    document.getElementById('filters-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
  }

  /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    document.getElementById('filters-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  // Map Model Open
  openMapModal() {
    document.querySelector('.map-popup')?.classList.remove('invisible');
  }

  // Map Model Open
  closeMapModel() {
    document.querySelector('.map-popup')?.classList.add('invisible');
  }

  topOfferDatas: any;

  // Location Filter
  LocationSearch() {
    var location = document.getElementById("location") as HTMLInputElement;
    this.topOfferDatas = this.topOfferData.filter((data: any) => {
      return data.location === location.value;
    });
    this.dataCount = this.topOfferDatas.length;
  }

  // District Filter
  DistrictSearch() {
    var district = document.getElementById("district") as HTMLInputElement;
    this.topOfferDatas = this.topOfferData.filter((data: any) => {
      return data.district === district.value;
    });
    this.dataCount = this.topOfferDatas.length;
  }

  // Property  Filter
  // changeProperty(e:any, type:any) {
  //   if (e.target.checked) {
  //     this.checkedVal.push(type);
  //     this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.property));
  //   }
  //   else {
  //     var index = this.checkedVal.indexOf(type);
  //     if (index > -1) {
  //       this.checkedVal.splice(index, 1);
  //     }
  //     this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.property));
  //   }
  //   if (this.checkedVal.length == 0) {
  //     this.topOfferDatas = this.topOfferData
  //   }
  //   this.dataCount = this.topOfferDatas.length;
  // }

  /**
   * Range Slider Wise Data Filter
   */
    // Range Slider
  minValue: number = 1100;
  maxValue: number = 3000;
  options: Options = {
    floor: 0,
    ceil: 5000,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  valueChange(value: number, boundary: boolean): void {
    if (boundary) {
      this.minValue = value;
    } else {
      this.maxValue = value;
      this.topOfferDatas = this.topOfferData.filter((data: any) => {
        data.price = data.price.replace(/,/g, '')
        return data.price >= this.minValue && data.price <= this.maxValue;
      });
    }
    this.dataCount = this.topOfferDatas.length;
  }

  // Bed-Rooms  Filter
  bedrooms(value: any) {
    if (value > 3) {
      this.topOfferDatas = this.topOfferData.filter((data: any) => {
        return data.bad >= value;
      });
    } else {
      this.topOfferDatas = this.topOfferData.filter((data: any) => {
        return data.bad === value;
      });
    }
    this.dataCount = this.topOfferDatas.length;
  }

  // Bed-Rooms  Filter
  bathrooms(value: any) {
    this.topOfferDatas = this.topOfferData.filter((data: any) => {
      return data.bath === value;
    });
    this.dataCount = this.topOfferDatas.length;
  }

  // Square metres Filter
  minMeters: any | undefined;
  maxMeters: any | undefined;

  metresSearch() {
    this.minMeters = document.getElementById("minValue") as HTMLAreaElement;
    this.maxMeters = document.getElementById("maxValue") as HTMLAreaElement;
    this.topOfferDatas = this.topOfferData.filter((data: any) => {
      return data.metres >= this.minMeters.value && data.metres <= this.maxMeters.value;
    });
    this.dataCount = this.topOfferDatas.length;
  }

  // Additional options Filter
  additionalOptions(e: any, type: any) {
    if (type === 'Featured') {
      this.checkedVal.push(type);
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.btn));
    } else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.btn));
    }
    if (this.checkedVal.length == 0) {
      this.topOfferDatas = this.topOfferData
    }
    this.dataCount = this.topOfferDatas.length;

    if (type === 'Verified') {
      this.checkedVal.push(type);
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.verified_btn));
    } else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.verified_btn));
    }
    if (this.checkedVal.length == 0) {
      this.topOfferDatas = this.topOfferData
    }
    this.dataCount = this.topOfferDatas.length;
  }

  // Property  Filter
  AmenitiesFilter(e: any, type: any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.amenities));
    } else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.amenities));
    }
    if (this.checkedVal.length == 0) {
      this.topOfferDatas = this.topOfferData
    }
    this.dataCount = this.topOfferDatas.length;
  }

  // Property  Filter
  PentsFilter(e: any, type: any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.pents));
    } else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.pents));
    }
    if (this.checkedVal.length == 0) {
      this.topOfferDatas = this.topOfferData
    }
    this.dataCount = this.topOfferDatas.length;
  }

  // Sort filter
  sortField: any;
  sortBy: any

  SortFilter() {
    this.sortField = (document.getElementById("sortby") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

  // deleteAnnonce(qId: any) {
  //   Swal.fire({
  //     icon: 'info',
  //     title: 'Are you sure?',
  //     confirmButtonText: 'Delete',
  //     showCancelButton: true,
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.annonceService.DeleteAdminAnnonce(qId).subscribe(
  //         (data) => {
  //           this.annonces = this.annonces.filter(
  //             (annonce) => annonce.IdAnnnoce !== qId
  //           );
  //           Swal.fire('Success', 'Announcement deleted', 'success');
  //         },
  //         (error) => {
  //           Swal.fire('Error!', 'Error in deleting announcement', 'error');
  //         }
  //       );
  //     }
  //   });
  //
  // }

  // deleteAnnonce(id: any) {
  //   Swal.fire({
  //     icon: 'info',
  //     title: 'Are you sure?',
  //     confirmButtonText: 'Delete',
  //     showCancelButton: true,
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       this.annonceService.DeleteAdminAnnonce(id).subscribe(
  //         () => {
  //           const index = this.annonces.findIndex((annonce) => annonce.id === id);
  //           if (index !== -1) {
  //             this.annonces.splice(index, 1);
  //           }
  //           Swal.fire('Success', 'Annonce deleted', 'success');
  //         },
  //         (error) => {
  //           Swal.fire('Error !!', 'Error in deleting annonce', 'error');
  //         }
  //       );
  //     }
  //   });
  // }
  // deleteAnnonce(titre: string) {
  //   this.annonceService.DeleteAdminAnnonce(titre).subscribe(
  //     () => {
  //       // Handle success (e.g., show a success message, update UI, etc.)
  //       console.log('Annonce deleted successfully.');
  //     },
  //     (error) => {
  //       // Handle error (e.g., show an error message, log the error, etc.)
  //       console.error('Error deleting annonce.', error);
  //     }
  //   );
  // }

  deleteAnnonce(titre: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This annonce will be deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success',
          'Annonce deleted',
        ); this.annonceService.DeleteAdminAnnonce(titre).subscribe(
          () => {
            this.annonces = this.annonces.filter(annonce => annonce.titre !== titre);

            // Handle success (e.g., show a success message, update UI, etc.)
            console.log('Annonce deleted successfully.');
            this.getAllRents(); // Refresh the list from the backend
            window.location.reload();
          },
          (error) => {
            // Handle error (e.g., show an error message, log the error, etc.)
            console.error('Error deleting annonce.', error);
          }
        )   // Place your delete logic here
      }
    });
  }

}
