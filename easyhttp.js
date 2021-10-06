function easyHTTP(){
    this.http = new XMLHttpRequest()
}

// making http GET request 
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true)
    // self will capture the scope of this 
    let self = this 
    this.http.onload = function(){
        if(self.http.status === 200) {
            // null here is for an error 
            callback(null, self.http.responseText)
        } else {
            callback('Error: ' + self.http.status)
        }
    }
    this.send()
}

// making http POST request 
// this function will have the url the user enters as well as the data to be posted to the database
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true)
    // data right now is a JS object and needs to sent as a json string
    // the header can be changed via the Header, Content-type is set to application/json as the data type
    this.http.setRequestHeader('Content-type', 'application/json')
    let self = this 
    this.http.onload = function(){
        callback(null, self.http.responseText)
        }
    this.send(JSON.stringify(data))
}
// making http PUT request 

// making http DELETE request 
