import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
const invoice = new Invoice('J.J. Abrams', 'SW movie', 500);
console.log(invoice);
const anotherInvoice = new Invoice('Jackie Chan', 'filming', 900);
console.log(anotherInvoice);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
const shaun = {
    name: 'Shaun',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`${this.name} spent ${amount}`);
        return amount;
    },
};
console.log(shaun);
