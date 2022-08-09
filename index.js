function receivesAFunction(newFunc){
    return newFunc()
}
// arbitrary named function 1 
function  hello(param= "Jake"){
    console.log(`Hello, ${param}`)
}


function returnsANamedFunction(){
    return function  hello(param= "Jake"){
        console.log(`Hello, ${param}`)
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    }
}