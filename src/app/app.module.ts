import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,AbstractControlDirective} from '@angular/forms';
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { ListComponent } from './components/list/list.component';
import { AddboxComponent } from './components/addbox/addbox.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule,	Routes	}	from	'@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PicComponent } from './components/profileitems/pic/pic.component';
import { InfoComponent } from './components/profileitems/info/info.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
//import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { ComponentsComponent } from './components/components.component';
import { FichiersComponent } from './components/fichiers/fichiers.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { CameraComponent } from './components/camera/camera.component';


  const appRoutes: Routes= [
    {path:'navbar',component:NavbarComponent},
    {path:'admin',component:AdminpageComponent},
    {path: '', redirectTo: 'signup', pathMatch: 'full'},
    {path:'signup',component:SignupComponent},
    {path:'profile',component:ProfileComponent},
    {path:'box',component:BoxComponent},
    {path:'fichiers',component:FichiersComponent},
    {path:'Camera',component:CameraComponent},



    ];
   // export { PDFJSStatic, PDFDocumentProxy, PDFViewerParams, PDFPageProxy, PDFSource, PDFProgressData, PDFPromise } from 'pdfjs-dist';
@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    ListComponent,
    AddboxComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    PicComponent,
    InfoComponent,
    AdminpageComponent,
    ComponentsComponent,
    FichiersComponent,
    CameraComponent,
  
    
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    //PdfViewerModule,
    HttpClientModule,
    HttpModule,

    
    
    
  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
