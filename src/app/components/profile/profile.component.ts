import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { DataService } from './../../services/data.service';
import { Router,	Routes	}	from	'@angular/router';
import { User } from '../../modules/user';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  state:boolean=false;
  user:User= new User();
  up: boolean = false;
  usermodi: User;
  constructor(public authService:AuthService,) { 
   

  };
  login() {
    this.authService.login(this.user.email, this.user.mdp);
}
modi(event, user:User)
{
  this.up=true;
  this.usermodi = user;
}
anu(){
  return this.up=false;
}
update(user){
  this.authService.updateUser(user);
   this.up=false;
    }
  logout() {
    this.authService.logout();
}
  ngOnInit() {
   //this.user.uid=this.authService.getcurrent();
   
  }
  /*tet(){   
  var user = FA.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;
  */


}
