import {FileHandle} from "./file-handle.model";

export class Annonce {
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
}
