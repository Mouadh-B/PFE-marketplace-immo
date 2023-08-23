import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Annonce} from "../models/annonce.model";


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl="http://localhost:4300/RhestIA"
  constructor(private http:HttpClient) { }

  // inscription(utilisateur:Utilisateur): Observable<any>
  // {
  //   return this.http.post(`${this.baseUrl}/addmessage`, utilisateur);
  // }

  public addMessage(message:any){
    return this.http.post(`${this.baseUrl}/addmessage`,message)
  }

  public getMessages(){
    return this.http.get(`${this.baseUrl}/messages`)
  }

  // public getAdminAnnonces(){
  //   return this.http.get(`${this.baseUrl}/ListeDesAnnonces`)
  // }

}

