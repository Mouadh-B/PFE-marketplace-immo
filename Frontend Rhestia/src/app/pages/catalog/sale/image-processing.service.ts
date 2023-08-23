import { Injectable } from '@angular/core';
import {Annonce} from "../../../core/models/annonce.model";
import {FileHandle} from "../../../core/models/file-handle.model";
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class ImageProcessingService {
    annonce: Annonce = new Annonce()

    constructor(private sanitizer: DomSanitizer) { }


    public createImages(annonce: Annonce) {
        const annonceImages: any[] = annonce.images;
        const annonceImagesToFileHandle: FileHandle[] = [];
        for (let i = 0; i < annonceImages.length; i++) {
            const imageFileData = annonceImages[i];
            const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
            const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });
            const finalFileHandle: FileHandle = {
                file: imageFile,
                url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
            };
            annonceImagesToFileHandle.push(finalFileHandle);

        }
        annonce.images = annonceImagesToFileHandle;
            return annonce;
    }

    public dataURItoBlob(picBytes: any, imageType: any) {
        const byteString = window.atob(picBytes);
        const arrayBuffer= new ArrayBuffer (byteString. length);
        const int8Array = new Uint8Array(arrayBuffer);
        for(let i = 0; i < byteString.length; i++) {
        int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: imageType});
        return blob;
        }


}
