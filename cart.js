///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return (cartTotal * (tax + 1)) - couponValue;
}

console.log(calcFinalPrice(10, 3, .1));


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Properties:
        - name (string) - The restaurant needs to know the customer's name so they can address them in communications. It's a string data type because it's text data.
        - address (string) - The restaurant needs to know the customer's address if the food is being delivered. It's a string data type because it's text data.
        - credit card (number) - The restaurant might store the customer's credit card number for the cusotmer's convenience when making a purchase. It's a number data type because it only consists of numbers.
        - username (string) - The restaurant needs to know the customer's username so the customer can log in. It's a string data type because it will be the customer's email, which is text data.
        - password (string) - The restaurant needs to know the customer's password so the customer can log in. It's a string data type because it's text data.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer = {
    name: "Kyle Kocherhans",
    address: "123 N 456 W Orem, UT",
    credit: 1234567891011120,
    username: "kyleemail@gmail.com",
    password: "encryptedpassword"
};