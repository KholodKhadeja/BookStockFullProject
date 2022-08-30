/*intial Data - it is posible to add other book via the other page*/
let clonedArray;
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
)];
localStorage.setItem("OriginalArray",JSON.stringify(bookArr));
clonedArray = _.cloneDeep(bookArr);

const initArray=() =>{
    realArr = localStorage.getItem("OriginalArray");
    if (realArr) {
      realArr = JSON.parse(realArr);
    } else {
      realArr = [];
      //[{"title":"villa","price":200000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/house-gf551a4fec_1920.jpg","id":1},{"title":"mantion","price":2000000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/pexels-chris-goodwin-32870.jpg","id":2},{"title":"snowwhite","price":150001,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/pexels-pixabay-280222.jpg","id":3},{"title":"adams castle","price":300000000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/villa-g891a73c21_1920.jpg","id":4},{"title":"loft","price":1250000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/house-gf14c5e267_1280.jpg","id":5},{"title":"lake house","price":1000000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/lake-g901a60927_1280.jpg","id":6},{"title":"mountain house","price":1500000,"imgUrl":"http://127.0.0.1:5500/project/assets/imgs/mountains-g3c8089815_1920.jpg","id":7}]
    }
   clonedArray = _.cloneDeep(realArr);
  };

  initArray();
