import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatList, MatListModule} from '@angular/material/list';
import {MatMenu, MatMenuModule} from '@angular/material/menu'

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountslistComponent } from './accountslist/accountslist.component';
import { DonationslistComponent } from './donationslist/donationslist.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ListsComponent, AccountslistComponent, DonationslistComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [AccountslistComponent, DonationslistComponent, MatList, MatMenu, MatIcon]
})
export class ListsModule { }
