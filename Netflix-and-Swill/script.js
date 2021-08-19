const apiKey = "7e79a65b"
const movieAPI = `http://www.omdbapi.com/?${apiKey}&`
const drinksAPI = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
const movieBox = document.createElement('div');
movieBox.classList.add("drinkBox");
const movieForm = document.getElementById('genre')
const drinkBox = document.createElement('div');
drinkBox.classList.add("drink-box")
const drinksMain = document.querySelector(".drinks")
drinksMain.appendChild(drinkBox)
const drinkImgBox = document.createElement('div')
drinkImgBox.classList.add('drink-box__img')
drinksMain.appendChild(drinkImgBox)
const filmBox = document.createElement('div');
filmBox.classList.add('film__title')
drinksMain.appendChild(filmBox)


function displayDrink (event){
    event.preventDefault();
    console.log(event.target.value);
    if (event.target.value === "horror"){
        axios.get (`${drinksAPI}Gin`)
        .then ((response)=> {
            const horrorDrink = response.data.drinks
            const randomDrink = horrorDrink[Math.floor(Math.random() * horrorDrink.length)];
            console.log(randomDrink)

            drinkBox.innerText = `Your cocktail is: ${randomDrink.strDrink}`
            drinkImgBox.style.backgroundImage = `url(${randomDrink.strDrinkThumb})`
            axios.get("http://www.omdbapi.com/?t=it&apikey=7e79a65b")
            .then((response)=>{
                console.log(response);
                console.log(response.data.Title);
                const Title = response.data.Title
                const Actor = response.data.Actors
                filmBox.innerText = `Your movie is: ${Title}. Starring: ${Actor}`
            })

        })
    }
    if (event.target.value === "comedies"){
        axios.get (`${drinksAPI}Vodka`)
        .then ((response)=> {
            const comediesDrink = response.data.drinks
            const randomDrink = comediesDrink[Math.floor(Math.random() * comediesDrink.length)];
            console.log(randomDrink)

            drinkBox.innerText = `Your cocktail is: ${randomDrink.strDrink}`
            drinkImgBox.style.backgroundImage = `url(${randomDrink.strDrinkThumb})`
            axios.get("http://www.omdbapi.com/?t=friday&apikey=cb09d04d")
            .then((response)=>{
                console.log(response);
                console.log(response.data.Title);
                const title = response.data.Title
                const actors = response.data.Actors
                filmBox.innerText = `Your movie is: ${title}. Starring: ${actors}`
            })
        })
    }
    if (event.target.value === "action"){
        axios.get (`${drinksAPI}Rum`)
        .then ((response)=> {
            const actionDrink = response.data.drinks
            const randomDrink = actionDrink[Math.floor(Math.random() * actionDrink.length)];
            console.log(randomDrink)

            drinkBox.innerText = `Your cocktail is: ${randomDrink.strDrink}`
            drinkImgBox.style.backgroundImage = `url(${randomDrink.strDrinkThumb})`
            axios.get(" http://www.omdbapi.com/?t=black+widow&apikey=cb09d04d")
            .then((response)=>{
                console.log(response);
                console.log(response.data.Title);
                const title = response.data.Title
                const actors = response.data.Actors
                filmBox.innerText = `Your movie is: ${title}. Starring: ${actors}`
            })
    })
}
    if (event.target.value === "sci-fi"){
        axios.get (`${drinksAPI}Brandy`)
        .then ((response)=> {
            const scifiDrink = response.data.drinks
            const randomDrink = scifiDrink[Math.floor(Math.random() * scifiDrink.length)];
            console.log(randomDrink)

            drinkBox.innerText = `Your cocktail is: ${randomDrink.strDrink}`
            drinkImgBox.style.backgroundImage = `url(${randomDrink.strDrinkThumb})`
            axios.get("http://www.omdbapi.com/?t=interstellar&apikey=cb09d04d")
            .then((response)=>{
                console.log(response);
                console.log(response.data.Title);
                const title = response.data.Title
                const actors = response.data.Actors
                filmBox.innerText = `Your movie is: ${title}. Starring: ${actors}`
            })
        })
    }
    if (event.target.value === "documentaries"){
        axios.get (`${drinksAPI}Champagne`)
        .then ((response)=> {
            const docuDrink = response.data.drinks
            const randomDrink = docuDrink[Math.floor(Math.random() * docuDrink.length)];
            console.log(randomDrink)

            drinkBox.innerText = `Your cocktail is: ${randomDrink.strDrink}`
            drinkImgBox.style.backgroundImage = `url(${randomDrink.strDrinkThumb})`
            axios.get("http://www.omdbapi.com/?t=inside+job&apikey=cb09d04d")
            .then((response)=>{
                console.log(response);
                console.log(response.data.Title);
                const title = response.data.Title
                const actors = response.data.Actors
                filmBox.innerText = `Your movie is: ${title}. Starring: ${actors}`
            })
        })
    }
    if (event.target.value === "drama"){
        axios.get (`${drinksAPI}Wine`)
        .then ((response)=> {
            const classicDrink = response.data.drinks
            const randomDrink = classicDrink[Math.floor(Math.random() * classicDrink.length)];
            console.log(randomDrink)

            drinkBox.innerText = `Your cocktail is: ${randomDrink.strDrink}`
            drinkImgBox.style.backgroundImage = `url(${randomDrink.strDrinkThumb})`
            axios.get("http://www.omdbapi.com/?t=pulp+fiction&apikey=cb09d04d")
            .then((response)=>{
                console.log(response);
                console.log(response.data.Title);
                const title = response.data.Title
                const actors = response.data.Actors
                filmBox.innerText = `Your movie is: ${title}. Starring: ${actors}`
            })
        })
    }
    if (event.target.value === "anime"){
        axios.get (`${drinksAPI}Wine`)
        .then ((response)=> {
            const animeDrink = response.data.drinks
            const randomDrink = animeDrink[Math.floor(Math.random() * animeDrink.length)];
            console.log(randomDrink)

            drinkBox.innerText = `Your cocktail is: ${randomDrink.strDrink}`
            drinkImgBox.style.backgroundImage = `url(${randomDrink.strDrinkThumb})`
            axios.get("http://www.omdbapi.com/?t=akira&apikey=cb09d04d")
            .then((response)=>{
                console.log(response);
                console.log(response.data.Title);
                const title = response.data.Title
                const actors = response.data.Actors
                filmBox.innerText = `Your movie is: ${title}. Starring: ${actors}`
            })
        })
    }
    else {
        console.log("you need to drink tonight!")
    }
};

// axios.get(`${drinksAPI}Wine`)
// .then ((response) => {
//     console.log(response.data.drinks);
//     const drinkChoice = response.data.drinks
//     displayDrink(drinkChoice)
// })

movieForm.addEventListener("change", displayDrink)