const loadGrid = (containerDisplay) =>{
  mainDisplayContainer.innerHTML='';
  sortDiv.classList.add("not-visible");

  searchDiv.classList.add("hidden");
  let contianerDiv=document.getElementById(`${containerDisplay}`);
  mainDisplayContainer.classList.remove("flexContainer");
  contianerDiv.classList.add("gridClass");

    for(let bookItem of bookArr){
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
      </div>`;
}
};