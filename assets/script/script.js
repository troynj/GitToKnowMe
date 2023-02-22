var projectsEl = document.getElementById("projects");

function writeProject(projectArr) {
  
  projectArr.forEach((el, i) => {
    var projectEl = document.createElement("article");
    var imgEl = document.createElement("div");
    var titleEl = document.createElement("h3");
    var repoEl = document.createElement("p");
    // var imageEl = document.createElement("div");
    var descEl = document.createElement("p");
    repoEl.classList.add("repo")
    descEl.classList.add("desc")
    titleEl.classList.add("title")


    titleEl.addEventListener("mouseover", () => titleEl.textContent = "View Repository")
    titleEl.addEventListener("mouseleave", () => titleEl.textContent = `${el.title}`)
    titleEl.addEventListener("click", () => window.open(el.repo, "_blank"));
    imgEl.addEventListener("click", () => window.open(el.deploy, "_blank"));

    titleEl.textContent = el.title
    descEl.textContent = el.desc
    titleEl.textContent = el.image
    imgEl.style.backgroundImage = `url(./assets/images/${el.image})`

    // projectEl.style.backgroundColor = "red"


    projectsEl.appendChild(projectEl);
    projectEl.appendChild(imgEl);
    imgEl.appendChild(descEl);
    projectEl.appendChild(titleEl);
    
     i === 0 && projectEl.classList.add("showcase")
    // el.title === "GitYourGameOn" && imgEl.setAttribute("style","width: 100%")
  });
}

var myProjects = [
  {
    title: "Shadowlands",
    repo: "https://github.com/troynj/shadowlands",
    deploy: "https://powerful-oasis-50333.herokuapp.com/",
    image: "shadowlands.png",
    desc: "This is a game where you can create an accout, create new players, and battle your way through the shadowlands, where you and your monster will struggle to survive, but become stronger each victory.",
  },
  {
    title: "GitYourGameOn",
    repo: "https://github.com/troynj/GitYourGameOn",
    deploy: "https://bradcoleman60.github.io/GitYourGameOn/",
    image: "gitYourGameOn.gif",
    desc: "All the NBA data you need, from player stats to game times plus easy access to purchase tickets. Whats more - save your favorite players and view them all in one place",
  },
  {
    title: "passwordGenerator",
    repo: "https://github.com/troynj/passwordGenerator",
    deploy: "https://troynj.github.io/passwordGenerator/",
    image: "passwordGenerator.png",
    desc: "Recieve a randomized password after selecting parameters for your desired password!",
  },
  {
    title: "dailyPlanner",
    repo: "https://github.com/troynj/dailyPlanner",
    deploy: "https://troynj.github.io/dailyPlanner/",
    image: "dailyPlanner.png",
    desc: "You can create, view, and edit appointments for each hour of the work day. Your appointments will persist even after you reload the page!",
  },
  {
    title: "QuizGame",
    repo: "https://github.com/troynj/QuizGame",
    deploy: "https://troynj.github.io/QuizGame/",
    image: "quizGame.gif",
    desc: "Test your knowledge of everything code related with this code quiz game! view your scores and compete with your local friends!",
  },
  {
    title: "weatherForecast",
    repo: "https://github.com/troynj/weatherForecast",
    deploy: "https://troynj.github.io/weatherForecast/",
    image: "weatherForecast.png",
    desc: "Search a city - This website makes api calls to get the weather forecast for the current day and the future 5 days, plus the background image is updated with your searched city!",
  },
  {
    title: "wordGuesser",
    repo: "https://github.com/troynj/wordGuess",
    deploy: "https://troynj.github.io/wordGuess/",
    image: "wordGuesser.png",
    desc: "Guess the word before the time runs out!",
  }
];

writeProject(myProjects);
