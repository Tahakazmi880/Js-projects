const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const swapBtn = document.getElementById('swap-btn');
const rate = document.getElementById('rate');



function calculate(){
const currencyOnecode = currencyOne.value;
const currencyTwocode = currencyTwo.value;

fetch(`https://v6.exchangerate-api.com/v6/14098dca93f217f8ec688236/pair/${currencyOnecode}/${currencyTwocode}`)
.then(res => res.json())
.then(data => {

    const conversionRate = data.conversion_rate;

    rate.innerText = `1 ${currencyOnecode} = ${conversionRate} ${currencyTwocode}`;

    amountTwo.value = (amountOne.value * conversionRate).toFixed(2);
}
);
};



calculate();

currencyOne.addEventListener('change',calculate);
amountOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountTwo.addEventListener('change',calculate);

swapBtn.addEventListener('click',() => {

    const temp = currencyOne.value;

    currencyOne.value = currencyTwo.value;

    currencyTwo.value = temp;
})





























































// const currencyFrom = document.getElementById('currency-from');
// const currencyTo = document.getElementById('currency-to');
// const amountFrom = document.getElementById('amount-from');
// const amountTo = document.getElementById('amount-to');
// const rateEl = document.querySelector('.rate');
// const swapBtn = document.getElementById('swap-btn');

// async function fetchExchangeRate(baseCurrency, targetCurrency) {
//   const url = `https://open.er-api.com/v6/latest/${baseCurrency}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   return data.rates[targetCurrency];
// }

// async function calculate() {
//   const fromCurrency = currencyFrom.value;
//   const toCurrency = currencyTo.value;
//   const amount = parseFloat(amountFrom.value);

//   if (!amount || amount <= 0) {
//     amountTo.value = '';
//     rateEl.textContent = 'Enter a valid amount';
//     return;
//   }

//   try {
//     const rate = await fetchExchangeRate(fromCurrency, toCurrency);
//     const converted = (amount * rate).toFixed(2);
//     amountTo.value = converted;
//     rateEl.textContent = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
//   } catch (error) {
//     rateEl.textContent = 'Error fetching rates';
//     console.error(error);
//   }
// }

// // Calculate on change or input
// currencyFrom.addEventListener('change', calculate);
// currencyTo.addEventListener('change', calculate);
// amountFrom.addEventListener('input', calculate);

// // Swap button
// swapBtn.addEventListener('click', () => {
//   const temp = currencyFrom.value;
//   currencyFrom.value = currencyTo.value;
//   currencyTo.value = temp;
//   calculate();
// });

// // Initial calculation
// calculate();
