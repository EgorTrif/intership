import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-adddon',
  templateUrl: './adddon.component.html',
  styleUrls: ['./adddon.component.css']
})
export class AdddonComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  addDon = new FormGroup({
    DonationTypeOther: new FormControl(''),
    DonationTypeId: new FormControl('')
    })

    submittedDon = false;
  AddDonFailed = false;

  constructor(public dialog: MatDialog, private listService: ListService) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  ngOnInit(): void {
    
  }
  saveDon(): void {
    this.listService.createDon(this.addDon.value).pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        response => {
          if (response.IsError == true){
          console.log(response.Data);
          this.AddDonFailed = true;}
          else {
            this.submittedDon = true;
            console.log(response)
          }
        });
  }

  newDon(): void {
    this.submittedDon = false;
    this.addDon = new FormGroup({
      DonationTypeOther: new FormControl(''),
      DonationTypeId: new FormControl('')
      })
  }

}
