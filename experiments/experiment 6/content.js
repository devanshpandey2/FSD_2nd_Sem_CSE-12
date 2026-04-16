let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;

// Change heading text (onclick using addEventListener)
// document.getElementById("changeTextBtn").addEventListener("click", function () {
//     if (input.value !== "") {
//         heading.innerHTML = input.value;
//     }
// });
document.getElementById("changeTextBtn").onclick = function () {
    heading.innerText = input.value;
};

input.onclick = function () {    
    console.log("input changed:", input.value);
};

document.getElementById("bgColorBtn").addEventListener("click", function () {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    document.body.style.backgroundColor = randomColor;
    // document.body.style.backgroundColor ="lightblue";
    document.body.style.fontFamily = "Arial, sans-serif";
});

// // Change background color
// document.getElementById("bgColorBtn").onclick = function () {
//     document.body.style.backgroundColor ="lightblue";
     
// };

// // Increase font size
// document.getElementById("fontSizeBtn").addEventListener("click", function () {
//     fontSize += 2;
//     paragraph.style.fontSize = fontSize + "px";
// });

document.getElementById("fontSizeBtn").addEventListener("click", function () {
    heading.style.fontSize = 40 + "px";
});

// Show/Hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Reset page
document.getElementById("resetBtn").addEventListener("click", function () {
    heading.innerHTML = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    document.body.style.backgroundColor = "#f4f4f4";
    input.value = "";
    fontSize = 16;
});

heading.onmouseover = function () {
    heading.style.color = "red";
};

heading.onmouseout = function () {
    heading.style.color = "black";
};  