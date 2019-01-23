import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './image';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  url:string = "http://localhost:3000/apis/";
  constructor(private _http:HttpClient) { }
  getImages():Observable<Image[]>{
    return this._http.get<Image[]>(this.url+'images');
  }
  addImage(image:Image){
    return this._http.post(this.url+"image",image);
  }
  delete(id:string){
    return this._http.delete(this.url+"image/"+id);
  }
}
