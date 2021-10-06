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
            callback(self.http.responseText)
        }        
    }
    this.http.send()
}

// making http POST request 

// making http PUT request 

// making http DELETE request 
