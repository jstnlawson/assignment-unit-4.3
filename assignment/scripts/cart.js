console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) { 
    if (isFull() === false) {
    basket.push(item);
    return true;
    }
    else if (isFull()) {
    return false;
    }
 //I tried doing this by referencing the isFull function and
 //couldn't get it to work. When I got the test to let me
 //pass doing it this way I couldn't help but move on.
 //If this is wrong or mostly wrong I'd like to know how to do it.   
}
addItem('kale');

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);


function listItems() {
    basket.forEach((basket) => console.log(basket));
}
//I don't think I've done a "forEach", i like being able to
//write it out in one line but I see how it could be hard
//to understand.
console.log(listItems());

function empty() {
    while (basket.length > 0) {
        basket.pop();
    }
}

empty();
console.log(basket);

function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
   return true;
}

console.log(isFull());

// function removeItem(basket, item) {
//     if (basket.indexOf(item) === true) {
//         return basket.splice(item);
//     } 
//         return null;
// }

// console.log(removeItem());

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
