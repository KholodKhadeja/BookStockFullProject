/*Add Book to book array */
let bookImportedArray=  JSON.parse(localStorage.getItem("OriginalArray"));
let lastIdNum=bookImportedArray[bookImportedArray.length-1].id;
console.log(lastIdNum);


