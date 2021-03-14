import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatList} from '@angular/material/list';
import {MatMenu} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DeleteDonation, Donation } from 'src/app/models/don.model';
import { ListService } from 'src/app/services/list.service';
import { AdddonComponent } from '../../add/adddon/adddon.component';
import { DondetComponent } from '../../details/dondet/dondet.component';

@Component({
  selector: 'app-donationslist',
  templateUrl: './donationslist.component.html',
  styleUrls: ['./donationslist.component.css']
})
export class DonationslistComponent implements OnInit {
  private unsubscribe$ = new Subject();

  donations: Donation[] = [];
  currentDon?: Donation;
  currentDonIndex = -1;

  constructor(public dialog: MatDialog, private listService: ListService,
    private route: ActivatedRoute,
    private router: Router,
    public list: MatList,
    public menu: MatMenu,
    public icon: MatIcon) { }

  ngOnInit(): void {
    this.retrieveDonations()
  }

  openAddDon() {
    const dialogRef = this.dialog.open(AdddonComponent, { width: '500px' });
    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe$)).subscribe(result => {
      this.retrieveDonations()
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDon(donation: Donation) {
    const dialogRef = this.dialog.open(DondetComponent, {width: '500px', data: { donation }});
    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe$)).subscribe(result => {
      this.retrieveDonations()
      console.log(`Dialog result: ${result}`);
    });
  }

  retrieveDonations(): void {
    this.listService.getAllDon().pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        data => {
          this.donations = data.Data.Donationtypes;
          console.log(data);
        });
  }

  refreshList(): void {
    this.retrieveDonations();
    this.currentDon = undefined;
    this.currentDonIndex = -1;
  }

  setActiveDon(donation: Donation, index: number): void {
    this.currentDon = donation;
    this.currentDonIndex = index;
  }

  deleteDon(donation: Donation): void {
    const deleteDon: DeleteDonation = {
      DonationTypeId: donation.DonationTypeId,
      deleteRow: 1
    }
    if(window.confirm('Are sure you want to delete this donation?')){
    this.listService.deleteDon(deleteDon).pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        response => {
          console.log(response);
          this.refreshList()
        });
      }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

}
