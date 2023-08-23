import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Maison} from "../models/maison.model";
import {Utilisateur} from "../models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

  private baseUrl="http://localhost:4300/RhestIA"
  constructor(private http:HttpClient) { }

  inscription(utilisateur:Utilisateur): Observable<any>
  {
    return this.http.post(`${this.baseUrl}/Utilisateur/inscription`, utilisateur);
  }

  login(user: any){
    return this.http.post<any>(`${this.baseUrl}/Utilisateur/Connexion`, user);
  }

  public getUsers(){
    return this.http.get(`${this.baseUrl}/ListeDesUtilisateurs`)
  }

  public getUserId(qId :any){
    return this.http.get(`${this.baseUrl}/quiz/${qId}`);
  }
//   enableUser(userId:any){
//     return this.http.put(`${this.baseUrl}/enableUser/${userId});
//   }
// }
  blockUser(userId: number) {
    const url = `${this.baseUrl}/${userId}/block`;
    return this.http.post(url, null);
  }

  unblockUser(userId: number) {
    const url = `${this.baseUrl}/${userId}/unblock`;
    return this.http.post(url, null);
  }
   deleteUser(userId:number){ return this.http.delete(`${this.baseUrl}/SupprimerUtilisateur/${userId}`)}
}
