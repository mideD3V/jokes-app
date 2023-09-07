document.querySelector("body").style.backgroundColor = "#111";

let joke = document.querySelector(".joke");
const crack = document.querySelector("#crack-btn");

// const jokeData = [
//   "Hello World",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//   "Recusandae repellendus nisi at saepe quam illum ipsum ad tempore placeat quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit",
//   " Id, accusamus",
//     "Hey! Funny boy! Tell me another joke",
//     "Some crazy joke",
//     "You want a joke? Look into the mirror"
// ];



// const jokeData = {
//   method: "GET",
//   url: "https://world-of-jokes1.p.rapidapi.com/v1/jokes/categories",
//   headers: {
//     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//     "X-RapidAPI-Host": "world-of-jokes1.p.rapidapi.com",
//   },
// };

//GET JOKE FUNCTION
crack.addEventListener("click", getJoke);

async function getJoke(e) {
  e.preventDefault()
  console.log("joker!");

  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      'Accept': 'application/json'
    }
  }).then(data => data.json())
    .then(obj =>   joke.innerHTML = obj.joke)




};

  // joke.textContent = jokeData[Math.floor(Math.random() * jokeData.length)];
  // joke.textContent = jokeData;