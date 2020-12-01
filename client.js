
console.log(loadData())


function loadData() {
    //JSON - JavaScript Object Notation
    const movies = [
    
        
    {
        //key : value
        "name" : "The Kingsman",
        "genre" : "Action",
        "reviews" : [
            {
                "rating" : 5,
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
                "rating" : 5,
                "like" : true,
                "user" : {
                    "name" : "Jacob Schafer",
                    "gender" : "male",
                    "region" : "USA"
                }
            },
            {
                "rating" : 1,
                "like" : false,
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