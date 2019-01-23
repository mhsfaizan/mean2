import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  constructor(private _gal:GalleryService) { }
  imageGroup:FormGroup;
  isShowLoader:boolean = false;
  ngOnInit() {
    this.init();
  }
  init(){
    this.imageGroup = new FormGroup({
      title: new FormControl(''),
      description :new FormControl('')
    })
  }
  add(input){
    let name = input.files[0].name;
    this.imageGroup.addControl("imageName",new FormControl(name));
  }
  addImage(form){
    this.isShowLoader = true;
    this._gal.addImage(this.imageGroup.value).subscribe((res:any)=>{
        form.reset();
        this.isShowLoader = false;
        if(res.status){
          console.log(res.msg);
        }
    });
  }

}
