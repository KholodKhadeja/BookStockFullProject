const loadList = (displayContainerId) =>{
    const displayDiv=document.getElementById(displayContainerId);
      let htmlCode='';
      let bookImportedArray=JSON.parse(localStorage.getItem("clonedArr"));
      for(let bookItem of bookImportedArray){
        htmlCode+=`<div class="listItem listGrid">
          <img src="${bookItem.imgUrl}" class="listImg">
          <p class="bookName">${bookItem.name}</p>
          <p class="bookPrice">$${bookItem.price}</p>
          <p class="placeHolder">&nbsp;</p>
          <p class="bookAuthor">${bookItem.author}</p>
          <p class="bookDate">${bookItem.realeseDate}</p>
          <i class="bi bi-pencil-square btns"  id="editBtn" onclick="editListItem(${bookItem.id})"></i>
          <p class="bookKeysword">${bookItem.keywords}</p>
          <p>&nbsp;</p>
          <i class="bi bi-trash3-fill btns"  id="delBtn" onclick="delListItem(${bookItem.id})"></i>
        </div>
        </div>`;
        }
  displayDiv.innerHTML=htmlCode;
};


const editListItem=(elementID)=>{

};

const delListItem=(elementID)=>{
  bookImportedArray.splice(elementID,1);
  loadList(bookImportedArray);
  document.getElementById("addbookId").value=+lastIdNum+1;
}