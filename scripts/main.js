// ==============================
// 🌱 Sélection des éléments
// ==============================
const boutons = document.querySelector('.buttons');
const moviesList = document.querySelector('.moviez');
// ==============================
// 🧠 Variables globales
// ==============================
const myMoviez = [
  "Le Dîner de cons - comédie",
  "Inception - science-fiction",
  "Astérix et Obélix : Mission Cléopâtre - comédie",
  "Gladiator - drame",
  "La Grande Vadrouille - comédie",
  "Interstellar - science-fiction",
  "Intouchables - comédie",
  "Les Visiteurs - comédie",
  "Matrix - science-fiction",
  "Le Fabuleux Destin d'Amélie Poulain - comédie",
  "Shutter Island - thriller",
  "Bienvenue chez les Ch'tis - comédie",
  "The Dark Knight - action",
  "OSS 117 : Le Caire, nid d'espions - comédie",
  "Parasite - thriller",
  "Camping - comédie",
  "Forrest Gump - drame",
  "Deadpool - action",
  "Les Bronzés font du ski - comédie"
]

// ==============================
// 🚀 Fonctionnalités
// ==============================
function displayMovies(moviesArray) {
  moviesList.innerHTML = "";
  moviesArray.forEach(movie => {
    const title = movie.split(" - ")[0];
    const movieBox = document.createElement('div');
    movieBox.innerHTML = `${title}`;
    moviesList.appendChild(movieBox);
  })
}

function getFilteredMovies(genre) {
  return genre === "all"
    ? myMoviez
    : myMoviez.filter(movie => movie.includes(genre));
  // if (genre === "all") {
  //   return myMoviez;
  // } else {
  //   return myMoviez.filter(movie => movie.includes(genre))
  // }
}
// ==============================
// 🧲 Événements
// ==============================
displayMovies(myMoviez);

boutons.addEventListener('click', function(e) {
    if (e.target.tagName === "BUTTON") {
      displayMovies(getFilteredMovies(e.target.dataset.genre));            
    }
})