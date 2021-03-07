import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Account, DeleteAccount, SaveAccountRequestData } from './acc.model';
import { DeleteDonation, Donation, SaveDonationRequestData } from './don.model';

const ACC_API = 'https://jaffawebapidev.amax.co.il/API/SystemTables/GetAccounts';
const DON_API = 'https://jaffawebapidev.amax.co.il/API/SystemTables/GetDonationTypes';
const DON_SAVE = 'https://jaffawebapidev.amax.co.il/API/SystemTables/SaveDonationType';
const ACC_SAVE = 'https://jaffawebapidev.amax.co.il/API/SystemTables/SaveAccount';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getAllAcc(): Observable<any> {
    return this.http.get<any>(ACC_API);
  }

  getAllDon(): Observable<any> {
    return this.http.get<any>(DON_API);
  }

  createAcc(data: any): Observable<any> {
    return this.http.post(ACC_SAVE, data);
  }
  createDon(data: any): Observable<any> {
    return this.http.post(DON_SAVE, data);
  }

  updateAcc(data: SaveAccountRequestData): Observable<any> {
    return this.http.post(`${ACC_SAVE}`, data);
  }

  updateDon(data: SaveDonationRequestData): Observable<any> {
    return this.http.post(`${DON_SAVE}`, data);
  }

  deleteAcc(acc: DeleteAccount): Observable<Account> {
     const url = ACC_SAVE
    return this.http.post<Account>(url, acc , this.httpOptions ).pipe(
      tap(_ => console.log(`deleted account id=${acc.AccountId}`)));
  }

  deleteDon(don: DeleteDonation): Observable<Donation> {
    const url = DON_SAVE
    return this.http.post<Donation>(url, don , this.httpOptions).pipe(
      tap(_ => console.log(`deleted account id=${don.DonationTypeId}`)));;
  }

  // findByAcc(Username: any): Observable<Account[]> {
  //   return this.http.get<Account[]>(`${ACC_API}?Username=${Username}`);
  // }
  // findByDon(DonationTypeOther: any): Observable<Donation[]> {
  //   return this.http.get<Donation[]>(`${ACC_API}?DonationTypeOther=${DonationTypeOther}`);
  // }
}
