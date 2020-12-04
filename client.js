
const data = loadData()
console.log(data)
const $moviesList = document.getElementById("moviesList")

renderMovies()

function renderMovies() {
    data.movies.forEach(movie => {
        const $movie = document.createElement("div")
        $movie.innerHTML = `<h1>${movie.name}</h1>`
        movie.reviews.forEach(review => {
            $movie.innerHTML += `<li> rating: ${review.rating} by ${review.user.name}</li>`
        })
        $moviesList.append($movie)
    })
}



function loadData() {
    //JSON - JavaScript Object Notation
    const movies = [
    
        
    {
        //key : value
        "name" : "The Kingsman",
        "genre" : "Action",
        "reviews" : [
            {
                "rating" : 3,
                "like" : true,
                "user" : {
                    "name" : "Jacob Schafer",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 5,
                "like" : true,
                "user" : {
                    "name" : "Cody Schafer",
                    "gender" : "male",
                    "region" : "USA"
                } 
            }
        ]
    },    
        
        
    {
        //key : value
        "name" : "Avatar",
        "genre" : "Sci-Fi",
        "reviews" : [
            {
                "rating" : 3,
                "like" : true,
                "user" : {
                    "name" : "Jacob Schafer",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 4,
                "like" : true,
                "user" : {
                    "name" : "Cody Schafer",
                    "gender" : "male",
                    "region" : "USA"
                }
            }
        ]
    }
     
        
    ]
    
    
    return{
        "movies" : movies
    } 
    
}