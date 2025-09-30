const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');

let ticketPrice = +movie.value; // Use let instead of const

function UpdatedSelectedSeats() {
  const SelectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...SelectedSeats].map(seat =>  [...seats].indexOf(seat));

// console.log(seatsIndex);

  const SelectedSeatsCount = SelectedSeats.length;
  count.innerText = SelectedSeatsCount;
  total.innerText = SelectedSeatsCount * ticketPrice;
//   localStorage.setItem('name','taha');
localStorage.setItem('SelectedSeats', JSON.stringify( seatsIndex) );
}

function setMovieData(movieIndex,moviePrice){
 localStorage.setItem('SelectedMovieIndex',movieIndex);
 localStorage.setItem('SelectedMoviePrice',moviePrice);

}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem(selectedSeats));

    console.log(selectedSeats);
    
}


// Event listener for seat click
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    UpdatedSelectedSeats();
  }
});


movie.addEventListener('change', (e) => {
  ticketPrice = +e.target.value; // here is an + operator who converts strings to int
  setMovieData(e.target.selectedIndex, e.target.value);
  
  UpdatedSelectedSeats(); 
});
