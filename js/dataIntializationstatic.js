/*intial Data - it is posible to add other book via the other page*/

let bookArr=[
    /*book 1*/
    new Book("Web Design with HTML, CSS, JavaScript and jQuery",
    140,
    "Jon Duckett",
   "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/1189/9781118907443.jpg",
   "13 Aug 2014",
   ["html ","css ","javacript ","js ", "jquery ","web"],
   "0"),
   /*book 2*/
    new Book("Head First HTML and CSS",
    145,
    "Elisabeth Robson",
    "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5961/9780596159900.jpg",
    "02 Oct 2012",
    ["html ","css ","web"],
    "1"),
    /*book 3*/
    new Book("A smarter way to learn HTML CSS",
    100,
    "Mark Myers",
    "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5086/9781508673873.jpg",
    "13 Mar 2015",
    ["html ","css ","web"],
    "2"),
    /*book 4*/
new Book("JavaScript : The Good Parts",
85,
"Douglas Crockford",
"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5965/9780596517748.jpg",
"03 Jun 2008",
["js"],
"3"),
/*book 5*/
new Book("Eloquent Javascript, 3rd Edition : A Modern Introduction to Programming",
115,
"Marijn Haverbeke",
"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5932/9781593279509.jpg",
"01 Dec 2020",
["js"],
"4"
),
new Book("Eloquent Javascript, 3rd Edition : A Modern Introduction to Programming",
115,
"Marijn Haverbeke",
"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5932/9781593279509.jpg",
"01 Dec 2020",
["js"],
"5"
)
];
localStorage.setItem("OriginalArray",JSON.stringify(bookArr));


/*DEEP CLONE THE ORIGINAL ARRAY*/
let clonedArray=JSON.parse(JSON.stringify(localStorage.getItem("OriginalArray")));
console.log("clonedArray",clonedArray);