const loadGrid = (containerDisplay) =>{
  let contianerDiv=document.getElementById(`${containerDisplay}`);
  contianerDiv.classList.add("gridClass");
  let bookImportedArray=JSON.parse(localStorage.getItem("OriginalArray"));

    for(let bookItem of clonedArray){
        contianerDiv.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <img src="${bookItem.imgUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${bookItem.name}</h5>
          <p class="card-text priceTag">${bookItem.price}$</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Author:</b>${bookItem.author}</li>
          <li class="list-group-item"><b>Release Date:</b>${bookItem.realeseDate}</li>
          <li class="list-group-item"><b>Keywords:</b> ${bookItem.keywords}</li>  
        </ul>
        <div class="card-body">
          <a href="#" class="card-link" onclick="editBook()"><i class="bi bi-pencil-square"></i> Edit</a>
          <a href="#" class="card-link" onclick="deleteBook()"><i class="bi bi-trash-fill"></i> Delete</a>
        </div>
      </div>`;
}
};