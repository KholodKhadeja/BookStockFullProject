let currentFirstImage=0;

const displayDiv=document.getElementById("displayConatiner");
const loadCarousel = (currentIndex=0) =>{
  currentIndex=currentFirstImage;
    let bookImportedArray=localStorage.getItem("OriginalArray");
    bookImportedArray=JSON.parse(bookImportedArray);
    buildCarousel(currentIndex,bookImportedArray);

    document.getElementById("leftArrow").addEventListener("click",()=>{
      currentFirstImage--;
      if(currentFirstImage === 0){
        currentFirstImage=0;
        return;
      }
      else{
      currentFirstImage--;
      loadCarousel(currentFirstImage);
      }
      });
      document.getElementById("rightArrow").addEventListener("click",()=>{
      currentFirstImage++;
      loadCarousel(currentFirstImage);
      });
   /*show 4 images each time*/
};

const buildCarousel=(currentFirstImgId,bookArray)=>{
let carouselCode='';
carouselCode+=`<div class="carousela">
<img src="./assets/images/left-arrow.svg" class="arrows" id="leftArrow">
<div class="imgsContainer">
<img src="${bookArray[currentFirstImgId].imgUrl}" alt=""  class="activeImg">
<img src="${bookArray[currentFirstImgId+1].imgUrl}" alt=""  class="not-active imgSize">
<img src="${bookArray[currentFirstImgId+2].imgUrl}" alt=""  class="not-active imgSize">
<img src="${bookArray[currentFirstImgId+3].imgUrl}" alt=""  class="not-active imgSize"></div>
<img src="./assets/images/right-arrow.svg" class="arrows" id="rightArrow">
</div>
`;
displayDiv.innerHTML=carouselCode;
};

