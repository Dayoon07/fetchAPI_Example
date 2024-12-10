document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    testFun1();
});

const h1 = document.querySelector("h1");

function testFun1() {
    fetch("https://codingapple1.github.io/price.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            h1.innerHTML = "price : " + data.price;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("요청 끝");
        });
}
