import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatList} from '@angular/material/list';
import {MatMenu} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Account, DeleteAccount } from 'src/app/models/acc.model';
import { ListService } from 'src/app/services/list.service';
import { AddaccComponent } from '../../add/addacc/addacc.component';
import { AccdetComponent } from '../../details/accdet/accdet.component';


@Component({
  selector: 'app-accountslist',
  templateUrl: './accountslist.component.html',
  styleUrls: ['./accountslist.component.css']
})
export class AccountslistComponent implements OnInit {
  private unsubscribe$ = new Subject();
  accounts: Account[] = [];
  currentAcc?: Account;
  currentAccIndex = -1;

  constructor(public dialog: MatDialog, private listService: ListService,
    private route: ActivatedRoute,
    private router: Router,
    public list: MatList,
    public menu: MatMenu,
    public icon: MatIcon) { }

  ngOnInit(): void {
    this.retrieveAccounts()
  }

  openAddAcc() {
    const dialogRef = this.dialog.open(AddaccComponent, { width: '500px' });
    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe$)).subscribe(result => {
      this.retrieveAccounts()
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditAcc(account: Account) {
    const dialogRef = this.dialog.open(AccdetComponent, { width: '500px', data: { account } });
    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe$)).subscribe(result => {
      this.retrieveAccounts()
      console.log(`Dialog result: ${result}`);
    });
  }

  setActiveAcc(account: Account, index: number): void {
    this.currentAcc = account;
    this.currentAccIndex = index;
  }

  deleteAcc(account: Account): void {
    const deleteAcc: DeleteAccount = {
      AccountId: account.AccountId,
      deleteRow: 1
    }
    if(window.confirm('Are sure you want to delete this account?')){
      this.listService.deleteAcc(deleteAcc).pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        response => {
          console.log(response);
          this.refreshList()
        });
     }
  }

  retrieveAccounts(): void {
    this.listService.getAllAcc().pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        data => {
          this.accounts = data.Data.Accounts;
          console.log(data);
        });
  }

  refreshList(): void {
    this.retrieveAccounts();
    this.currentAcc = undefined;
    this.currentAccIndex = -1;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
