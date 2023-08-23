import { Component, OnInit } from '@angular/core';

// Range Slider
import { Options } from '@angular-slider/ngx-slider';
// Range Slider

import { topOffer } from '../../pages/catalog/rent/rent.model';
import { topOfferData } from '../../pages/catalog/rent/data';
import {AnnonceServiceService} from "../../core/services/annonce-service.service";
import {Annonce} from "../../core/models/annonce.model";

import {Appartement} from "../../core/models/appartement.model";
import {Maison} from "../../core/models/maison.model";
import {Ferme} from "../../core/models/ferme.model";
import {Immeuble} from "../../core/models/immeuble.model";
import {Local} from "../../core/models/local.model";
import {Terrain} from "../../core/models/terrain.model";
import {Observable} from "rxjs";
import Swal from "sweetalert2";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})

/**
 * Sale Component
 */
export class SaleComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  topOfferData!: Annonce[];
  longitude = 20.728218;
  latitude = 52.128973;
  dataCount:any;
  checkedVal: any[] = [];

  annonce:Annonce = new Annonce();
  appartement:Appartement = new Appartement();
  maison:Maison = new Maison();
  ferme:Ferme = new Ferme();
  immeuble:Immeuble = new Immeuble();
  local:Local = new Local();
  terrain:Terrain = new Terrain();

  obs:Observable<Annonce>;


  public images: string[] = [
    // 'assets/img/real-estate/catalog/01.jpg',
    // 'assets/img/real-estate/catalog/02.jpg',
    // 'assets/img/real-estate/catalog/03.jpg',
    // 'assets/img/real-estate/catalog/04.jpg',
    // 'assets/img/real-estate/catalog/05.jpg',
    // 'assets/img/real-estate/catalog/06.jpg',
    // 'assets/img/real-estate/catalog/07.jpg',
    // 'assets/img/real-estate/catalog/08.jpg',
    // 'assets/img/real-estate/catalog/09.jpg',
    // 'assets/img/real-estate/catalog/10.jpg',
    // 'assets/img/real-estate/single/09.jpg',
    'assets/img/real-estate/catalog/11.jpg',
    'assets/img/real-estate/catalog/12.jpg',
    'assets/img/real-estate/catalog/13.jpg',
    'assets/img/real-estate/catalog/14.jpg',
    'assets/img/real-estate/catalog/15.jpg',
    'assets/img/real-estate/catalog/16.jpg',
    'assets/img/real-estate/catalog/17.jpg',
    'assets/img/real-estate/catalog/18.jpg',
    'assets/img/real-estate/single/08.jpg',

  ];
  constructor(private annonceService:AnnonceServiceService) { }
  annonces! : any[];


  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Property for sale', active: true }
    ];

    // Data Get Function
    this._fetchData();
    this.getAllSales();
    this.images = this.getImage();
  }
  public getImage(){
    return this.images
  }
  // Data Fetch
  private _fetchData() {
    this.annonces = topOfferData;
    this.topOfferDatas = Object.assign([], this.topOfferData);
    this.dataCount = this.annonceService.getVenteAnnonce().subscribe((annonces) => {
      this.dataCount = annonces.length;
    });
  }

  // getAllSales(filter?:any){
  //   this.annonceService.getVenteAnnonce(filter).subscribe(ans =>{
  //     this.annonces=ans
  //     console.log(ans)
  //   })
  // }

  getAllSales(filter?: any) {
    this.annonceService.getVenteAnnonce(filter).subscribe(ans => {
      this.annonces = ans;

      // After retrieving sales, move the newly added sale to the beginning
      if (this.annonces.length > 1) {
        const newlyAddedSale = this.annonces[this.annonces.length - 1];
        this.annonces.splice(this.annonces.length - 1, 1); // Remove the sale from the end
        this.annonces.unshift(newlyAddedSale); // Add the sale at the beginning
      }

      console.log(ans);
    });
  }




  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true
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
  openMapModal(){
    document.querySelector('.map-popup')?.classList.remove('invisible');
  }

  // Map Model Open
  closeMapModel(){
    document.querySelector('.map-popup')?.classList.add('invisible');
  }


  topOfferDatas:any;
  // Location Filter
  LocationSearch(){
    var location = document.getElementById("location") as HTMLInputElement;
    this.topOfferDatas = this.topOfferData.filter( (data:any) => {
      return data.location === location.value;
    });
    this.dataCount =  this.dataCount = this.annonceService.getVenteAnnonce().subscribe((annonces) => {
      this.dataCount = annonces.length;
    });
  }

  // District Filter
  DistrictSearch(){
    var district = document.getElementById("district") as HTMLInputElement;
    this.topOfferDatas = this.topOfferData.filter( (data:any) => {
      return data.district === district.value;
    });
    this.dataCount = this.topOfferDatas.length;
  }

  //Property  Filter
  // changeProperty(e:any, typeAnnonce:any) {
  //   if (e.target.checked) {
  //     this.filterCriteria.typeAnnonce;
  //     this.topOfferDatas = this.topOfferData.filter((data: any) => this.filterCriteria.includes(data.property));
  //   }
  //   else {
  //     var index = this.filterCriteria.;
  //     if (index > -1) {
  //       this.filterCriteria.splice(index, 1);
  //     }
  //     this.topOfferDatas = this.topOfferData.filter((data: any) => this.filterCriteria.includes(data.property));
  //   }
  //   if (this.filterCriteria.length == 0) {
  //     this.topOfferDatas = this.topOfferData
  //   }
  //   this.dataCount = this.topOfferDatas.length;
  //   this.getAllSales(this.filterCriteria)
  // }



  /**
   * Range Slider Wise Data Filter
   */
    // Range Slider
  minValue: number = 90000;
  maxValue: number = 250000;
  options: Options = {
    floor: 30000,
    ceil: 500000,
    translate: (value: number): string => {
      return '$' + value;
    }
  };
  valueChange(value: number, boundary: boolean): void {
    if (boundary) {
      this.minValue = value;
    } else {
      this.maxValue = value;
      this.topOfferDatas = this.topOfferData.filter( (data:any) => {
        data.price = data.price.replace(/,/g, '')
        return data.price >= this.minValue && data.price <= this.maxValue;
      });
    }
    this.dataCount = this.topOfferDatas.length;
  }

  // Bed-Rooms  Filter
  bedrooms(value:any) {
    if(value > 3){
      this.topOfferDatas = this.topOfferData.filter((data:any) => {
        return data.bad >= value;
      });
    }
    else{
      this.topOfferDatas = this.topOfferData.filter((data:any) => {
        return data.bad === value;
      });
    }
    this.dataCount = this.topOfferDatas.length;
  }

  // Bed-Rooms  Filter
  bathrooms(value:any) {
    this.topOfferDatas = this.topOfferData.filter((data:any) => {
      return data.bath === value;
    });
    this.dataCount = this.topOfferDatas.length;
  }

  // Square metres Filter
  minMeters:any | undefined;
  maxMeters:any | undefined;
  metresSearch() {
    this.minMeters = document.getElementById("minValue") as HTMLAreaElement;
    this.maxMeters = document.getElementById("maxValue") as HTMLAreaElement;
    this.topOfferDatas = this.topOfferData.filter( (data:any) => {
      return data.metres >= this.minMeters.value || data.metres <= this.maxMeters.value;
    });
    this.dataCount = this.topOfferDatas.length;
  }

  // Additional options Filter
  additionalOptions(e:any, type:any) {
    if (type === 'Featured') {
      //this.filterCriteria.typeAnnonce.push(type);
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.btn));
    }
    else{
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

    if (type === 'Verified'){
      this.checkedVal.push(type);
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.verified_btn));
    }
    else {
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
  AmenitiesFilter(e:any, type:any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.amenities));
    }
    else {
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
  PentsFilter(e:any, type:any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.topOfferDatas = this.topOfferData.filter((data: any) => this.checkedVal.includes(data.pents));
    }
    else {
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
  sortField:any;
  sortBy:any
  SortFilter(){
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

  deleteAnnonce(titre: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This candidate will be deleted.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Success',
          'Candidate deleted',
          // 'success'
        ); this.annonceService.DeleteAdminAnnonce(titre).subscribe(
          () => {

            this.annonces = this.annonces.filter(annonce => annonce.titre !== titre);

            // Handle success (e.g., show a success message, update UI, etc.)
            console.log('Annonce deleted successfully.');
            window.location.reload();
           // this.getAllSales(); // Refresh the list from the backend

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
