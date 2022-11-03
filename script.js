let movies = [
        {
            "name": "Alien",
            "image": "https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg",
            "date": "28th October 2022",
            "time" : "22:00",
            "price": "£10.00"
        },
        {
            "name": "A Nightmare on Elm Street",
            "image": "https://upload.wikimedia.org/wikipedia/en/f/fa/A_Nightmare_on_Elm_Street_%281984%29_theatrical_poster.jpg",
            "date": "28th October 2022",
            "time" : "00:00",
            "price": "£10.00"
        },
        {
            "name": "Hellraiser",
            "image": "https://m.media-amazon.com/images/M/MV5BOGRlZTdhOGYtODc5NS00YmJkLTkzN2UtZDMyYmRhZWM1NTQwXkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_FMjpg_UX1000_.jpg",
            "date": "29th October 2022",
            "time" : "22:00",
            "price": "£10.00"
        },
        {
            "name": "The Texas Chain Saw Massacre",
            "image": "https://upload.wikimedia.org/wikipedia/en/a/a0/The_Texas_Chain_Saw_Massacre_%281974%29_theatrical_poster.jpg",
            "date": "29th October 2022",
            "time" : "00:00",
            "price": "£10.00"
        },
        {
            "name": "The Shining",
            "image": "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg",
            "date": "30th October 2022",
            "time" : "22:00",
            "price": "£10.00"
        },
        {
            "name": "Ring",
            "image": "https://m.media-amazon.com/images/M/MV5BYWVkMTgxOTktZmFkYi00YWExLTk3NzctYzUzNjQ2NDhmODA0XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
            "date": "30th October 2022",
            "time" : "00:00",
            "price": "£10.00"
        },
        {
            "name": "Friday the 13th",
            "image": "https://upload.wikimedia.org/wikipedia/en/2/2c/Friday_the_13th_%281980%29_theatrical_poster.jpg",
            "date": "31st October 2022",
            "time" : "22:00",
            "price": "£12.50"
        },
        {
            "name": "It",
            "image": "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",
            "date": "31st October 2022",
            "time" : "00:00",
            "price": "£15.00"
        },
        {
            "name": "Saw",
            "image": "https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg",
            "date": "1st November 2022",
            "time" : "01:00",
            "price": "£17.50"
        },
        {
            "name": "Get Out",
            "image": "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
            "date": "1st November 2022",
            "time" : "01:30",
            "price": "£20.00"
        },
        {
            "name": "Scream",
            "image": "https://upload.wikimedia.org/wikipedia/en/8/86/Scream_%281996_film%29_poster.jpg",
            "date": "1st November 2022",
            "time" : "02:00",
            "price": "£25.00"
        },
        {
            "name": "Halloween",
            "image": "https://upload.wikimedia.org/wikipedia/en/a/af/Halloween_%281978%29_theatrical_poster.jpg",
            "date": "1st November 2022",
            "time" : "03:00",
            "price": "£30.00"
        },
]


const main = document.querySelector('.main')

function createMovieBoard({name,image,date,time,price}){
    const card = document.createElement('div')
    card.classList.add("card")

    const movieTitle = document.createElement('h2')
    movieTitle.classList.add("card-title")
    
    const moviePoster = document.createElement('img');

    const movieInfo = document.createElement('article')
    movieInfo.classList.add("movie-info")

    const movieDate = document.createElement('h3')
    movieDate.classList.add("movie-date")

    const movieTime = document.createElement('h3')
    movieTime.classList.add("movie-time")

    const moviePrice = document.createElement('h3')
    moviePrice.classList.add("movie-price")

    const purchase = document.createElement('button')
    purchase.classList.add("basket")
    purchase.innerText = "Add to Basket"

    movieInfo.append(movieDate,movieTime,moviePrice,purchase)
    movieTitle.append(name)
    moviePoster.src = image;
    movieDate.append(date)
    movieTime.append(time)
    moviePrice.append(price)

    card.append(movieTitle,moviePoster,movieInfo)

    main.append(card)
}

movies.forEach(movie => createMovieBoard(movie))

const navBar = document.querySelector("#nav-bar-left")
const mainArea = document.querySelector("#mainContent")
const sideBar = document.querySelector("#navSide")

function showNavBar(){
    navBar.classList.toggle("hidden")
    sideBar.classList.toggle("hidden")
    mainArea.classList.toggle("extend")
}

const addBtn = document.querySelector("#menuButton")
addBtn.addEventListener('click', ()=>{showNavBar()})
document.addEventListener('click', (e) =>{ //e for event
    if(e.target.matches('.basket')){
        const card = e.target.closest('.card') 
        const button = e.target.closest('.basket')
        if(card.classList.length > 1){
            button.innerText = "Add to Basket"
        }else{
            button.innerText = "Remove from Basket"
        }
        card.classList.toggle('orange')
    }
})

const searchForm = document.querySelector("#search-bar")
searchForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const data = new FormData(searchForm)
    searchMovies(data.get("info"))
})

function searchMovies(data){
    let dat = data.trim().toLowerCase()
    let datLength = dat.length
    let i = 0;

    for(let movie of movies){
        let mov = movie.name.toLowerCase()
        let childClass = main.children[i].classList
        let movDat = mov.includes(dat)
        if(datLength===0 && childClass.contains('hide')){
            childClass.remove('hide') // unhide anything when nothing has been searched
        }
        else if(!movDat && !childClass.contains('hide') && datLength != 0){
            childClass.add('hide') //hide things that that don't match the search
        }
        else if(movDat && childClass.contains('hide')){
            childClass.remove('hide') //unhide anything that's been searched
        }
        i++
    }
}

