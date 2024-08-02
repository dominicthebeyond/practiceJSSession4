// Variables

let btn = document.querySelector('#new-quote');
let quoteElement = document.querySelector('.quote');
let personElement = document.querySelector('.person');

const quotes = [
    { 
        quote: "The only way to do great work is to love what you do." ,
        person: ` Steve Jobs` 
    },

    { 
        quote: "In three words I can sum up everything I've learned about life: it goes on." ,
        person: ` Robert Frost` 
    },

    { 
        quote: "The future belongs to those who believe in the beauty of their dreams." ,
        person: ` Eleanor Roosevelt` 
    },

    { 
        quote: "You must be the change you wish to see in the world." ,
        person: ` Mahatma Gandhi` 
    },

    { 
        quote: "Life is what happens when you're busy making other plans." ,
        person: ` John Lennon` 
    },

    { 
        quote: "The only limit to our realization of tomorrow is our doubts of today." ,
        person: ` Franklin D. Roosevelt` 
    },

    { 
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." ,
        person: ` Steve Jobs` 
    },

    { 
        quote: "The only way to do great work is to love what you do." ,
        person: ` Ralph Waldo Emerson` 
    },

    { 
        quote: "It does not do to dwell on dreams and forget to live." ,
        person: ` J.K. Rowling` 
    },

    { 
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts." ,
        person: ` Winston Churchill` 
    },
    { 
        quote: "You miss 100% of the shots you don’t take." ,
        person: ` Wayne Gretzky` 
    }
];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quoteElement.innerText = quotes[random].quote;
    personElement.innerText = quotes[random].person;

})