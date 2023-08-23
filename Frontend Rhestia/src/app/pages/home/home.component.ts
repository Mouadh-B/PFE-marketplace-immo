import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Range Slider
import { Options } from '@angular-slider/ngx-slider';

// Swiper Slider
import { SwiperOptions } from 'swiper';

import { topOffer, propertyCity, estateAagents, service, companies } from './home.model';
import { topOfferData, cityData, agentsData, servicesData, companiesData } from './data';
import {AnnonceServiceService} from "../../core/services/annonce-service.service";

@Component({
  selector: 'app-index',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

/**
 * Index Component
 */
export class HomeComponent implements OnInit {

  topOfferData!: topOffer[];
  cityData!: propertyCity[];
  agentsData!: estateAagents[];
  servicesData!: service[];
  companiesData!: companies[];

  constructor(private modalService: NgbModal,private annonceService:AnnonceServiceService) { }
  annonces! : any[];
  appartements! : any[];

  ngOnInit(): void {
     // Chat Data Get Function
     this._fetchData();
     this.filterredImages = this.list;

     // Rent Select data
     document.getElementById("rent-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const rent = document.querySelector('.rent') as HTMLElement;
      rent.innerText = input.innerText;
     });

     // Location Select data
     document.getElementById("location-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const location = document.querySelector('.location') as HTMLElement;
      location.innerText = input.innerText;
     });

     // Property Select data
     document.getElementById("property-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const property = document.querySelector('.property') as HTMLElement;
      property.innerText = input.innerText;
     });

    this.getAllAnnonces();
    //this.getAllAppartements();
  }

   // Chat Data Fetch
   private _fetchData() {
    this.topOfferData = topOfferData;
    this.cityData = cityData;
    this.agentsData = agentsData;
    this.servicesData = servicesData;
    this.companiesData = companiesData;
  }

  getAllAnnonces(){
    this.annonceService.getAllAnnonces().subscribe(ans =>{
      this.annonces=ans
      console.log(ans)
    })
  }

  // getAllAppartements(){
  //   this.annonceService.getAllAppartement().subscribe(ans =>{
  //     this.appartements=ans
  //     console.log(ans)
  //   })
  // }

  /**
   * Swiper setting
   */
   config = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: true,
    navigation: true,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 4,
      }
    }
  };

  /**
   * Service Swiper setting
   */
   service = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    spaceBetween: 25,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 3,
      }
    }
  };

  /**
   * partners Swiper setting
   */
   partners = {
    initialSlide: 0,
    slidesPerView: 6,
    spaceBetween: 25
  };

  /**
   * agents Swiper setting
   */
   public agents: SwiperOptions  = {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  /**
   * Swiper setting
   */
   companies = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 25,
    pagination: true,
    loop:true,
    breakpoints:{
      768:{
        slidesPerView: 4,
      },
      1200:{
        slidesPerView: 6,
      }
    }
  };

  /**
  * Slider range set
  */
   visibleSelection = 455;
   visibleBarOptions: Options = {
     floor: 0,
     ceil: 1000,
     showSelectionBar: true
   };

   /**
   * Portfolio Modern Data
   */
    filterredImages: { image: string; verified_btn?: string; btn: string; btn_color: string; sale: string; title: string; location: string; price: string; category: string;}[] | undefined;
    galleryFilter = 'Houses';
    list = [{
      image: 'assets/img/real-estate/recent/01.jpg',
      verified_btn: 'Verified',
      btn: "New",
      btn_color: "bg-info",
      sale: 'For rental',
      title: 'Luxury Rental Villa',
      location: '118-11 Sutphin Blvd Jamaica, NY 11434',
      price: '$3,850',
      category: 'Houses'
    },
    {
      image: 'assets/img/real-estate/recent/02.jpg',
      verified_btn: '',
      btn: "New",
      btn_color: "bg-info",
      sale: 'For sale',
      title: 'Duplex with Garage',
      location: '21 Pulaski Road Kings Park, NY 11754',
      price: '$200,410',
      category: 'Houses',
    },
    {
      image: 'assets/img/real-estate/recent/03.jpg',
      verified_btn: '',
      btn: "New",
      btn_color: "bg-info",
      sale: 'For sale',
      title: 'Country House',
      location: '6954 Grand AveMaspeth, NY 11378',
      price: '$162,000',
      category: 'Houses',
    },
    {
      image: 'assets/img/real-estate/recent/01.jpg',
      verified_btn: 'Verified',
      btn: "New",
      btn_color: "bg-info",
      sale: 'For rental',
      title: 'Luxury Rental Villa',
      location: '118-11 Sutphin Blvd Jamaica, NY 11434',
      price: '$3,850',
      category: 'Rooms'
    },
    {
      image: 'assets/img/real-estate/recent/02.jpg',
      verified_btn: '',
      btn: "New",
      btn_color: "bg-info",
      sale: 'For sale',
      title: 'Duplex with Garage',
      location: '21 Pulaski Road Kings Park, NY 11754',
      price: '$200,410',
      category: 'Commercial',
    },
    {
      image: 'assets/img/real-estate/recent/02.jpg',
      verified_btn: '',
      btn: "New",
      btn_color: "bg-info",
      sale: 'For sale',
      title: 'Duplex with Garage',
      location: '21 Pulaski Road Kings Park, NY 11754',
      price: '$200,410',
      category: 'Apartments',
    }
    ];


   /***
   * Active all category selected
   */
  activeCategory(category: string) {
    this.galleryFilter = category;
    if (this.galleryFilter === 'Houses') {
      this.filterredImages = this.list.filter(x => x.category === this.galleryFilter);
    } else {
      this.filterredImages = this.list.filter(x => x.category === this.galleryFilter);
    }
  }

  /**
   * Open modal
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }


}
