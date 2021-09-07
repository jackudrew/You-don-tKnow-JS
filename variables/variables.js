/*
                    Variables 
In some programming languages, you declare a variable(container)
to hold a specific type of value, such as number or string.
Static types, otherswise known as type enforcement 
Weak typing, otherwise known as dynamic typing, allows a variable to hold any type of value at any time.
It's a benefit for program flexibility by allowing a single variable to represent a value on matter what type form that value may take 
at any given moment in the program's logic flow 
*/

//JavaScript uses latter approach, dynamic typing, meaning variables can hold value of any type without any type enforcement.

var amount = 99.99;

amount = amount * 2;

console.log(amount)     //199.98

amount = "$" + String(amount);

console.log(amount)

/*
    First console.log() commands has to implicitly coerce that number of value to a string to print it out.
    JavaScript developers will not the flexibility of using the amount variable for each of the 99.99 and the "$199.98" values.
    Static-typing enthusiasts would prefer a separate variable like amountStr to hold the final "199.98" representation of the value
    because it's different type.

    Another common usage of variables is for centralizing value setting.
    This is more typically called constants - when you declare a variable with a value and intend for that value to not change throughout the program.
 */

    var TAX_RATE = 0.08;        //8% sales tax

    var amount = 99.99;

    amount = amount * 2;

    amount = amount + (amount * TAX_RATE);

    console.log(amount);                // 215.9784
    console.log(amount.toFixed(2))      // 215.98

    /*
    JavaScript numbers aren't automatically formatted for dollars - the engine doesn't know what your intent
    is, and there's no type for currency. toFixed() lets us specify how many decimal places we'd like the number rounded to, and it produces the string as necessary.
    */

    // Contstants precents accidently changing value somewhere else after the initial setting. - any would be rejected in a strict mode