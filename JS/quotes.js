

const quotes = document.querySelector('.quotes-display');
const quotesAuthor = quotes.querySelector('.quotes-display__authors');
const quotesMain = quotes.querySelector('.quotes-display__quotes');

console.log(quotesAuthor);
console.log(quotesMain);


const quotesCollection = [
    {text: "a", author: "Jay"},
    {text: "b", author: "dongguk"}
]

const randomSelector = quotesCollection[Math.floor(Math.random()*quotesCollection.length)];

function addQuotes() {

   quotesMain.innerText = randomSelector.text;
   quotesAuthor.innerText = randomSelector.author;         
    
}

addQuotes()