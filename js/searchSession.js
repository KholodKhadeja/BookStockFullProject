     /****************************THE SEARCH SESSION************************************** */
/*let searchNamerRadio=document.getElementById("btnradio1");
let searchPriceRadio=document.getElementById("btnradio3");
let searchAuthorRadio=document.getElementById("btnradio2");
let searchKeywordRadio=document.getElementById("btnradio4");
const radioList = document.querySelectorAll('input[name="btnradio"]');
let radioOption;*/
let searchBtn=document.getElementById("button-addon1");
let searchQueryInput=document.getElementById("searchInputWord");

let searchCondition,searchFilter;
/*const checkCheckedRadio =()=>{
    for (const radioiItem of radioList) {
        if (radioiItem.checked == true) {
            searchCondition = radioiItem.id;
            break;
        }
    }
    switch(searchCondition){
        case "btnradio1": searchFilter="name"; break;
        case "btnradio2": searchFilter="author"; break;
        case "btnradio3": searchFilter="price"; break;
        case "btnradio4": searchFilter="keyword"; break;
        default: break;
    }
    return searchFilter;
}*/
if(searchBtn){
    searchBtn.addEventListener("click",()=>{
        if(searchQueryInput.value === ''){
        alert("Enter search word");
        }
        else{
           bookArr = clonedArray.filter((item) =>
            item.name.includes(searchQueryInput.value));
            console.log(bookArr);
            loadList("displayConatiner","index");
        }
        });
}


const showFillList=()=>{

}




