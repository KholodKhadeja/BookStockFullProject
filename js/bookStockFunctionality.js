let lastIdNum;
const claculateTheLastId =() =>{
    lastIdNum=+clonedArray[clonedArray.length-1].id + 2; //not stored in the local storag, its a normal array
    return lastIdNum;
  }
  let formBookName=document.getElementById("addBookName");
  let formBookAuthorName=document.getElementById("addAuthorName");
  let formBookPrice=document.getElementById("addBookPrice");
  let formBookDate=document.getElementById("addRealeseDate");
  let formBookKeywords=document.getElementById("addBookKeyword");
  let formBookImgUrl=document.getElementById("addBookUrl");
  const addNewBook=document.getElementById("addBookBtn");
  let bookIdInput=document.getElementById("addbookId");
/*************************************** FORM INPUTS ***********************************/
window.addEventListener('load',()=>{
    initArray();
    bookIdInput.value=claculateTheLastId();
    loadList("bookStockPageCardsImages","admin");
});

const handleFormData=(event)=>{
    event.preventDefault();
       clonedArray=[...clonedArray,new Book(formBookName.value,
         formBookPrice.value,
          formBookAuthorName.value,
          formBookImgUrl.value,
        formBookDate.value,
        formBookKeywords.value, 
        claculateTheLastId())];

         localStorage.setItem("OriginalArray",JSON.stringify(clonedArray));
         initArray();
         document.getElementsByTagName("input").value=null;
        bookIdInput.value=claculateTheLastId();
        loadList("bookStockPageCardsImages","admin");
 };






