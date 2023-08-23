import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Local} from "../models/local.model";
import {Immeuble} from "../models/immeuble.model";
import {Ferme} from "../models/ferme.model";
import {Terrain} from "../models/terrain.model";
import {Maison} from "../models/maison.model";
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
  from '@angular/forms';
import {Annonce} from "../models/annonce.model";
import {Appartement} from "../models/appartement.model";
@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {

  private baseUrl="http://localhost:4300/RhestIA"

  listData1! : Appartement[] ;
  listData2! : Maison[];
  public dataForm!: FormGroup;
  constructor(private http:HttpClient) { }

  getAllAnnonces():Observable<any>
  {
    return this.http.get<any>(`${this.baseUrl}/ListeDesAnnonces`)
  }

  addAppartement(appartement: FormData):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/ajouterAppartement`, appartement);
  }
getAllAppartement():Observable<Appartement[]>
  {
    return this.http.get<Appartement[]>(`${this.baseUrl}/ListeDesAppartements`)
  }
  public deleteAppartement(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/supprimerAppartement/${id}`);
  }

  public getVenteAnnonce(filter?: any):Observable<any>
  {
    const params = new HttpParams()
    if (filter) {

      params.set('region', filter.region)
        .set('typeAnnonce', filter.typeAnnonce)
        .set('minPrice',filter.minPrice)
        .set('maxPrice',filter.maxPrice)
        .set('minArea',filter.minArea)
        .set('maxArea',filter.maxArea);
    }
    return this.http.get<Annonce[]>(`${this.baseUrl}/Vente`,{params})
  }

  public getLocationAnnonce(filter?: any):Observable<any>
  {
    const params = new HttpParams()
    if (filter) {

      params.set('region', filter.region)
        .set('typeAnnonce', filter.typeAnnonce)
        .set('minPrice', filter.minPrice)
        .set('maxPrice', filter.maxPrice)
        .set('minArea', filter.minArea)
        .set('maxArea', filter.maxArea);
    }
    return this.http.get<Annonce[]>(`${this.baseUrl}/Location`,{params})
  }

  public getVenteAnnonceParRegion(region:string):Observable<any>
  {
    return this.http.get<Annonce[]>(`${this.baseUrl}/RegionV/${region}`)
  }

  public getLocationAnnonceParRegion(region:string):Observable<any>
  {
    return this.http.get<Annonce[]>(`${this.baseUrl}/RegionL/${region}`)
  }

  public getVenteAnnonceParTypeAnnonce(typeAnnonce:string):Observable<any>
  {
    return this.http.get<Annonce[]>(`${this.baseUrl}/TypeAnnonce/${typeAnnonce}`)
  }

  public getLocationAnnonceParTypeAnnonce(typeAnnonce:string):Observable<any>
  {
    return this.http.get<Annonce[]>(`${this.baseUrl}/TypeAnnonceL/${typeAnnonce}`)
  }

  //

  public addMaison(maison:Maison):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/ajouterMaison`, maison);
  }
  public getAllMaison():Observable<Maison[]>
  {
    return this.http.get<Maison[]>(`${this.baseUrl}/ListeDesMaisons`)
  }
  public deleteMaison(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/supprimerMaison/${id}`);
  }




  public addTerrain(terrain:Terrain):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/ajouterTerrain`,terrain);
  }
  public getAllTerrain():Observable<Terrain[]>
  {
    return this.http.get<Terrain[]>(`${this.baseUrl}/ListeDesTerrains`)
  }
  public deleteTerrain(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/supprimerTerrain/${id}`);
  }




  public addFerme(ferme:Ferme):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/ajouterFerme`,ferme);
  }
  public getAllFerme():Observable<Ferme[]>
  {
    return this.http.get<Ferme[]>(`${this.baseUrl}/ListeDesFermes`)
  }
  public deleteFerme(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/supprimerFerme/${id}`);
  }




  public addImmeuble(immeuble:Immeuble):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/ajouterImmeuble`,immeuble);
  }
  public getAllImmeuble():Observable<Immeuble[]>
  {
    return this.http.get<Immeuble[]>(`${this.baseUrl}/ListeDesImmeubles`)
  }
  public deleteImmeuble(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/supprimerImmeuble/${id}`);
  }




  public addLocal(local:Local):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/ajouterLocal`, local);
  }
  public getAllLocal():Observable<Local[]>
  {
    return this.http.get<Local[]>(`${this.baseUrl}/ListeDesLocaux`)
  }
  public deleteLocal(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/supprimerLocal/${id}`);
  }

  public filterByTitreAndVille(recherche: string):Observable<Annonce[]>
  {
    return this.http.get<Local[]>(`${this.baseUrl}/rechercheAnnonce/${recherche}`)
  }

  public filterByTypeAnnonce(typeAnnonce: string):Observable<Annonce[]>
  {
    return this.http.get<Local[]>(`${this.baseUrl}/TypeAnnonce/${typeAnnonce}`)
  }

  public filterByRegion(region: string):Observable<Annonce[]>
  {
    return this.http.get<Local[]>(`${this.baseUrl}/Region/${region}`)
  }

  public filterByPrix(minPrice: number,maxPrice: number ):Observable<Annonce[]>
  {
    return this.http.get<Local[]>(`${this.baseUrl}/prix/${minPrice}/${maxPrice}`)
  }
  public DeleteAdminAnnonce(titre :string){
    return this.http.delete(`${this.baseUrl}/annonces/${titre}`);
  }

}
