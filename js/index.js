const gridBTN=document.getElementById("gridBtn");
const listBTN=document.getElementById("listBtn");
const carouelBTN=document.getElementById("carouselBtn");
const mainDisplayContainer=document.getElementById("displayConatiner");
const bookStockPageDisplayContainer=document.querySelector("#bookStockPageCardsImages");

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
    mainDisplayContainer.classList.remove("gridClass");
    loadList("displayConatiner");
});




 