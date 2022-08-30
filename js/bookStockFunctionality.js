let clonedArray=JSON.parse(localStorage.getItem("clonedArr"));
let lastIdNum=clonedArray[clonedArray.length-1].id;

document.getElementById("addbookId").value=+lastIdNum+1;
/*************************************** FORM INPUTS ***********************************/
let formBookName=document.getElementById("addBookName");
let formBookAuthorName=document.getElementById("addAuthorName");
let formBookPrice=document.getElementById("addBookPrice");
let formBookDate=document.getElementById("addRealeseDate");
let formBookKeywords=document.getElementById("addBookKeyword");
let formBookImgUrl=document.getElementById("addBookUrl");
const addNewBook=document.getElementById("addBookBtn");

formBookName.addEventListener('input', ()=>{
    addNewBook.disabled=false;
});

const handleFormData=(event)=>{
   event.preventDefault();
      clonedArray =[...clonedArray,
        new Book(formBookName.value, formBookPrice.value, formBookAuthorName.value,formBookImgUrl.value,
        formBookDate.value,
        formBookKeywords.value, +lastIdNum+1)];
        localStorage.setItem("clonedArr",JSON.stringify(clonedArray));
        document.getElementsByClassName("form-control").value=null;
        loadList("bookStockPageCardsImages");
};




