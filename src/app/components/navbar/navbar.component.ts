import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../modules/user';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:User= new User()
  constructor(public authService:AuthService, ) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.user.email, this.user.mdp);
}
logout() {
  this.authService.logout();
}
}
