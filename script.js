// Version 1

function headChange(){
    document.getElementById("title").innerText = "Goodbye World";
    title.style.color = "blue";
}
 
//Version 2

const changedMsg = document.querySelector("#title");
const cklickButton = document.querySelector("#changeBtn");
cklickButton.addEventListener("click", function() {
        changedMsg.textContent = "Goodbye World";
        changedMsg.style.cssText = "color: green";
    }
)