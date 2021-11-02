console.log("John");
// How do I get the index of the first character?
const holdJohn = "John";
const s = "Shaundel";
console.log("Shaundel".indexOf("l"), "<-- check");
// console.log();
// console.log(indexOf.(0));
// console.log(indexOf)
console.log(s.indexOf("l"));

function indexOf2(str, character){
    for(let i = 0; i < str.length; i++){
        if(str[i] === character){
            return i;
        }
    }
    return -1;
}

console.log(indexOf2("Shaundel", "J"));

console.log(holdJohn.slice(0, 1));
console.log(holdJohn[0]);

const exampleArray = [5, 1, 35, 343, "testing", 23, "teseting 4", "another one", "last item"];

console.log(exampleArray[exampleArray.length-1]);