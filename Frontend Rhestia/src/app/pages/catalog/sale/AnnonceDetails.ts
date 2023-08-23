import {FileHandle} from "../../../core/models/file-handle.model";

export class AnnonceDetails {
  idAnnnoce: number;
  titre: string;
  categorie: string;
  region: string;
  ville: string
  images: FileHandle[] = [];
// images: string
  adresse: string;
  surface: number;
  description: string;
  prix: number;
  etat: string;
  numTel:number;
  longitude:number;
  latitude:number;
  type_Annonce: string;
  //annonceImage: FileHandle[];
}
