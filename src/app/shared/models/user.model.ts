import { Account } from './account.model';

export class User {
    email: string;
    token: string;
    accounts:Account[];
  }