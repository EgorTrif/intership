import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { DetailsRoutingModule } from './details-routing.module';
import { AccdetComponent } from './accdet/accdet.component';
import { DondetComponent } from './dondet/dondet.component';



@NgModule({
  declarations: [ AccdetComponent, DondetComponent],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule 
  ]
})
export class DetailsModule { }
