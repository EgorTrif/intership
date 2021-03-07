export interface Account {
ASHRAY: number;
AccountDetail: string;
AccountTypeId: number;
ApiName: string;
ApiPassword: string;
CheqNo: string;
HASHAVSHEVET: string;
orgid: number;
AccountId: number;
AccountName: string;
Username: string;
}

export interface SaveAccountRequestData {
  AccountId: number;
  AccountName: string;
  Username: string;
}

// type SaveAccountRequestData = Pick<Account, 'AccountId' | 'AccountName'>

export interface DeleteAccount {
  AccountId: number
  deleteRow: 1
}