let liqpay = require('./liqpay');

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