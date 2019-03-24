
import { Observable } from 'rxjs/Observable';
import { AddboxComponent } from './../addbox/addbox.component';
import { Fil} from './../../modules/file';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  animations:  [
    trigger('myAnimation',[
      state('small',style({transform:'scale(1) '})),
      state('large',style({transform:'scale(1.5) '})),
      transition('small<=>large',animate('300ms ease-in')),
    ]  )

  ]
})
export class BoxComponent implements OnInit {
  files:Observable<Fil[]>;
  state:string='small';
  pdfSrc: string= '{{file.url}}' ;
 
  constructor(public dataService:DataService) { 

}
  /*anime(){
   this.state=(this.st<!--ate === 'small'?'large' : 'small ') 
  }*/
  ngOnInit() {
  this.files= this.dataService.getFiles();
  }
  removeBox(id,file){
    this.dataService.removeBox(id,file);
  };

}
