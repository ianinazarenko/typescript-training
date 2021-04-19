export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.bank = 'Bank of America';
    }
    format() {
        return `shortInvoice: ${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
