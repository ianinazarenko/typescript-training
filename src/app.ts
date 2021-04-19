import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const invoice = new Invoice('J.J. Abrams', 'SW movie', 500);
console.log(invoice);

const anotherInvoice = new Invoice('Jackie Chan', 'filming', 900);
console.log(anotherInvoice);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;

  if (type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});

// Interface
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const shaun: isPerson = {
  name: 'Shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number) {
    console.log(`${this.name} spent ${amount}`);
    return amount;
  },
};

console.log(shaun);
