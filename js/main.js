var bookmarkNameInput=document.getElementById("bookmarkNameInput");
var webSiteURLInput=document.getElementById("webSiteURLInput");
var addBtn=document.getElementById("addBtn")

var marketContainer=[];
var mainIndex=0;
if(localStorage.getItem("webs")!=null){
    marketContainer=JSON.parse(localStorage.getItem("webs"));
    displayWebs();
}
var nameRegex=/^[A-Za-z _]{1,}$/
function isNameEnable(){
    if(nameRegex.test(bookmarkNameInput.value)){
        return true;
    }
    else{
        
        return false;
        
    }
}
var urlRegex=/^https:\/\/www\.[A-za-z_0-9]{1,}\.[a-zA-Z]{3}$/
function isUrlEnable(){
    if(urlRegex.test(webSiteURLInput.value)){
        return true;
    }
    else{
        
        return false;
        
    }
}
bookmarkNameInput.onkeyup=function(){
    if(isNameEnable()&&isUrlEnable()){
        addBtn.removeAttribute("disabled");
    }
    else{
        alert="this Name Is notValid"
        addBtn.disabled="true";
    }
}
webSiteURLInput.onkeyup=function(){
    if(isNameEnable()&&isUrlEnable()){
        addBtn.removeAttribute("disabled");
    }
    else{
        alert="this url Is notValid"
        addBtn.disabled="true";
    }
}
function addWebsite(){
    if(addBtn.innerHTML=="UPDate"){
        addBtn.innerHTML="Submit";
        var webs={
            name:bookmarkNameInput.value,
            email:webSiteURLInput.value
        }
        marketContainer.splice(mainIndex,1,webs);
    }
    else{
        var webs={
            name:bookmarkNameInput.value,
            email:webSiteURLInput.value
        }
        marketContainer.push(webs);

    }

    
    localStorage.setItem("webs",JSON.stringify(marketContainer));
    clearForm();
    displayWebs();
}
function clearForm(){
    bookmarkNameInput.value="";
    webSiteURLInput.value="";
}
function displayWebs(){
    var goods=``;
    for(var i=0 ; i < marketContainer.length;i++){
        goods+=` <div class="pul m-auto mb-4" >
        <div class="bats    w-50 d-flex justify-content-between p-5">
            <h4 class=" d-inline-block fw-bold">${marketContainer[i].name}</h4>
            <div>
            <a href="${marketContainer[i].email}" target="_blank"><button class="btn btn1 btn-primary">Visit</button></a>
            <button onclick="upDateWebs(${i})"  class="btn btn3  btn-primary">UpDate</button>
            <button onclick="deleteWebs(${i})" class="btn btn2 text-white btn-red ms-1">Delete</button>
        </div>
    </div>
    </div>`;
    }
    document.getElementById("container").innerHTML=goods;
}
function deleteWebs(i)
{
    marketContainer.splice(i,1);
    localStorage.setItem("webs",JSON.stringify(marketContainer));
    displayWebs();

}
function searchProduct(term){
    var goods=``;
    for(var i=0 ; i < marketContainer.length;i++){
        if(marketContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
        goods+=` <div class="pul m-auto mb-4" >
        <div class="bats    w-50 d-flex justify-content-between p-5">
            <h4 class=" d-inline-block fw-bold">${marketContainer[i].name}</h4>
            <div>
            <a href="${marketContainer[i].email}" target="_blank"><button class="btn btn1 btn-primary">Visit</button></a>
            <button onclick="upDateWebs(${i})" class="btn btn3  btn-primary">UpDate</button>
            <button onclick="deleteWebs(${i})" class="btn btn2 text-white btn-red ms-1">Delete</button>
        </div>
    </div>
    </div>`;}
    }
    document.getElementById("container").innerHTML=goods;
    

}
function upDateWebs(test){
    bookmarkNameInput.value=marketContainer[test].name;
    webSiteURLInput.value=marketContainer[test].email;
    addBtn.innerHTML="UPDate";
    mainIndex=test;
  
}


