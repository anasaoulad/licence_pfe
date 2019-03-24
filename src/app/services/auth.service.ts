import { AngularFirestore } from 'angularfire2/firestore';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './../modules/user';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
//import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable()
export class AuthService {
  user: Observable<User>;
state:boolean=false;
  constructor(private FA: AngularFireAuth,private dataService: DataService,private afs:AngularFirestore) { 
    this.user = this.FA.authState
    .switchMap(user => {
      if (user) {
        this.state=true;
        return this.afs.doc<User>("users/"+user.uid).valueChanges();
        
      } else {
        return Observable.of(null)
      }
    })
  };
  
  
  signup(email: string, password: string,user:User) 
  {
    this.FA.auth.createUserWithEmailAndPassword(email, password).then(
      data=>{user.uid=data.user.uid;
      this.addUser(user)}).catch((error) => {console.log(error)});
};
  addUser(user:User){
  this.afs.doc<User>('users/'+user.uid).set(Object.assign({},user));
  }
  getUser(){
   this.afs.collection<User>('users/').snapshotChanges();
    return this.user;
  }
  getUsers() 
    {
      //return this.afs.collection<User>('users/').valueChanges();
      return this.afs.collection<User>('users/').snapshotChanges().map
      (
        changes=> 
        {
          return changes.map
          (
            a=> 
              {
                const data = a.payload.doc.data()as User;
                data.uid = a.payload.doc.id;
                return data;
              }
          );
        }
      );

    };
  removeUser(user)
    {
      this.afs.doc<User>(`users/${user.uid}`).delete();
    };
  updateUser(user)
  {
      this.afs.doc<User>(`users/${user.uid}`).update(user);
    }
  

    
  /*getcurrent(){
    this.afs.doc<User>("users/"+this.user.uid).valueChanges;
    return this.user.uid;
  };*/
login(email: string, password: string) {
  this.FA.auth.signInWithEmailAndPassword(email, password);
};

logout() {
  this.FA.auth.signOut();
  this.state=false;
};
/*state() {
  let state:boolean=false
    if ( this.FA.authState){
      state=true;
  }
    else{
      state=false
  }


  
  return state;
}*/


//getData(user) {
//const data: User {
 // prenom = user.prenom,
 // email = user.email,
 // url = user.yrl,
 // uid = user.uid // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
//}
//}


}
