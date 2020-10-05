import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseService } from './firebase.service';
import { TranslatesService } from './translate.service';



@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [
  ],
  exports:[
   
  ],
  providers:[
    FirebaseService,
    TranslatesService
  ]
})
export class SharedModule { }
