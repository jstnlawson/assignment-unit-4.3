console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) { 
    if (basket.length < maxItems) {
    basket.push(item);
    return true;
    }
    else if (basket.length >= maxItems) {
    return false;
    }
 //I tried doing this by referencing the isFull function and
 //couldn't get it to work. When I got the test to let me
 //pass doing it this way I couldn't help but move on.
 //If this is wrong or mostly wrong I'd like to know how to do it.   
}
addItem('kale');


function listItems() {
    basket.forEach((basket) => console.log(basket));
}
//I don't think I've done a "forEach", i like being able to
//write it out in one line but I see how it could be hard
//to understand.
console.log(listItems());

function empty() {
    if (basket.length > 0) {
        basket.pop();
    }
}

empty();
console.log(listItems());

function isFull() {
    if (basket < maxItems) {
        return false;
    }
   return true;
}

function removeItem(basket, item) {
    if (basket.indexOf(item) === true) {
        return basket.splice(item);
    } 
        return null;
}
//I'm sure I'm missing somthing simple but the more I work on it
//the more wrong it gets. I'm gonna have to take the L here.
//Looking forward to finding out the answer!



// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
