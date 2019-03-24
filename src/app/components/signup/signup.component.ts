import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm , ReactiveFormsModule,FormsModule,AbstractControlDirective } from '@angular/forms';
import { DataService } from './../../services/data.service';
import { Router,	Routes	}	from	'@angular/router';
import { User } from '../../modules/user';
import { VALID } from '@angular/forms/src/model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:User= new User();
submitted: boolean = false; 
newUser: boolean = false;

  constructor(private dataService: DataService, private authService:AuthService,private route:Router,AF: AngularFireAuth, AFS:AngularFirestore ) { 

    
    

  }

 ngOnInit() {
  this.user.prenom='';
  this.user.nom='';
  }
 toggleForm(): void {
    this.newUser = !this.newUser;
  }
 
 uploadFile(event){
    const file = event.target.files[0];
    //this.dataService.addImg(file).downloadURL().subscribe(url=>{this.user.url=url;})
  }
  
 signUp(form:NgForm) {
    this.submitted = true; 
    this.authService.signup(this.user.email,this.user.mdp,this.user);
    this.route.navigate(['/profile']);  
}
 /*redirect(){
    this.route.navigate(['/profile']);
}*/
 login() {
    this.authService.login(this.user.email, this.user.mdp);
}
 logout() {
    this.authService.logout();
}


}
