const http = new easyHTTP

// GET Posts

http.get('https://jsonplaceholder.typicode.com/posts1', 
function(error, response){
    if(error) {
        console.log(error)
    } else {
        console.log(response)
    }
    } 
)