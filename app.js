const colors = ["green", "red", "rgba(133,122,200)", "#f15025" ,"#FFBCBC" , "#9B72AA" ,"#5D534A"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNo = getRandomNo();
    document.body.style.backgroundColor = colors[randomNo];
    color.textContent = colors[randomNo];
});

function getRandomNo() {
    return Math.floor(Math.random() * colors.length);
}