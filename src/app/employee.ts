export class Employee {

    id!: number;
    firstName!: string;
    lastName!: string;
    emailId!: string;
}
export class Account {
    id!: number;
    balance!: number;
    customerId!: number;
    accountName!: string;
}
export class DepositDetails {
    id!: number;
    accountId!: number;
    amount!: number;
}
