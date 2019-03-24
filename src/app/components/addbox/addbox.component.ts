import { DataService } from './../../services/data.service';
import { Fil } from './../../modules/file';
import { Component, OnInit } from '@angular/core';
import { NgForm,ReactiveFormsModule,FormsModule,AbstractControlDirective } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Img } from './../../modules/img';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireStorage } from 'angularfire2/storage';
import { filter } from 'rxjs/operator/filter';
import { VALID } from '@angular/forms/src/model';
import { User } from './../../modules/user';
import { AuthService } from './../../services/auth.service';
import { storage } from 'firebase/storage';
@Component({
  selector: 'app-addbox',
  templateUrl: './addbox.component.html',
  styleUrls: ['./addbox.component.css']
})
export class AddboxComponent implements OnInit {
  user:User;
  
  constructor(public dataService: DataService , private afs:AngularFirestore,public authService:AuthService) { 
   
  }

file:Fil= new Fil();
ngOnInit() {
  this.authService.getUser().subscribe
  (
  user =>{
            this.user=user;this.file.dep=this.user.dep   
            console.log(this.file.dep)
            return this.file.dep;   
           }
  )
}

uploadFilee(event){
  const file = event.target.files[0];
  //this.dataService.addFile(file).downloadURL().subscribe(url=>{this.file.url=url;})
}

addBox(form:NgForm){
  this.file.hide=true;
  this.dataService.addBox(this.file);
  console.log(this.file);
}

/*uploadFile(event,form:NgForm)
{
  const file = event.target.files[0];
  this.file.hide=true;
  this.dataService.addFile(file).downloadURL().subscribe
  (
    url=>
    {
    this.file.url=url,this.dataService.addBox(this.file),this.authService.getUser().subscribe
      (
      user =>{
                this.user=user;this.file.dep=this.user.dep   
                console.log(this.file.dep)
                return this.file.dep;   
               }
      )
    }
  );
  
}*/
getUrl(){
  return this.file.url;
  
}


}
