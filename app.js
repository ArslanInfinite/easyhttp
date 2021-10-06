const http = new easyHTTP

// GET Posts

// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(error, response){
//     if(error) {
//         console.log(error)
//     } else {
//         console.log(response)
//     }
//     } 
// )

// // get single post
// // http.get('https://jsonplaceholder.typicode.com/posts/1', 
// // function(error, post){
// //     if(error) {
// //         console.log(post)
// //     } else {
// //         console.log(post)

// //     }
// // } )

// creating data to send 

const data = {
    title: 'Custom Post', 
    body: 'This is a custom post'
}

// creating POST 
// http.post('https://jsonplaceholder.typicode.com/posts', data, 
// function(error, post) {
//     if(error){
//         console.log(error)
//     } else {
//         console.log(post)
//     }
// })

// updating POST - the id will be replaced with the final digit in the URL

http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
    if(error){
        console.log(error)
    } else {
        console.log(post)
    }
})

// deleting DELETE

http.delete('https://jsonplaceholder.typicode.com/posts/1', 
function(error, response){
    if(error) {
        console.log(error)
    } else {
        console.log(response)
    }
    } 
)
