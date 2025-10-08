const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const filterBtn = document.getElementById('filter');
const sortBtn = document.getElementById('sort');
const calculateBtn = document.getElementById('calculate-wealth');

let data = [];

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const user = await res.json();
  const person = user.results[0];

  const newUser = {
    name: `${person.name.first} ${person.name.last}`,
    wealth: Math.floor(Math.random() * 1000000) + 10000
  };

  addData(newUser);
}

// Add new object to data array
function addData(obj) {
  data.push(obj);
  updateDOM();
}

// Double everyone's money
function doubleMoney() {
  data = data.map(user => {
    return { ...user, wealth: user.wealth * 2 };
  });
  updateDOM();
}

// Filter only millionaires
function showMillionaires() {
  data = data.filter(user => user.wealth >= 1000000);
  updateDOM();
}

// Sort by richest
function sortByRichest() {
  data.sort((a, b) => b.wealth - a.wealth);
  updateDOM();
}

// Calculate total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => acc + user.wealth, 0);

  const wealthEl = document.createElement('div');
  wealthEl.classList.add('total');
  wealthEl.innerHTML = `<strong>Total Wealth:</strong> ${formatMoney(wealth)}`;
  main.appendChild(wealthEl);
}

// Update DOM
function updateDOM(providedData = data) {
  main.innerHTML = '<h2><strong>User</strong> Wealth</h2>';

  providedData.forEach(user => {
    const div = document.createElement('div');
    div.classList.add('person');
    div.innerHTML = `<strong>${user.name}</strong> ${formatMoney(user.wealth)}`;
    main.appendChild(div);
  });
}

// Format number as money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
filterBtn.addEventListener('click', showMillionaires);
sortBtn.addEventListener('click', sortByRichest);
calculateBtn.addEventListener('click', calculateWealth);

// Optional: Start with 2 users
getRandomUser();
getRandomUser();
