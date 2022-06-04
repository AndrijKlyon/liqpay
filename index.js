let liqpay = require('./liqpay');

// let public_key = 'i00000000';
// let private_key = 'a4825234f4bae72a0be04eafe9e8e2bada209255';

// let params={
//     "public_key":"i00000000",
//     "version":"3",
//     "action":"pay",
//     "amount":"3",
//     "currency":"UAH",
//     "description":"test",
//     "order_id":"000001"
// }
const PUBLIC_KEY = 'sandbox_i31449529239';
const PRIVATE_KEY = 'sandbox_HE5rqWCsd1YjBQzZIY7fnhlYbG4flByfDdGxgqyW';

let params = {
    'action'         : 'pay',
    'amount'         : '100',
    'currency'       : 'UAH',
    'description'    : 'description text',
    'order_id'       : '3',
    'version'        : '3',
    'result_url'     : 'http://ncode-study-v1.0.0.s3-website.us-east-2.amazonaws.com/dashboard/payment'
}


// Create LiqPay
let lq = new liqpay(PUBLIC_KEY,PRIVATE_KEY);

// Selectors
let startForm = document.forms.startForm;
let payForm = document.getElementById('pay_form');

// Events
startForm.submit.addEventListener('click', showPayForm)

// Functions
function showPayForm(e) {
    params.amount = startForm.amount.value;
    payForm.innerHTML = lq.cnb_form(params);
}