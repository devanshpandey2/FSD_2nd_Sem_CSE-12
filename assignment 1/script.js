let btn = document.getElementById("button");
let l = true;

btn.onclick = () => {
    if (l == true) {
        document.querySelector("body").style.backgroundColor = "black";
        l = false;
    } else {
        document.querySelector("body").style.backgroundColor = "white";
        l = true;
    }
}