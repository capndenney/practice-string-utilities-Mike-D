class StringError extends Error {
    constructor(message) {
        super(message);
        this.name = 'String Error';
    }
}

function validateString(testStr) {
    if (!testStr || typeof testStr !== "string" ) {
        throw new StringError("Please input a valid string.");
    }
    return true;
}

function handle(func, str) {
    try { 
        validateString(str);
        func(str);
    } catch (error) {
        console.error(`${error.name}: ${error.message}`);
    }
}

function capitalize(str){
    return console.log( str[0].toUpperCase() + str.slice(1));
} 

//capitalize("hello");
function reverse(str) {
    let reverseStr=str.split("").reverse().join("");
    return console.log(reverseStr);
} 

//reverse("hello");
function contains(str,substr){
    return console.log(str.includes(substr));
}

//contains("Hello world","or");
//console.log(contains("Hello world","or"));

const validCaps = (str) => handle(capitalize, str);
const validRev = (str) => handle(reverse, str);

module.exports={capitalize: validCaps,
    reverse: validRev,
    contains: contains
};