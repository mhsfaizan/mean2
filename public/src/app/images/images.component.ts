import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Image } from '../image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private _gal:GalleryService) { }
  columnsToDisplay = ['number','title', 'imageName','description','delete'];
  myImageArray:Image[]
  ngOnInit() {
    this._gal.getImages().subscribe((resp:Image[])=>{
      this.myImageArray = resp;
    },(err)=>{
      console.log(err);
    });
  }
  delete(id:string){
    this._gal.delete(id).subscribe((resp:any)=>{
      if(resp.status){
        console.log(resp.msg);
      }
      else{
        console.log("error");
      }
    })
  }

}
