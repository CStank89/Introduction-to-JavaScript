/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

// let votingAge = '18'

// if (votingAge >= 18){
//     console.log(true);
// }
// else if(votingAge < 18){
//     console.log(false);
// }

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)










//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

//Task d: Write a function to multiply a*b

// function multiply(a , b){
//     return a * b;
// }

// console.log(multiply(2 , 4));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

// multiple age by 7

// let age = 31
// let dogAge = 7

// function multiply(age  , dogAge){
//     return age * dogAge;

// }
// console.log (multiply(age , dogAge));

/************************************************************** Task 3 **************************************************************/
// Dog feeder
// takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

// feeding requirements

// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// function dogfeeder(weight, age) {
//   if (age >= 1) {
//     if (weight <= 5) {
//       return weight * 0.05;
//     } else if (weight <= 10) {
//       return weight * 0.04;
//     } else if (weight <= 15) {
//       return weight * 0.03;
//     } else {
//       return weight * 0.02;
//     }
//   } else {
//     if (age <= 4 / 12) {
//       return weight * 0.1;
//     } else if (age <= 7 / 12) {
//       return weight * 0.05;
//     } else {
//       return weight * 0.04;
//     }
//   }
// }
// console.log(dogfeeder(4, 3 / 12));

//     if (year >= 1 && weight <= 5){
//         console.log(weight*.05)
//     }
//     if (year >= 1 && weight >= 6 && weight <= 10){
//         console.log(weight*.04)
//     }
//     if (year >= 1 && weight >= 11 && weight <=15){
//         console.log(weight*.03)
//     }

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number


function choices(){
function choices(selection) {
let random = Math.random();{
    console.log(random);
}
if (random <= 0.3) {
    console.log('Computer chooses rock.');
if (selection === 'rock') {
    console.log('Games ends in a draw');
    }
    if (selection === 'paper') {
    console.log('Paper covers rock! You Win!');
    }
    if (selection === 'scissors') {
    console.log('Rock beats scissors! You Lose!');
    }
    }
    if (random > 0.3 && random <= 0.6) {
    console.log('Computer chooses paper');
    if (selection === 'paper'){
    console.log('Game ends in a draw');
    }
    if (selection === 'rock') {
    console.log('Paper cover rock! You Lose');
    }
    if (selection === 'scissors'){
    console.log('Scissors beats paper! You win');
    }
    }

    if (random > 0.6) {
    console.log('Computer chooses scissors');
        if (selection === 'scissors'){
            console.log('Game ends in a draw');
        }
        if (selection === 'paper'){
            console.log('Scissors beats paper! You win');
        }
        if (selection === 'rock'){
            console.log('Rock beats scissors! You lose');
        }
    

    }
    }
}
    console.log(choices('paper'));
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// let factor = 0.621371
// let kilometers = (10);

// function multiply(kilometers , factor){
//     return kilometers * factor;

// }
// console.log(kilometers*factor + ' miles' );

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

// let factor = 30.48
// let feet =(2);

// function multiply(feet , factor){
//     return feet * factor;
// }
// console.log(feet*factor + ' centimeters');

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(){
    for (let i = 0, i < 99; i--){

    }
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

// function GradeCalc(mark , grade){
//     if (mark >= 90){
//         return "A";
//     }
//     if (mark < 90 && mark >= 80){
//         return "B";

//     }
    
    
// }
// console.log GradeCalc( mark (88));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
