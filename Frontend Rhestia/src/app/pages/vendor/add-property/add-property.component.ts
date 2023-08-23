import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {EventService} from '../../../core/services/event.service';
import {Annonce} from "../../../core/models/annonce.model";
import {Appartement} from "../../../core/models/appartement.model";
import {AnnonceServiceService} from "../../../core/services/annonce-service.service";
import {HttpClient} from "@angular/common/http";
import {Maison} from "../../../core/models/maison.model";
import {Ferme} from "../../../core/models/ferme.model";
import {Immeuble} from "../../../core/models/immeuble.model";
import {Local} from "../../../core/models/local.model";
import {Terrain} from "../../../core/models/terrain.model";
import {FileHandle} from "../../../core/models/file-handle.model";
import {DomSanitizer} from "@angular/platform-browser";
import {Images} from "../../../core/models/image.model";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})

/**
 * AddProperty Component
 */
export class AddPropertyComponent implements OnInit {

  showSuccess = false;



    // bread crumb items
    breadCrumbItems!: Array<{}>;

    public overviewColleaps = true;
    public amenitiesColleaps = true;
    public submitted = false;

  //add property
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  imageName: any;

  userFile: any ;
  public imagePath: any;
  imgURL: any;
  message!: string;
  // annonce:Annonce = new Annonce();
  // appartement:Appartement = new Appartement();
  maison:Maison = new Maison();
  ferme:Ferme = new Ferme();
  immeuble:Immeuble = new Immeuble();
  local:Local = new Local();
  terrain:Terrain = new Terrain();
  images:Images = new Images();

  // bread crumb items

  constructor(private annonceService: AnnonceServiceService, private modalService: NgbModal, private sanitizer: DomSanitizer) {
    this.annonce.images = []; // Initialize annonce.images as an empty array
  }



  ngOnInit(): void {

     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Add property', active: true }
    ];
  }


  annonce: Annonce =  {
    idAnnnoce:1,
    titre:"",
   categorie:"",
     region:"",
    ville:"",
     images:[],
    adresse:"",
  surface:1,
    description:"",
     prix:1,
    etat:"",
    numTel:1,
   type_Annonce:"",
    longitude:200,
    latitude: 300,

   };
  appartement: Appartement =  {
    numEtageAppartement: 1,
    nbrChambresAppartement: 1,
    nbrSalleDeBainAppartement: 1,
    ascenseurAppartement: false,
    meubleAppartement: false,
    equipementsCuisineAppartement: false,
    climatisationAppartement: false,
    chauffageAppartement: false,
    balconAppartement: false,
    parkingAppartement: false,
    idAnnnoce:1,
    titre:"",
    categorie:"",
    region:"",
    ville:"",
    images:[],
    adresse:"",
    surface:1,
    description:"",
    prix:1,
    etat:"",
    numTel:1,
    type_Annonce:"",
    longitude:200,
    latitude: 300,

  };


  saveAppartement(): void {
    let AnnonceAppartement = this.preparedFormData({annonce: this.annonce, appartment: this.appartement})
    this.annonceService.addAppartement(AnnonceAppartement)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  preparedFormData(annonceAndAppart: any):FormData{
    const formData=new FormData();
    formData.append(
      'appartement',
      new Blob([JSON.stringify({...annonceAndAppart.annonce, ...annonceAndAppart.appartement})],{type:'application/json'})
    );
    for(var i=0; i< annonceAndAppart.annonce.images.length; i++){
      formData.append(
        'imageFile',
        annonceAndAppart.annonce.images[i].file,
        annonceAndAppart.annonce.images[i].file.name
      );
    }
    return formData;
  }

  // onSelectFile(event:any) {
  //   if (event.target.files)
  //   {
  //     const file = event.target.files[0];
  //     const fileHandle :FileHandle={
  //       file:file,
  //       url:this.sanitizer.bypassSecurityTrustUrl(
  //         window.URL.createObjectURL(file)
  //       )
  //     }
  //     this.annonce.images.push(fileHandle);
  //     this.imgURL = fileHandle.url;
  //   }
  // }
  onSelectFile(event: any) {
    if (event.target.files) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileHandle: FileHandle = {
          file: file,
          url: this.sanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(file)
          )
        }
        this.annonce.images.push(fileHandle);
      }
    }
  }


  // saveAppartement(): void {
  //   let AnnonceAppartement = {...this.appartement,...this.annonce}
  //   this.annonceService.addAppartement(AnnonceAppartement)
  //     .subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.submitted = true;
  //       },
  //       error: (e) => console.error(e)
  //     });
  // }


  saveMaison():void {
    let AnnonceMaison = {...this.maison,...this.annonce}
      this.annonceService.addMaison(AnnonceMaison)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
  }

  saveFerme():void {
    let AnnonceFerme = {...this.ferme,...this.annonce}
    this.annonceService.addFerme(AnnonceFerme)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  saveImmeuble():void {
    let AnnonceImmeuble = {...this.immeuble,...this.annonce}
    this.annonceService.addImmeuble(AnnonceImmeuble)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  saveLocal():void {
    let AnnonceLocal = {...this.local,...this.annonce}
    this.annonceService.addLocal(AnnonceLocal)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  saveTerrain():void {
    let AnnonceTerrain = {...this.terrain,...this.annonce}
    this.annonceService.addTerrain(AnnonceTerrain)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  inView(ele:any){
    ele.scrollIntoView({behavior:"smooth", block:"start", inline:"start"})
  }

  /**
   * Open Review modal
   * @param reviewContent modal content
   */

   openReviewModal(reviewContent: any) {
    this.modalService.open(reviewContent, { size: 'fullscreen', windowClass: 'modal-holder' });
  }

  selectRegion(region:any) {
    console.log('region',region)
  }


  // onSelectFile(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.userFile = file;
  //     // this.f['profile'].setValue(file);
  //
  //     var mimeType = event.target.files[0].type;
  //     if (mimeType.match(/image\/*/) == null) {
  //       this.message = "Only images are supported.";
  //       return;
  //     }
  //
  //     var reader = new FileReader();
  //
  //     this.imagePath = file;
  //     reader.readAsDataURL(file);
  //     reader.onload = (_event) => {
  //       this.imgURL = reader.result;
  //     }
  //   }
  // }

  onSubmit(){
     if (this.annonce.type_Annonce==='Appartement'){
       console.log(this.appartement);
       this.saveAppartement();
       this.showSuccess = true;
     }else if(this.annonce.type_Annonce==='Maison'){
       console.log(this.maison);
       this.saveMaison();
       this.showSuccess = true;
     }else if(this.annonce.type_Annonce==='Ferme'){
       console.log(this.ferme);
       this.saveFerme();
       this.showSuccess = true;
     }else if (this.annonce.type_Annonce==='Immeuble'){
       console.log(this.immeuble);
       this.saveImmeuble();
       this.showSuccess = true;
     }else if (this.annonce.type_Annonce==='Local'){
       console.log(this.local);
       this.saveLocal();
       this.showSuccess = true;
     }else if (this.annonce.type_Annonce==='Terrain'){
       console.log(this.terrain);
       this.saveTerrain();
       this.showSuccess = true;
     }else {console.log("Erreur")}
  }

}
