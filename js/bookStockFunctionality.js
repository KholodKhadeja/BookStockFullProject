let lastIdNum;
const claculateTheLastId =() =>{
    lastIdNum=+clonedArray[clonedArray.length-1].id + 1; //not stored in the local storag, its a normal array
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
    /*in default show the id, and then change it after submitting a new item*/
    initArray();
    bookIdInput.value=claculateTheLastId();
    loadList("bookStockPageCardsImages",clonedArray);
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
        console.log(clonedArray);

         localStorage.setItem("OriginalArray",JSON.stringify(clonedArray));
         initArray();
         document.getElementsByTagName("input").value=null;
        bookIdInput.value=claculateTheLastId();
        loadList("bookStockPageCardsImages");
 };






