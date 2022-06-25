let x=0;
//Create the function
function greet(name){
    x++;
    return "Hello " + name + "!";
}

/*let greet = function(userName){
    x++
    return "Hello " + userName + "!";
}*/

//call the function
document.write(`<p>${greet("Tony")}</p>`);
document.write(`<p>${greet("Sebastian")}</p>`);
document.write(`<p>${greet("Mj")}</p>`);

console.log(myArray);