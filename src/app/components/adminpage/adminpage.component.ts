import { User } from './../../modules/user';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection,  } from 'angularfire2/firestore';


@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
users:User[];
up: boolean = false;
usermodi: User;
  constructor(public authService:AuthService, private afs: AngularFirestore) { }

  ngOnInit() {
    //this.users= this.authService.getUsers();
    this.authService.getUsers().subscribe(users =>{
      this.users= users ;
    });

  }
  removeUser(user){
    this.authService.removeUser(user);
  };
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

}
