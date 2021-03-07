import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/acc.model';
import { ListService } from 'src/app/list.service';

@Component({
  selector: 'app-accdet',
  templateUrl: './accdet.component.html',
  styleUrls: ['./accdet.component.css']
})
export class AccdetComponent implements OnInit {

  accounts!: Account[];

  editAcc = new FormGroup({
    AccountName: new FormControl(''),
    Username: new FormControl(''),
    AccountId: new FormControl('')
  })
  message = '';

  constructor(
  @Inject(MAT_DIALOG_DATA) public data:{ account:Account},
  private listService: ListService,
  private route: ActivatedRoute,
  public dialog: MatDialog) { }

  ngOnInit(): void {
    this.editAcc.patchValue({
              AccountName: this.data.account.AccountName,
              Username: this.data.account.Username,
              AccountId: this.data.account.AccountId
            })
  }

  updateAcc(): void {
    this.listService.updateAcc( this.editAcc.value)
      .subscribe(
        response => {
          console.log(response);
          this.message = "Account was successfully changed";
        });
  }

}
