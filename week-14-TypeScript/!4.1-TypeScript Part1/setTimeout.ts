//function inside another function
function delayedCall(fn: () => void){  //uses void as type as it returns nothing
    setTimeout(fn,1000);
}

delayedCall(function(){
    console.log("hello")
})
