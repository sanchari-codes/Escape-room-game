function showPopup(message){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup-text").innerText=message;
}
function closePopup(){
document.getElementById("popup").style.display="none";
}
function openChest(){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popup-text").innerHTML=`<p>Enter 6 digit code to unlock the chest:</p> 
    <input id="chestInput"maxlength="6"/>
     <button onclick="checkChestCode()" style="background-color:brown;cursor:pointer;">Unlock</button> 
     <p id="chestMsg"></p>`;
}
function checkChestCode(){
    const val=document.getElementById("chestInput").value;
    const correctCode="662991";
    if (val==correctCode)
    {
        document.getElementById("popup-text").innerHTML=`<h3>Chest unlocked!</h3>
        <p>You found the key to escape the room.</p> `;
    }
    else{
        document.getElementById("chestMsg").innerText="Wrong code. Try again!";
    }
}
const helpBtn=document.getElementById("helpBtn");
const sidebar=document.getElementById("sidebar");
helpBtn.addEventListener("click",()=>{sidebar.classList.toggle("hidden");});
let hintOn=false;
function toggleHints(){
hintOn=!hintOn;
const objects=document.querySelectorAll(".clickable");
objects.forEach(obj=>{
    if(hintOn){
        obj.classList.add("hint");
    }
    else{
        obj.classList.remove("hint");
    }
});
}
const closeSidebar=document.getElementById("closeSidebar");
closeSidebar.addEventListener("click",()=>{
    sidebar.classList.add("hidden");
});
