import { Component, OnInit } from '@angular/core';

// Range Slider
import { Options } from '@angular-slider/ngx-slider';

import { topOffer } from './sale.model';
import { topOfferData } from './data';
import {Annonce} from "../../../core/models/annonce.model";
import {Appartement} from "../../../core/models/appartement.model";
import {Maison} from "../../../core/models/maison.model";
import {Ferme} from "../../../core/models/ferme.model";
import {Immeuble} from "../../../core/models/immeuble.model";
import {Local} from "../../../core/models/local.model";
import {Terrain} from "../../../core/models/terrain.model";
import {AnnonceServiceService} from "../../../core/services/annonce-service.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ImageProcessingService} from "./image-processing.service";
import {AnnonceDetails} from "./AnnonceDetails";
import {map} from "rxjs/operators";

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
  topOfferData!: topOffer[];
 longitude = 20.728218;
 latitude = 52.128973;
 dataCount:any;
 checkedVal: any[] = [];

 // annonce:Annonce = new Annonce();
  appartement:Appartement = new Appartement();
  maison:Maison = new Maison();
  ferme:Ferme = new Ferme();
  immeuble:Immeuble = new Immeuble();
  local:Local = new Local();
  terrain:Terrain = new Terrain();
  //annonce:Annonce=new  Annonce()

  //annonceDetails: any[] = [];
  annonceDetails2: AnnonceDetails;
  wishlist: Annonce[] = [];
  id:number;

  obs:Observable<Annonce>;


  public images: string[] = [
    // 'assets/img/real-estate/catalog/01.jpg',
    // 'assets/img/real-estate/catalog/02.jpg',
    // 'assets/img/real-estate/catalog/03.jpg',
    // 'assets/img/real-estate/catalog/04.jpg',
    // 'assets/img/real-estate/catalog/05.jpg',
    // // 'assets/img/real-estate/catalog/06.jpg',
    // 'assets/img/real-estate/catalog/07.jpg',
    // 'assets/img/real-estate/catalog/08.jpg',
    // 'assets/img/real-estate/catalog/09.jpg',
    // 'assets/img/real-estate/catalog/10.jpg',
    'assets/img/real-estate/catalog/11.jpg',
    'assets/img/real-estate/catalog/12.jpg',
    'assets/img/real-estate/catalog/13.jpg',
    'assets/img/real-estate/catalog/14.jpg',
    'assets/img/real-estate/catalog/15.jpg',
    'assets/img/real-estate/catalog/16.jpg',
    'assets/img/real-estate/catalog/17.jpg',
    'assets/img/real-estate/catalog/18.jpg',
    // 'assets/img/real-estate/single/09.jpg',
    'assets/img/real-estate/single/08.jpg'
  ];
 constructor(private router:Router,private imageProcessingService:ImageProcessingService,private route: ActivatedRoute,private annonceService:AnnonceServiceService) { }


  //annonce: Annonce = new Annonce();
  annonces!: any[];
  annonceDetails!: any[];



  annonce={
    categorie: '',
    region: '',
    ville: '',
    images: [],
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
     { label: 'Home', link:'' },
     { label: 'Property for sale', active: true }
   ];

   // Data Get Function
   this._fetchData();
   this.getAllSales();
   this.images = this.getImage();
 }

 // Data Fetch
  private _fetchData() {
    this.dataCount = this.annonceService.getVenteAnnonce().subscribe((annonces) => {
      this.dataCount = annonces.length;
    });
    this.topOfferData = topOfferData;
    this.topOfferDatas = Object.assign([], this.topOfferData);
  }

 // getAllSales(filter?:any){
 //   this.annonceService.getVenteAnnonce(filter).subscribe(ans =>{
 //     this.annonceDetails=ans
 //     console.log(ans)
 //   })
 // }
 //  getAllSales(filter?: any) {
 //    this.annonceService.getVenteAnnonce(filter).pipe(
 //      map((annonces: Annonce[]) => annonces.map((annonce: Annonce) => this.imageProcessingService.createImages(annonce)))
 //    ).subscribe(
 //      (annoncesWithImages: Annonce[]) => {
 //        this.annonces = annoncesWithImages;
 //        console.log(annoncesWithImages);
 //      },
 //      error => {
 //        console.log(error);
 //      }
 //    );
 //  }
  getAllSales(filter?: any) {
    this.annonceService.getVenteAnnonce(filter).subscribe(
      (annonceDetails: any[]) => {
        this.annonceDetails = annonceDetails;
        console.log(annonceDetails);
      },
      error => {
        console.log(error);
      }
    );
  }

  public getImage(){
    return this.images
  }

  //  getAllSales(filter?: any) {
 //    this.annonceService.getVenteAnnonce(filter).pipe(
 //      map((annonces: Annonce[]) => annonces.map((annonce: Annonce) => this.imageProcessingService.createImages(annonce)))
 //    ).subscribe(
 //      (annoncesWithImages: Annonce[]) => {
 //        this.annonces = annoncesWithImages;
 //        console.log(annoncesWithImages);
 //        this.annonceDetails = annoncesWithImages.map((annonce: Annonce) => {
 //          return {
 //            idAnnonce: annonce.idAnnnoce,
 //            titre: annonce.titre,
 //            categorie: annonce.categorie,
 //            region: annonce.region,
 //            ville: annonce.ville,
 //            images: annonce.images.map((image: any) => ({ url: image.url })),
 //            adresse: annonce.adresse,
 //            surface: annonce.surface,
 //            description: annonce.description,
 //            prix: annonce.prix,
 //            etat: annonce.etat,
 //            numTel: annonce.numTel,
 //            longitude: annonce.longitude,
 //            latitude: annonce.latitude,
 //            type_Annonce: annonce.type_Annonce
 //          };
 //        });
 //      },
 //      error => {
 //        console.log(error);
 //      }
 //    );
 //  }




  filterCriteria : {
    region: '';
    typeAnnonce: '';
    minPrice: 0;
    maxPrice: 1;
    minArea: 0;
    maxArea: 1;
  }
 // filterChange(filter?:any){
 //   this.annonce=this.copyData;
 //
 //  this.filterCriteria.region = filter.value.annonce.region;
 //  this.filterCriteria.typeAnnonce=filter.value.annonce.type_Annonce;
 //  this.filterCriteria.minPrice=filter.value.annonce.prix;
 //  this.filterCriteria.maxPrice=filter.value.annonce.prix;
 //  this.filterCriteria.minArea=filter.value.annonce.surface;
 //  this.filterCriteria.maxArea=filter.value.annonce.surface;
 //  if(this.filterCriteria.region){
 //    this.annonce= this.annonce.filter
 //  }
 // }

  // changeProperty(e:any, region:any,typeAnnonce:any,minPrice:any,maxPrice:any,minArea:any,maxArea:any){
  //  if(e.target.region.checkedVal){
  //         this.filterCriteria.region;
  //         this.annonces = this.topOfferData.filter((data: any) => this.filterCriteria.region);
  //       }
  //       else {
  //        }
  //  }

  // getAllSalesByRegion(region:string){
  //   this.annonceService.getVenteAnnonceParRegion(region).subscribe(ans =>{
  //     //ans=ans?.filter(()=>{return obj.region===this.annonce.type_Annonce})
  //     this.annonces=ans
  //     console.log(ans)
  //   })
  // }

  // getSalesByTypeAnnonce(typeAnnonce:string,e:any){
  //  if(e.target.checked)
  //  {
  //   this.annonceService.getVenteAnnonceParTypeAnnonce(typeAnnonce).subscribe(ans =>{
  //     //ans=ans?.filter(()=>{return ===this.annonce.region})
  //     this.annonces=ans
  //     console.log(ans)
  //   }) }else{
  //    this.annonceService.getVenteAnnonce().subscribe(ans =>{
  //      this.annonces=ans
  //      console.log(ans)
  //    })
  //  }
  // }


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
    this.dataCount = this.annonces.length;
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


  changeProperty($event: Event, land: string) {

  }
}
