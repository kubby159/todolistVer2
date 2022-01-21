const quotes = document.querySelector(".quotes-box");
const quotesAuthor = quotes.querySelector(".author");
const quotesMain = quotes.querySelector(".quotes");

// backGroundImage
const backImgBody = document.querySelector("body");

// backGroundImageCollection

const backGroundImage = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];

const quotesCollection = [
  {
    text: `“Be yourself, everyone else is already taken.”`,
    author: "Oscar Wilde",
  },
  { text: `“So many books, so little time.”`, author: "Frank Zappa" },
  {
    text: `Marcus Tullius Cicero
    “A room without books is like a body without a soul.”`,
    author: "Marcus Tullius Cicero",
  },
  {
    text: `“You only live once, but if you do it right, once is enough.”`,
    author: "Mae West",
  },
];

const randomSelector =
  quotesCollection[Math.floor(Math.random() * quotesCollection.length)];

function addQuotes() {
  quotesMain.innerText = randomSelector.text;
  quotesAuthor.innerText = randomSelector.author;
  backImgBody.style.backgroundImage = `url('./image/${
    backGroundImage[Math.floor(Math.random() * backGroundImage.length)]
  }')`;
}

addQuotes();
