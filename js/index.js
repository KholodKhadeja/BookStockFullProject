const gridBTN=document.getElementById("gridBtn");
const listBTN=document.getElementById("listBtn");
const carouelBTN=document.getElementById("carouselBtn");
const mainDisplayContainer=document.getElementById("displayConatiner");
const addNewBookStock=document.getElementById("addBookToStock");
const loginBtnModal=document.getElementById("loginBtnModal");
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
let loginModal= new bootstrap.Modal(document.getElementById('LoginModal'));
let bookIdInput=document.getElementById("addbookId");
let searchDiv=document.getElementById("SearchBookDiv");
let sortDiv=document.getElementById("sortGroup");


/*#button-addon1
#searchInput*/
let lastIdNum;
const claculateTheLastId =() =>{
    if(bookArr.length===0) lastIdNum=0;
    else{
    lastIdNum=+clonedArray[clonedArray.length-1].id +1;} //not stored in the local storag, its a normal array
    return lastIdNum;
  }

  const closeModal2Sec=()=>{
    myModal.hide();
    localStorage.setItem("OriginalArray",JSON.stringify(clonedArray));
    initArray();
    loadList("displayConatiner","index");
};

let selectModeOption="grid";

window.addEventListener('load',()=>{
loadDefualtOptions();
searchDiv.classList.add("hidden");
sortDiv.classList.add("not-visible");
});

addNewBookStock.addEventListener('click',()=>{
    document.getElementsByTagName("input").value='';
        bookIdInput.value=claculateTheLastId();
});

const handleFormData=(event)=>{
    event.preventDefault();
    let formBookName=document.getElementById("addBookName");
    let formBookAuthorName=document.getElementById("addAuthorName");
    let formBookPrice=document.getElementById("addBookPrice");
    let formBookDate=document.getElementById("addRealeseDate");
    let formBookKeywords=document.getElementById("addBookKeyword");
    let formBookImgUrl=document.getElementById("addBookUrl");
    
    clonedArray=[...clonedArray,new Book(
        formBookName.value,
         formBookPrice.value,
          formBookAuthorName.value,
          formBookImgUrl.value,
        formBookDate.value,
        formBookKeywords.value, 
        claculateTheLastId())];
    setTimeout(closeModal2Sec,2000);
};

    gridBTN.addEventListener("click", ()=>{
        loadGrid("displayConatiner");
     });
     
     carouelBTN.addEventListener("click",()=>{
     loadCarousel();
     });
     
     listBTN.addEventListener("click",()=>{
         loadList("displayConatiner","index");
     });
     
     loadDefualtOptions =()=>{
        /*the filter and the sort moods*/
        mainDisplayContainer.classList.remove("gridClass");
        if(selectModeOption === "list"){
            loadList("displayConatiner","index");
        } 
        if(selectModeOption === "grid"){
            loadGrid("displayConatiner");
        } 
     };

     const sortBooks=(sortDir)=>{
        if(sortDir === 'U'){
            bookArr.sort((a, b) => b.price - a.price);
            localStorage.setItem("sortDirection", "U");
            loadList("displayConatiner","index");
        }
        if(sortDir === 'D'){
            bookArr.sort((a, b) => a.price - b.price);
            localStorage.setItem("sortDirection", "U");
            loadList("displayConatiner","index");
        }
     }
     
     
    let userNameI=document.getElementById("usernameInp");
    let passwordI=document.getElementById("passwordInp");

     loginBtnModal.addEventListener("click", ()=>{
        console.log(userNameI.value);
        for(let item of UsersArr){
            if(item.userName === userNameI.value){
                console.log(item.userName);
                 if(item.password === passwordI.value){
                currentUser=item.id;
                window.location.href="http://127.0.0.1:5500/bookStock.html";
           }
        }
            else alert("User not existed");
        }
     });






 