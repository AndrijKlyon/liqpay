// Selectors
let startForm = document.forms.startForm;
let payForm = document.forms.payForm;

// Events
startForm.submit.addEventListener('click', showPayForm)

// Functions
function showPayForm(e) {
    let amount = +startForm.amount.value;
    console.log(amount);

    fetch('http://localhost:3022/api/payments', {
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
        payForm.data.value = json.data;
        payForm.signature.value=json.signature;
        payForm.classList.remove('invisible');
    });
}