import { Component, ViewChild } from '@angular/core';
import { SwiperComponent } from 'ngx-useful-swiper';

import {apartments, newss, recently} from './single-v2.model';
import { apartmentsData, recentlyData } from './data';
// @ts-ignore
import { newsData } from './data2';
import { SwiperOptions } from 'swiper';
// import {news} from "../../extrapages/blog-grid/blog-grid.model";

@Component({
  selector: 'app-single-v2',
  templateUrl: './single-v2.component.html',
  styleUrls: ['./single-v2.component.scss']
})

/**
 * SingleV2 Component
 */
export class SingleV2Component {
  newsData!: newss[];
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  apartmentsData!: apartments[];
  recentlyData!: recently[];
  public firstColleaps = true;

  id = 'dofyR9p8e7w';
  private player: any;
  private ytEvent: any;

  @ViewChild('usefulSwiper', { static: false }) usefulSwiper?: SwiperComponent;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Property for rent', link: '/catalog/rent' },
      { label: 'Pine Apartments', active: true }
    ];

    // Data Get Function
    this._fetchData();
  }

  // Data Fetch
  private _fetchData() {
    this.apartmentsData = apartmentsData;
    this.recentlyData = recentlyData;
  }

  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true
  };

  /**
   * Swiper setting
   */
  recently = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: true,
    navigation: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  };

  // Youtube Player
  onStateChange(event: any) {
    this.ytEvent = event.data;
  }
  savePlayer(player: any) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }

  Imageslider: SwiperOptions = {
    spaceBetween: 10,
    direction: 'horizontal',
    slidesPerView: 5
  }

  slidePreview(id: any, event: any) {
    const swiper = document.querySelectorAll('.swiperlist')
    swiper.forEach((el: any) => {
      el.classList.remove('tns-nav-active')
    })
    event.target.closest('.swiperlist').classList.add('tns-nav-active')
    this.usefulSwiper!.swiper.slideTo(id)
  }

  // protected readonly newsData = newsData;
}
