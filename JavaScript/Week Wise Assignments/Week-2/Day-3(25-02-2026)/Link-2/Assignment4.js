const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//Only Sci-Fi movies
const Sfmovies=movies.filter(moviesObj=>moviesObj.genre==='Sci-Fi')
console.log('The movies in Sci-Fi genre:',Sfmovies)

//Map to return Inception (8.8)
const inceptionText = movies.map(moviesObj => moviesObj.title === "Inception" ? `${moviesObj.title} (${moviesObj.rating})` : null)
console.log(inceptionText)

//Reduce to find average ratings
const avgRating=movies.reduce((acc,moviesObj)=>acc+moviesObj.rating,0)
console.log('The average rating:',avgRating/movies.length)

//FInd movie called Joker
const key=movies.find(moviesObj=>moviesObj.title==='Joker')
console.log('The movie titled Joker:',key)

//Index of Avengers
const fkey=movies.findIndex(moviesObj=>moviesObj.title==='Avengers')
console.log('The index of the movie titled Avengers:',fkey)