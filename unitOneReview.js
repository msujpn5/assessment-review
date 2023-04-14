// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE
const myname = "John"
let season = 'winter'
let color = `red`
let number = 20
let todayIsCold = false
let chiliIsSpicy = true
let pizza = null

let myFavColor = `My favorite color is ${color}` //template literal
let myFavColor2 = "My favorite color is " + color //concatination 

let myFavNumber = "My favorite number is " + number

//console.log("My favorite number is ", number) not used often
//console.log(typeof number)
//prints the type of the value

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguages' that include 4 coding language of your choice. 
*/

//CODE HERE
let codingLanguages = ['javascript', 'python', 'java', 'swift']

/* 
    Access the 3rd element of the 'codingLanguages' array.
*/

//CODE HERE
let index = 2
console.log(codingLanguages[index])
// OR JUST console.log(codingLanguages[2]) with NO let index

/*
    Copy the array using one of the array methods, and call it 'codingLanguages2.'
*/

//CODE HERE
let codingLanguages2 = codingLanguages.slice(0, codingLanguages.length) //empty slice or 0 would do the same thing

/* 
    Add another coding language to the codingLanguages2 array.
*/

//CODE HERE
codingLanguages2.push("Rust", "PHP")
//codingLanguages2.unshift("SQL")

console.log(codingLanguages2)

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE
instruments.pop()

console.log(instruments)
/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE
instruments.shift()

console.log(instruments)
/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE
instruments.unshift("guitar")

/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE
instruments.splice(2, 1, "glockenspiel")


// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// if(condition){
//     code
// }

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE
if(num % 2 === 0){
    console.log(num)
}else{
    console.log("num is not an even number")
}

// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE
if(score <= 10){
    console.log("Failed")
}else if(score > 10 && score < 41){
    console.log("The grade is C")
}else if(score > 40 && score < 71){
    console.log("The grade is B")
}else{
    console.log("The grade is A")
}

// score >= 70 ? console.log("The grade is A"):
// score >= 40 ? console.log("The grade is B"):
// score >= 11 ? console.log("The grade is C"):console.log("Failed")



// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// for(let i = 0; i < 5; i++){

// }

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0 //need to set a variable to collect the total price. Initialize it to 0

for(let i = 0; i < price.length; i++){
    totalPrice += price[i] //OR total = total + price[i]
}
console.log(totalPrice) //check the total price

/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let average = totalPrice / price.length //divide by the number of elements in the array
console.log(average)

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE
for( let i = 0; i < colors.length; i++){
    if(colors[i] === "red"){ //want to check the elements in the array
        console.log("Apple")
    }else if(colors[i] === "green"){
        console.log("Melon")
    }else if(colors[i] === "yellow"){
        console.log("Banana")
    } //don't want to end with only an else statement in case somebody adds to the array
}


// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning
    -- Analysis of Requirements
    -- Design
    -- Implementation
    -- Testing & Integration
    -- Maintain
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git
            version control. allows you to track your versions
        -- github
            web host for git repositories. store your git remotely
        -- git init
            initialize git in a folder on your computer
        -- git clone
            download git from github
        -- git status
        -- git add
            gets changes for your next commit
        -- git commit
            saves the state of your files in your repository
        -- git push
            pushes git after changes
    - How to push git to github
*/

