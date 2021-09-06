/**
 * The = equals operator is used for assingment - we first calculate the value on the right-hand side (source code) of the = and then put it 
 * into the variable that we specify on the left-hand side (target variable).
 * 
 * Instead of a = 42, some might prefer to flip the order so the source value is on the left and the target variable is on the right, like 
 * 42 -> a (this is not valid JavaScript!)
 *  
 */

//Consider:
a = 2;
b = a + 1;

/*
Here, I assign the 2 value to the a variable. Then, we get the value of the a variable (still 2), add 1 to it resulting in the value 3, then store
that value in the b variable.

While not technically an operator, you'll need the keyword var in every program, as it's the primary way you declare (aka create) variables.

A variable should always be declared with a name before using it.
*/

var a = 20;

a = a + 1;
a = a * 2;

console.log(a)  //42

/*
Math
        + (addition), - (substraction), * (multiplication), and / (division), as in a * 3.
        
Compound Assignment
        +=, -=, and /= are compound operators that combine a math operation with assignment, as in a += 2 (same as a = a + 2)

Increment/decrement
        ++(increment), --(decrement), as in a++ *similiar to a = a + 1

Object Property access
. as in console.log().

Objects are values that hold other values at specific named locations called properties. obj.a means an object value called obj
with a property of the name a. Properties can alternatively be accessed as obj["a"].

Equality
        == (loose equals), === (strict equals). != (loose not-equals), !== (strict not-equals), as in a == b

Comparison
        < (less than), > (greater than), <= (less than or loose equals), >= (greater than or loose-equals), as in a <= b.

Logical
        && (and), || (or), as in a || b that selects either a or b
        These operators are used to express compound conditionals
*/


