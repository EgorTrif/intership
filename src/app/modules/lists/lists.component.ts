import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AccountslistComponent } from './accountslist/accountslist.component';
import { DonationslistComponent } from './donationslist/donationslist.component';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})

export class ListsComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private accountslist: AccountslistComponent,
    private donationslist: DonationslistComponent) {
    }

  ngOnInit(): void {
    this.accountslist.retrieveAccounts()
    this.donationslist.retrieveDonations()
  }

  // searchAcc(): void {
  //   this.listService.findByAcc(this.SearchA.value)
  //     .subscribe(
  //       data => {
  //         this.accounts = data;
  //         console.log(data);
  //       });
  // }
  // searchDon(): void {
  //   this.listService.findByDon(this.SearchD.value)
  //     .subscribe(
  //       data => {
  //         this.donations = data;
  //         console.log(data);
  //       });
  // }
}
