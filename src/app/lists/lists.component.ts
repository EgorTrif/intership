import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Account, DeleteAccount } from 'src/app/acc.model';
import { Donation, DeleteDonation } from 'src/app/don.model';
import { ListService } from '../list.service';
import { AccdetComponent } from '../details/accdet/accdet.component';
import { DondetComponent } from '../details/dondet/dondet.component';
import { AddaccComponent } from '../add/addacc/addacc.component';
import { AdddonComponent } from '../add/adddon/adddon.component';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})

export class ListsComponent implements OnInit {
  accounts!: Account[];
  currentAcc?: Account;
  donations!: Donation[];
  currentDon?: Donation;
  currentAccIndex = -1;
  currentDonIndex = -1;

  SearchA = new FormGroup({
    Username: new FormControl('')
  })

  SearchD = new FormGroup({
    DonationTypeOther: new FormControl('')
  })

  constructor(public dialog: MatDialog, private listService: ListService,
    private route: ActivatedRoute,
    private router: Router) {
    this.listService.getAllAcc().subscribe(data => {
      console.log(data)
    }),
      this.listService.getAllDon().subscribe(data => {
        console.log(data)
      })
  }

  openAddAcc() {
    const dialogRef = this.dialog.open(AddaccComponent, { width: '500px' });
    dialogRef.afterClosed().subscribe(result => {
      this.retrieveAccounts()
      console.log(`Dialog result: ${result}`);
    });
  }

  openAddDon() {
    const dialogRef = this.dialog.open(AdddonComponent, { width: '500px' });
    dialogRef.afterClosed().subscribe(result => {
      this.retrieveDonations()
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditAcc(account: Account) {
    const dialogRef = this.dialog.open(AccdetComponent, { width: '500px', data: { account } });
    dialogRef.afterClosed().subscribe(result => {
      this.retrieveAccounts()
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDon(donation: Donation) {
    const dialogRef = this.dialog.open(DondetComponent, {width: '500px', data: { donation }});
    dialogRef.afterClosed().subscribe(result => {
      this.retrieveDonations()
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.retrieveAccounts()
    this.retrieveDonations()
  }

  retrieveAccounts(): void {
    this.listService.getAllAcc()
      .subscribe(
        data => {
          this.accounts = data.Data.Accounts;
          console.log(data);
        });
  }
  retrieveDonations(): void {
    this.listService.getAllDon()
      .subscribe(
        data => {
          this.donations = data.Data.Donationtypes;
          console.log(data);
        });
  }

  refreshLists(): void {
    this.retrieveAccounts();
    this.retrieveDonations();
    this.currentAcc = undefined;
    this.currentDon = undefined;
    this.currentAccIndex = -1;
    this.currentDonIndex = -1;
  }

  setActiveAcc(account: Account, index: number): void {
    this.currentAcc = account;
    this.currentAccIndex = index;
  }
  setActiveDon(donation: Donation, index: number): void {
    this.currentDon = donation;
    this.currentDonIndex = index;
  }

  deleteAcc(account: Account): void {
    const deleteAcc: DeleteAccount = {
      AccountId: account.AccountId,
      deleteRow: 1
    }

    this.listService.deleteAcc(deleteAcc)
      .subscribe(
        response => {
          console.log(response);
          this.refreshLists()
        });
  }

  deleteDon(donation: Donation): void {
    const deleteDon: DeleteDonation = {
      DonationTypeId: donation.DonationTypeId,
      deleteRow: 1
    }

    this.listService.deleteDon(deleteDon)
      .subscribe(
        response => {
          console.log(response);
          this.refreshLists()
        });
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
