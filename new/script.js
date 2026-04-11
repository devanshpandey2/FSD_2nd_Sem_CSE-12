let newheading =document.getElementById("heading");
newheading.textContent="DOM Manipulation in JavaScript";
newheading.style.color="red";
newheading.style.fontSize="50px";

let paragraphs=document.getElementsByClassName("paragraph");
paragraphs[0].innerHTML="<strong>This paragraph has been updated using JavaScript</strong>";
paragraphs[0].style.color="green";
paragraphs[0].style.fontSize="20px";

let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div eleement created using JavaScript";
document.body.appendChild(newDiv);
//newDiv.style.height="200px";
//  newDiv.style.width="200px";
// newDiv.style.border="5px solid black";



