import { NgForm,ReactiveFormsModule,FormsModule,AbstractControlDirective } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AddboxComponent } from './../addbox/addbox.component';
import { Fil} from './../../modules/file';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-fichiers',
  templateUrl: './fichiers.component.html',
  styleUrls: ['./fichiers.component.css'],
  animations:  [
    trigger('myAnimation',[
      state('small',style({transform:'scale(1) '})),
      state('large',style({transform:'scale(1.5) '})),
      transition('small<=>large',animate('300ms ease-in')),
    ]  )

  ]
})
export class FichiersComponent implements OnInit {
  files:Observable<Fil[]>;
  state:string='small';
  pdfSrc: string= '{{file.url}}' ;
 
  constructor(public dataService:DataService) { }
  cat0:boolean=false;
  cat1:boolean=false;
  cat2:boolean=false;
  cat3:boolean=false;
  cat4:boolean=false;
  cat5:boolean=false;
  cat6:boolean=false;  
  scat1:boolean=false;
  scat2:boolean=false;
  scat3:boolean=false;
  scat4:boolean=false;
  scat5:boolean=false;
  scat6:boolean=false;
  scat7:boolean=false;  
  category:string;
  cat:string;
  ngOnInit() {
    this.files= this.dataService.getFiles();

  }
  removeBox(id,file){
     this.dataService.removeBox(id,file);
    };
  check(file){
    //0
    if(this.cat0)
    {
      return true;
    }
    //1 Management
      if ((this.cat1&& file.category=="Management")&&(!(this.scat1)&&!(this.scat2)&&!(this.scat3)&&!(this.scat4)&&!(this.scat5)&&!(this.scat6)&&!(this.scat7)))
      {
   
        return true
      }
      if ((this.scat1&& file.cat=="Processus")&&(!(this.cat1)&&!(this.cat2)&&!(this.cat3)&&!(this.cat4)&&!(this.cat5)&&!(this.cat6)))
      {
      
        return true
      }
      if (
        (this.cat1 && file.category=="Management"&& this.scat1&& file.cat=="Processus")||               
        (this.cat1 && file.category=="Management"&& this.scat2&& file.cat=="precédures")||
        (this.cat1 && file.category=="Management"&& this.scat3&& file.cat=="formulaire")||
        (this.cat1 && file.category=="Management"&& this.scat4&& file.cat=="Communication")||
        (this.cat1 && file.category=="Management"&& this.scat5&& file.cat=="Maitrise operationelle")||
        (this.cat1 && file.category=="Management"&& this.scat6&& file.cat=="autre")||
        (this.cat1 && file.category=="Management"&& this.scat7&& file.cat=="7")
      )
      {
        return true;
      }
    //2
      if ((this.cat2&& file.category=="Etude")&&(!(this.scat1)&&!(this.scat2)&&!(this.scat3)&&!(this.scat4)&&!(this.scat5)&&!(this.scat6)&&!(this.scat7)))
      {
        return true
      }
      if ((this.scat2&& file.cat=="precédures")&&(!(this.cat1)&&!(this.cat2)&&!(this.cat3)&&!(this.cat4)&&!(this.cat5)&&!(this.cat6)))
      {
        return true
      }
      if (
        (this.cat2 && file.category=="Etude"&& this.scat1&& file.cat=="Processus")||  
        (this.cat2 && file.category=="Etude"&& this.scat2&& file.cat=="precédures")||
        (this.cat2 && file.category=="Etude"&& this.scat3&& file.cat=="formulaire")||
        (this.cat2 && file.category=="Etude"&& this.scat4&& file.cat=="Communication")||
        (this.cat2 && file.category=="Etude"&& this.scat5&& file.cat=="Maitrise operationelle")||
        (this.cat2 && file.category=="Etude"&& this.scat6&& file.cat=="autre")||
        (this.cat2 && file.category=="Etude"&& this.scat7&& file.cat=="7")
      )
      {
        return true;
      }
    //3
      if ((this.cat3&& file.category=="Juridique")&&(!(this.scat1)&&!(this.scat2)&&!(this.scat3)&&!(this.scat4)&&!(this.scat5)&&!(this.scat6)&&!(this.scat7)))
      {
        return true
      }
      if ((this.scat3&& file.cat=="formulaire")&&(!(this.cat1)&&!(this.cat2)&&!(this.cat3)&&!(this.cat4)&&!(this.cat5)&&!(this.cat6)))
      {
        return true
      }
      if (
        (this.cat3 && file.category=="Juridique"&& this.scat1&& file.cat=="Processus")||  
        (this.cat3 && file.category=="Juridique"&& this.scat2&& file.cat=="precédures")||
        (this.cat3 && file.category=="Juridique"&& this.scat3&& file.cat=="formulaire")||
        (this.cat3 && file.category=="Juridique"&& this.scat4&& file.cat=="Communication")||
        (this.cat3 && file.category=="Juridique"&& this.scat5&& file.cat=="Maitrise operationelle")||
        (this.cat3 && file.category=="Juridique"&& this.scat6&& file.cat=="autre")||
        (this.cat3 && file.category=="Juridique"&& this.scat7&& file.cat=="7")
      )
      {
        return true;
      }
    //4
      if ((this.cat4&& file.category=="RH")&&(!(this.scat1)&&!(this.scat2)&&!(this.scat3)&&!(this.scat4)&&!(this.scat5)&&!(this.scat6)&&!(this.scat7)))
      {
        return true
      }
      if ((this.scat3&& file.cat=="Communication")&&(!(this.cat1)&&!(this.cat2)&&!(this.cat3)&&!(this.cat4)&&!(this.cat5)&&!(this.cat6)))
      {
        return true
      }
      if (
        (this.cat4 && file.category=="RH"&& this.scat1&& file.cat=="Processus")||  
        (this.cat4 && file.category=="RH"&& this.scat2&& file.cat=="precédures")||
        (this.cat4 && file.category=="RH"&& this.scat3&& file.cat=="formulaire")||
        (this.cat4 && file.category=="RH"&& this.scat4&& file.cat=="Communication")||
        (this.cat4 && file.category=="RH"&& this.scat5&& file.cat=="Maitrise operationelle")||
        (this.cat4 && file.category=="RH"&& this.scat6&& file.cat=="autre")||
        (this.cat4 && file.category=="RH"&& this.scat7&& file.cat=="7")
      )
      {
        return true;
      }
    //5
      if ((this.cat5&& file.category=="Achat")&&(!(this.scat1)&&!(this.scat2)&&!(this.scat3)&&!(this.scat4)&&!(this.scat5)&&!(this.scat6)&&!(this.scat7)))
      {
        return true
      }
      if ((this.scat5&& file.cat=="Maitrise operationelle")&&(!(this.cat1)&&!(this.cat2)&&!(this.cat3)&&!(this.cat4)&&!(this.cat5)&&!(this.cat6)))
      {
        return true
      }
      if (
        (this.cat5 && file.category=="Achat"&& this.scat1&& file.cat=="Processus")||  
        (this.cat5 && file.category=="Achat"&& this.scat2&& file.cat=="precédures")||
        (this.cat5 && file.category=="Achat"&& this.scat3&& file.cat=="formulaire")||
        (this.cat5 && file.category=="Achat"&& this.scat4&& file.cat=="Communication")||
        (this.cat5 && file.category=="Achat"&& this.scat5&& file.cat=="Maitrise operationelle")||
        (this.cat5 && file.category=="Achat"&& this.scat6&& file.cat=="autre")||
        (this.cat5 && file.category=="Achat"&& this.scat7&& file.cat=="7")
      )
      {
        return true;
      }
    //6 
      if ((this.cat6&& file.category=="Dynamique Amelioration")&&(!(this.scat1)&&!(this.scat2)&&!(this.scat3)&&!(this.scat4)&&!(this.scat5)&&!(this.scat6)&&!(this.scat7)))
      {
        return true
      }
      if ((this.scat6&& file.cat=="autre")&&(!(this.cat1)&&!(this.cat2)&&!(this.cat3)&&!(this.cat4)&&!(this.cat5)&&!(this.cat6)))
      {
        return true
      }
      if (
        (this.cat6 && file.category=="Dynamique Amelioration"&& this.scat1&& file.cat=="Processus")||  
        (this.cat6 && file.category=="Dynamique Amelioration"&& this.scat2&& file.cat=="precédures")||
        (this.cat6 && file.category=="Dynamique Amelioration"&& this.scat3&& file.cat=="formulaire")||
        (this.cat6 && file.category=="Dynamique Amelioration"&& this.scat4&& file.cat=="Communication")||
        (this.cat6 && file.category=="Dynamique Amelioration"&& this.scat5&& file.cat=="Maitrise operationelle")||
        (this.cat6 && file.category=="Dynamique Amelioration"&& this.scat6&& file.cat=="autre")||
        (this.cat6 && file.category=="Dynamique Amelioration"&& this.scat7&& file.cat=="7")
      )
      {
        return true;
      }
    //s7
      if ((this.scat7&& file.cat=="7")&&(!(this.cat1)&&!(this.cat2)&&!(this.cat3)&&!(this.cat4)&&!(this.cat5)&&!(this.cat6)))
      {
        return true
      }
      }
    }
