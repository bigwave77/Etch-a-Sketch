const grid = document.getElementById("squares-container");
const children = grid.children;
const button = document.getElementsByClassName("size");
let random = (Math.random, Math.random, Math.random);

function clearGrid() {
    for (let j=0; j < children.length; j++) {
        children[j].style.backgroundColor = "white";
    }
}

function changeSize() {
    // Remove all squares with a while loop.
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    let sqr = prompt("How many squares per side?", 16);

    if (sqr > 100) {
        alert("Too many squares! Please don't go over 100.");
        sqr = 16;
    } else if (sqr === "" || sqr === null || sqr === "0") {
        alert("Invalid value!")
        sqr = 16;
    }

    let squares = 600/sqr;
    for (let i = 0; i < sqr ** 2; i++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.width = `${squares}px`;
        square.style.height = `${squares}px`;
        square.style.border = "1px solid"
        // square.setAttribute("class", "whitesqr");
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        })
        grid.appendChild(square);
    }
}

changeSize();

// for (let i = 0; i < 256; i++) {
//     const square = document.createElement("div");
//     square.style.backgroundColor = "white";
//     square.style.width = "30px";
//     square.style.height = "30px";
//     square.style.border = "1px solid"
//     // square.setAttribute("class", "whitesqr");
//     square.addEventListener("mouseenter", () => {
//         square.style.backgroundColor = "blue";
//     })
//     grid.appendChild(square);
// }

