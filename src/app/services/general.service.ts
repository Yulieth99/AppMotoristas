import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  

  constructor(private sanitizer: DomSanitizer,
              private modalService:NgbModal
               ) { }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
      
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
              resolve({
          base: null
        });
      };

    } catch (e) {
          return null;
      
    }
    return $event
  })


   mayusculaCadaPalabra(str:string) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(''); 
 }

 modalSuccess(NgbdModalContent:any){
  this.modalService.open(NgbdModalContent, {windowClass: 'modal-holder', centered: true});

 }
 



}
