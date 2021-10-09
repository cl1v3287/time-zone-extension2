let btn = document.getElementById("getTimezone");

function Timezone(){
let time = document.getElementById("showTimezone");
time.innerHTML = Date();
}

if(btn != null){
btn.addEventListener("click",Timezone);
}