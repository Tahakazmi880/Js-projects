// DOM elements ko get karna
const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const transactionList = document.getElementById('transactions');
const form = document.getElementById('transactionForm');
const textInput = document.getElementById('text');
const amountInput = document.getElementById('amount');

// Transactions array
let transactions = [
  { id: 1, reason: 'Salary', amount: 5000 },
  { id: 2, reason: 'Dinner Party', amount: -1500 },
  { id: 3, reason: 'Freelance Project', amount: 3000 },
  { id: 4, reason: 'Electricity Bill', amount: -800 },
  { id: 5, reason: 'Groceries', amount: -1200 },
  { id: 6, reason: 'Gift Received', amount: 1000 }
];

// Function to update balance, income, and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
  const totalIncome = amounts
    .filter(amount => amount > 0)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);
  const totalExpense = (
    amounts.filter(amount => amount < 0).reduce((acc, val) => acc + val, 0) * -1
  ).toFixed(2);

  balance.innerText = total;
  income.innerText = totalIncome;
  expense.innerText = totalExpense;
}

// Function to add transaction to DOM
function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');

  item.classList.add(transaction.amount < 0 ? 'expense' : 'income');
  item.innerHTML = `
    ${transaction.reason} 
    <span>${sign}$${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">🗑</button>
  `;

  transactionList.appendChild(item);
}

// Function to remove transaction by ID
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  init(); // re-render everything
}

// Function to initialize app
function init() {
  transactionList.innerHTML = ''; // clear existing
  transactions.forEach(addTransactionDOM);
  updateValues();
}

// Add new transaction from form
function addTransaction(e) {
  e.preventDefault();

  const reason = textInput.value.trim();
  const amount = +amountInput.value;

  if (reason === '' || isNaN(amount)) {
    alert('Please enter valid description and amount');
    return;
  }

  const newTransaction = {
    id: generateID(),
    reason: reason,
    amount: amount
  };

  transactions.push(newTransaction);
  addTransactionDOM(newTransaction);
  updateValues();

  // Clear inputs
  textInput.value = '';
  amountInput.value = '';
}

// Generate unique ID
function generateID() {
  return Math.floor(Math.random() * 1000000);
}

// Event listener
form.addEventListener('submit', addTransaction);

// Initialize app on load
init();
