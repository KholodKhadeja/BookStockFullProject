const loadList = (displayContainerId,ind) =>{
  const displayDiv=document.getElementById(displayContainerId);
 displayDiv.innerHTML='';
  displayDiv.classList.add("flexContainer");
  displayDiv.classList.remove("gridClass");

      let htmlCode='';
      if(ind === "index"){
        searchDiv.classList.remove("hidden");
        sortDiv.classList.remove("not-visible");
      for(let bookItem of bookArr){
          htmlCode+=`<div class="listItem listGrid">
          <img src="${bookItem.imgUrl}" class="listImg">
          <p class="bookName">${bookItem.name}</p>
          <p class="bookPrice">$${bookItem.price}</p>
          <p class="placeHolder">&nbsp;</p>
          <p class="bookAuthor">${bookItem.author}</p>
          <p class="bookDate">${bookItem.realeseDate}</p>
          <p>&nbsp;</p>
          <p class="bookKeysword">Keywords: ${bookItem.keywords}</p>
          <p>&nbsp;</p>
        </div>
        </div>`;
        }
      }
      
        if(ind === "admin"){
          for(let bookItem of bookArr){
          htmlCode+=`<div class="listItem listGrid">
          <img src="${bookItem.imgUrl}" class="listImg">
          <p class="bookName">${bookItem.name}</p>
          <p class="bookPrice">$${bookItem.price}</p>
          <p class="placeHolder">&nbsp;</p>
          <p class="bookAuthor">${bookItem.author}</p>
          <p class="bookDate">${bookItem.realeseDate}</p>
          <i class="bi bi-pencil-square btns"  id="editBtn" onclick="editListItem(${bookItem.id})"></i>
          <p class="bookKeysword">Keywords: ${bookItem.keywords}</p>
          <p>&nbsp;</p>
          <i class="bi bi-trash3-fill btns"  id="delBtn" onclick="delListItem(${bookItem.id})"></i>
        </div>
        </div>`;
        }
      }
  displayDiv.innerHTML=htmlCode;
};

const editListItem=(elementID)=>{

};
const delListItem=(elementID)=>{
  bookArr.splice(elementID,1);
  localStorage.setItem("OriginalArray",bookArr);
  initArray();
  loadList("displayConatiner");
  
}