const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const swapBtn = document.getElementById('swap-btn');
const rateEl = document.getElementById('rate');



function calculate(){
 
};


calculate();































































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
