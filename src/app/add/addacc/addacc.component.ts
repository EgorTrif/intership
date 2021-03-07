import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ListService } from 'src/app/list.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addacc',
  templateUrl: './addacc.component.html',
  styleUrls: ['./addacc.component.css']
})
export class AddaccComponent implements OnInit {

  addAcc = new FormGroup({
    AccountName: new FormControl(''),
    Username: new FormControl('')
    })
  
  
    submittedAcc = false;
    AddAccFailed = false;
    
    
    
    constructor(public dialog: MatDialog, private listService: ListService) { }
  
    ngOnInit(): void {
      
    }
  
    saveAcc(): void {
  
      this.listService.createAcc(this.addAcc.value)
        .subscribe(
          response => {
            if (response.IsError == true){
            console.log(response.Data);
            this.AddAccFailed = true;}
            else {
              this.submittedAcc = true;
              console.log(response)
            }
          });
    }
  
    newAcc(): void {
      this.submittedAcc = false;
      this.addAcc = new FormGroup({
        AccountName: new FormControl(''),
        Username: new FormControl('')
        })
    }

}
