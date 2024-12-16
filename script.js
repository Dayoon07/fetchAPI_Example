document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    testFunction();
});

const h1 = document.querySelector("h1");

function testFunction() {
    fetch("https://dayoon07.github.io/static_page_test/f/test.json")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            h1.innerHTML = "작성자 : " + data.myName;
        })
        .catch((err) => {
            console.error(err);
        })
        .finally(() => {
            console.log("요청 끝");
        });
}
