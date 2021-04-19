import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
  bank: string = 'Bank of America';
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `shortInvoice: ${this.client} owes $${this.amount} for ${this.details}`;
  }
}

// class longInvoice {
//   client: string;
//   details: string;
//   amount: number;
//   bank: string = 'Bank of America';

//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }

//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }
