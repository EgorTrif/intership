import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Donation } from 'src/app/models/don.model';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-dondet',
  templateUrl: './dondet.component.html',
  styleUrls: ['./dondet.component.css']
})
export class DondetComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  
  donation!: Donation[];

  editDon = new FormGroup({
    DonationTypeOther: new FormControl(''),
    DonationTypeId: new FormControl('')
  });
  message = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { donation: Donation},
    private listService: ListService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

    ngOnDestroy(): void {
      this.unsubscribe$.next()
      this.unsubscribe$.complete()
    }

  ngOnInit(): void {
          this.editDon.patchValue({
            DonationTypeOther: this.data.donation.DonationTypeOther,
            DonationTypeId: this.data.donation.DonationTypeId
          });
  }
  updateDon(): void {
    this.listService.updateDon( this.editDon.value).pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        response => {
          console.log(this.editDon.value)
          console.log(response);
          this.message = "Donation was successfully changed";
        });
  }
 
}
