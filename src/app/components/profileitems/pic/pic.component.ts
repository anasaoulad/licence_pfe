import { User } from './../../../modules/user';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Img } from './../../../modules/img';
import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operator/filter';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {

img:Img= new Img;

user:User;

constructor(private afs:AngularFirestore, public dataservice:DataService)
{ 


};
uploadFile(event){
this.img.id = this.afs.createId();
const file = event.target.files[0];
//this.dataservice.addImg(file).downloadURL().subscribe(url=>{this.user.url=url;});
//this.afs.doc<Img>('images/'+this.img.id).set(Object.assign({},this.img));
/*uploadFile(event){
  this.img.id = this.afs.createId();
  const file = event.target.files[0];
  this.dataservice.addImg(file).downloadURL().subscribe(url=>{this.img.url=url;this.afs.doc<Img>('images/'+this.img.id).set(Object.assign({},this.img))});
*/




}

  ngOnInit() {
  }

}
