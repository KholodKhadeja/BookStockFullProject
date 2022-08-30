const gridBTN=document.getElementById("gridBtn");
const listBTN=document.getElementById("listBtn");
const carouelBTN=document.getElementById("carouselBtn");
const mainDisplayContainer=document.getElementById("displayConatiner");
const addNewBookStock=document.getElementById("addBookToStock");
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
let bookIdInput=document.getElementById("addbookId");

/*#button-addon1
#searchInput*/
let lastIdNum;
const claculateTheLastId =() =>{
    lastIdNum=+clonedArray[clonedArray.length-1].id +1; //not stored in the local storag, its a normal array
    return lastIdNum;
  }

  const closeModal2Sec=()=>{
    myModal.hide();
    localStorage.setItem("OriginalArray",JSON.stringify(clonedArray));
    initArray();
    loadList("displayConatiner");
};

let selectModeOption="list";

window.addEventListener('load',()=>{
loadDefualtOptions();
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
        mainDisplayContainer.innerHTML='';
       
        mainDisplayContainer.classList.remove("flexContainer");
        loadGrid("displayConatiner");
     });
     
     carouelBTN.addEventListener("click",()=>{
     mainDisplayContainer.innerHTML='';
     mainDisplayContainer.classList.remove("gridClass");
     mainDisplayContainer.classList.remove("flexContainer");
     loadCarousel();
     });
     
     listBTN.addEventListener("click",()=>{
         mainDisplayContainer.innerHTML='';
         mainDisplayContainer.classList.add("flexContainer");
         mainDisplayContainer.classList.remove("gridClass");
         loadList("displayConatiner");
     });
     
     loadDefualtOptions =()=>{
        /*the filter and the sort moods*/
        if(selectModeOption === "list"){
            mainDisplayContainer.classList.add("flexContainer");
            mainDisplayContainer.classList.remove("gridClass");
            loadList("displayConatiner");
        } 
     };





 