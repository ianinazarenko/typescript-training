import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  bank: string = 'Bank of America';
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `shortInvoice: ${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}
