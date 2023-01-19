var projectsEl = document.getElementById("projects");

function writeProject(projectArr) {
  
  projectArr.forEach((el) => {
    var projectEl = document.createElement("article");
    var repoEl = document.createElement("p");
    var nameEl = document.createElement("h3");
    var imageEl = document.createElement("img");
    var descEl = document.createElement("p");

    nameEl.addEventListener("click", () => window.open(el.deploy, "_blank"));

    repoEl.textContent ="View Repository"
    repoEl.addEventListener("click", () => window.open(el.repo, "_blank"));



    projectsEl.appendChild(projectEl);
    projectEl.appendChild(imageEl);
    imageEl.appendChild(descEl);
    descEl.appendChild(repoEl);
    projectEl.appendChild(nameEl);
  });
}

var myProjects = [
  {
    name: "GitYourGameOn",
    repo: "https://github.com/troynj/GitYourGameOn",
    deploy: "https://bradcoleman60.github.io/GitYourGameOn/",
    image: "./assets/images/gitYourGameOn.gif",
    desc: "All the NBA data you need, from player stats to game times plus easy access to purchase tickets. Whats more - save your favorite players and view them all in one place",
  },
  {
    name: "passwordGenerator",
    repo: "https://github.com/troynj/passwordGenerator",
    deploy: "https://troynj.github.io/passwordGenerator/",
    image: "./assets/images/passwordGenerator.png",
    desc: "Recieve a randomized password after selecting parameters for your desired password!",
  },
  {
    name: "dailyPlanner",
    repo: "https://github.com/troynj/dailyPlanner",
    deploy: "https://troynj.github.io/dailyPlanner/",
    image: "./assets/images/dailyPlanner.png",
    desc: "You can create, view, and edit appointments for each hour of the work day. Your appointments will persist even after you reload the page!",
  },
  {
    name: "QuizGame",
    repo: "https://github.com/troynj/QuizGame",
    deploy: "https://troynj.github.io/QuizGame/",
    image: "./assets/images/quizGame.gif",
    desc: "Test your knowledge of everything code related with this code quiz game! view your scores and compete with your local friends!",
  },
  {
    name: "weatherForecast",
    repo: "https://github.com/troynj/weatherForecast",
    deploy: "https://troynj.github.io/weatherForecast/",
    image: "./assets/images/weatherForecast.png",
    desc: "Search a city - This website makes api calls to get the weather forecast for the current day and the future 5 days, plus the background image is updated with your searched city!",
  },
  {
    name: "wordGuesser",
    repo: "https://github.com/troynj/wordGuess",
    deploy: "https://troynj.github.io/wordGuess/",
    image: "./assets/images/wordGuesser.png",
    desc: "Guess the word before the time runs out!",
  },
];

writeProject(myProjects);
