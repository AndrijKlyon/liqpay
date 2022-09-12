// Selectors
let startForm = document.forms.startForm;
let payForm = document.forms.payForm;

// Events
startForm.submit.addEventListener('click', showPayForm)

// Functions
function showPayForm(e) {
    let amount = +startForm.amount.value;
    console.log(amount);

    fetch('http://localhost:3022/api/payments/liqpay', {
    method: 'POST',
    body: JSON.stringify({
        amount
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        payForm.data.value = json.liqpayCheckoutRequestData.data;
        payForm.signature.value = json.liqpayCheckoutRequestData.signature;
        payForm.classList.remove('invisible');
    });
}
