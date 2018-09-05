let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; //Must start with 
re = / world$/i; //Must ends with 
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; //Matches any ONE character
re = /h*llo/i; //Matches any character 0 pr more times

re = /gre?a?y/i; //optional character 
re = /gre?a?y\?/i; //escape character

//Brackets []  - Chracter Sets 

re = /gr[ae]y/i; //Must be an a or e 
re = /[GF]ray/; // Must be a G or F
re = /[^GF]ray/i; // Match Anything except a G or F ( inside ^ means not)
re = /[A-Z]ray/; // Match any upper case letter 
re = /[a-z]ray/; // Match any lower case letter
re = /[A-Za-z]ray/; // Match any letter 
re = /[0-9][0-9]ray/; // Match any digit

// Braces  {} - Quantifiers 
re = /Hel{2}o/i; //Must occur exactly {m} amount of times 

re = /Hel{2,4}o/i; //Must occur exactly {m} between amount of times

re = /Hel{2,}o/i; // Must occur at least {m} times

//parantheses () - Grouping 
re = /^([0-9]x){3}$/;

// shorthand character classes 
re = /\w/; //word Character - alpha numeric or underscore
re = /\w+/; //+ = one or more word Character - alpha numeric or underscore
re = /\W/; //non word Character Uppercase W - alpha numeric or underscore
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more time 
re = /\D/; // Match any Non-digit 
re = /\s/; // Match whitespace 
re = /\S/; // Match non whitespace
re = /Hell\b/i; // word boundary 

//Assertions 
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if followed by y

//String to match
const str = 'Hello, welcome to Hell';


const result = re.exec(str);
console.log(result);

// Log results

function reTest(re, str) {

    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.soruce}`);

    }
}

reTest(re, str);