const drop1=document.getElementById("drop-1");
const drop2=document.getElementById("drop-2");
const menu=document.getElementById("menu");
const close=document.getElementById("close");
 drop1.addEventListener("click",()=>{
        let dropList=document.getElementById("dropList1");
    if(dropList.classList.contains("dropdownList1")){
  
       dropList.classList.remove("dropdownList1");
       drop1.querySelector("svg").innerHTML = '<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>';
       dropList.classList.add("dropdownList1unclickable");
    }else{
        dropList.classList.add("dropdownList1");
        drop1.querySelector("svg").innerHTML = '<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>';
        dropList.classList.remove("dropdownList1unclickable")
    }
 });
 
drop2.addEventListener("click",()=>{
    let dropList=document.getElementById("dropList2");
    if(dropList.classList.contains("dropdownList2")){
  
       dropList.classList.remove("dropdownList2");
       drop2.querySelector("svg").innerHTML = '<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>';
       dropList.classList.add("dropdownList2unclickable");
    }else{
        dropList.classList.add("dropdownList2");
        drop2.querySelector("svg").innerHTML = '<path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>';
        dropList.classList.remove("dropdownList2unclickable")
    }
});
menu.addEventListener("click",()=>{
    menu.classList.add("menu-hide");
    menu.classList.remove("menu");
    let black=document.querySelector(".black-hide");
    black.classList.add("black");
    black.classList.remove("black-hide");
    let links=document.querySelector(".links-btn");
    links.classList.add("links-btn-show");
    links.classList.remove("links-btn");
}
);
close.addEventListener("click",()=>{
    let links=document.querySelector(".links-btn-show");
    links.classList.add("links-btn");
    links.classList.remove("links-btn-show");
    let black=document.querySelector(".black");
    black.classList.add("black-hide");
    black.classList.remove("black");
    menu.classList.add("menu");
    menu.classList.remove("menu-hide");

})
