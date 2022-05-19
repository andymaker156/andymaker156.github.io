const jokeEl = document.getElementById('joke');
const jokeBtn =document.getElementById('get_joke');

get_joke.addEventListener('click',generateJoke);

generateJoke();

async function generateJoke() {
  // call the icanhaz API
const jokeRes = await fetch('https://icanhazdadjoke.com/', {
  headers: {
    'Accept': 'application/json'
  }
})
  //set the new joke
const joke = await jokeRes.json();

console.log(joke);

jokeEl.innerHTML = joke.joke;
}