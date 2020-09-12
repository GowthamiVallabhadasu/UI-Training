var condition= "pos";
var p= new Promise(function(resolve,reject)
{
    if(condition=="pos"){
        resolve("Fine")
    }
    else{
        reject("oops")
    }

}
);
Promise.then(function(response){

})
.catch(function(errorResponse){

})