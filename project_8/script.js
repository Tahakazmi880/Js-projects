// Get DOM elements
const searchForm = document.getElementById('submit');
const searchInput = document.getElementById('meal-search');
const randomBtn = document.getElementById('random-btn');
const resultHeading = document.getElementById('result-heading');
const mealsContainer = document.getElementById('meals');
const selectedMealContainer = document.getElementById('selected-meal');

// Search for meals
function searchMeal(e) {
  e.preventDefault();

  const searchText = searchInput.value.trim();

  selectedMealContainer.innerHTML = '';
  mealsContainer.innerHTML = '';
  resultHeading.innerHTML = '';

  if (searchText) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
      .then(data => {
        if (data.meals === null) {
          resultHeading.innerHTML = `<h2>No results found for "${searchText}"</h2>`;
        } else {
          resultHeading.innerHTML = `<h2>Search results for "${searchText}"</h2>`;
          mealsContainer.innerHTML = data.meals
            .map(meal => `
              <div class="meal-item" data-mealid="${meal.idMeal}">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <div class="meal-details">
                  <h3>${meal.strMeal}</h3>
                  <p><strong>Category:</strong> ${meal.strCategory || 'N/A'}</p>
                  <p><strong>Area:</strong> ${meal.strArea || 'N/A'}</p>
                  ${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags}</p>` : ''}
                </div>
              </div>
            `)
            .join('');
        }
      })
      .catch(() => {
        resultHeading.innerHTML = `<h2>Something went wrong. Please try again.</h2>`;
      });
  } else {
    alert('Kindly put the value');
  }
}

// Get meal by ID
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => displayMeal(data.meals[0]));
}

// Show full meal details
function displayMeal(meal) {
  resultHeading.innerHTML = '';
  mealsContainer.innerHTML = '';

  selectedMealContainer.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <div class="meal-details">
      <p><strong>Category:</strong> ${meal.strCategory || 'N/A'}</p>
      <p><strong>Area:</strong> ${meal.strArea || 'N/A'}</p>
      <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
    </div>
    <h3>Ingredients:</h3>
    <ul>
      ${getIngredientsList(meal).map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;
}

// Create ingredients list
function getIngredientsList(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} - ${measure}`);
    } else {
      break;
    }
  }

  return ingredients;
}

// Get a random meal
function getRandomMeal() {
  resultHeading.innerHTML = '';
  mealsContainer.innerHTML = '';
  selectedMealContainer.innerHTML = '';

  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
      const randomMeal = data.meals[0];
      displayMeal(randomMeal);
    })
    .catch(() => {
      resultHeading.innerHTML = `<h2>Failed to load a random meal.</h2>`;
    });
}

// Events
searchForm.addEventListener('submit', searchMeal);

// Click on meal card to get details
mealsContainer.addEventListener('click', e => {
  const mealItem = e.target.closest('.meal-item');
  if (mealItem) {
    const mealID = mealItem.getAttribute('data-mealid');
    getMealById(mealID);
  }
});

// Random meal event
randomBtn.addEventListener('click', getRandomMeal);
