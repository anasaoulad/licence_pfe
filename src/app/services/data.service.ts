import { User } from './../modules/user';
import { AngularFireStorageModule,AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabaseModule, AngularFireDatabase, } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Fil } from './../modules/file';
import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection,  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Img } from './../modules/img';


@Injectable()
export class DataService  {
  img:Img[];
  file:Observable<Fil>;
  user:User 
  fileCollection: AngularFirestoreCollection<Fil>
  
  public fileDoc:AngularFirestoreDocument<File>;
  constructor(private afs: AngularFirestore,firebaseAuth: AngularFireAuth,private afst:AngularFireStorage){};


addFile(file)
 {
  return this.afst.upload('files/'+file.name,file);
 } 
 getFiles() 
 {
  return this.afs.collection<Fil>('files/').valueChanges();
 };

addBox(file:Fil)
 {
  file.id=this.afs.createId();
  return this.afs.doc('files/'+file.id).set(Object.assign({},file));
 }
removeBox(id,file)
 {
  this.afs.doc<Fil>(`files/${id}`).delete();
  this.afst.ref(`/files/`+file.name).delete();
 };

      
addImg(file)
  {
 return this.afst.upload('images/'+file.name,file);
  //let imageRef = storageRef.child(`images/`);
  } 


  
    //constructor() {    
      //this.questions = [ 
      /*{
        text:"hello?",
        answer:'sup?',
        hide:true
      },
      { 
        text:" your code is good ? ",
        answer:'yes !' ,
        hide:true
      },
      {
        text:"does it works ?",
        answer:"fu** you it's not! ",
        hide:true
      }
       
 ];*/


  //}

      //geting the question frome localstorage and stuff xD

 /* getQuestions() 
      {
        if(localStorage.getItem('questions') === null ){
          this.questions = [];

        }
        else {
          this.questions=JSON.parse(localStorage.getItem('questions')); 

        }
      return this.questions;
      }*/

// adding question from nowhere(localstorage) xD
/*addbox(question:Question)
  {

    this.questions.unshift(question);
    let questions;
      if(localStorage.getItem('questions') ===null )
        {
          questions = [];
          questions.unshift(question);   
          localStorage.setItem('questions',JSON.stringify(questions));    
        } 
      else 
        {
          questions=JSON.parse(localStorage.getItem('questions')); 
          questions.unshift(question);
          localStorage.setItem('questions',JSON.stringify(questions));
        }
  }

  // remove questions

removeQuestion(question:Question)
  {
    for(let i = 0;i < this.questions.length;i++)
      {
          if(question == this.questions[i])
            {
              this.questions.splice(i, 1);
              localStorage.setItem('questions',JSON.stringify(this.questions));
            }

      }

  }
*/
}
