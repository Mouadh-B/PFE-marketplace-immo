import {Annonce} from "./annonce.model";

export class Utilisateur {

  nom:string;
  nomUtilisateur:string;
  adresse:string;
  password:string;
  genre:string;
  etatCivil:string;
  email:string;
  numTel:number
  dateDeNaissance:Date;
  roles ='USER'
  type_utilisateur:string;
  annonces:Annonce;
  isActive:boolean;

}
