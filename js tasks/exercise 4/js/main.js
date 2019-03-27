"user strict";
let words = [];
let min;
let max;
for(let i = 0;i<3;i++)
{
    let userInput= prompt(i+1 + "ci sozu yazin:");
    words[i]= userInput;
       
     min=words[0];
     max=words[0];
     console.log( min)
    if (words[i].length> max.length) {
        max=words[i];
    }
    if (words[i].length< min.length) {
        min=words[i];
    }

}

console.log(words);
console.log("en uzun soz: " + max );
console.log("en qisa soz: " + min );