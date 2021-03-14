export interface Donation {
DonationTypeEng: string;
DonationTypeInfo: string;
HashHeshZchut: string;
HideIt: number;
IsDonate: number;
RecieptTypeId: number;
ReferenceMonths: number;
orgid: number;
DonationTypeOther: string;
DonationTypeId: number;
}

export interface SaveDonationRequestData {
DonationTypeOther: string;
DonationTypeId: number;
}
  
  // type SaveAccountRequestData = Pick<Account, 'AccountId' | 'AccountName'>
  
  export interface DeleteDonation {
    DonationTypeId: number
    deleteRow: 1
  }