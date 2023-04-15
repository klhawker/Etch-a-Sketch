for (let i = 0; i < 16; i++) {
    const grid_div = document.createElement("div");
    grid_div.setAttribute('class', 'grid');
    document.getElementsByClassName("container")[0].appendChild(grid_div);
}

const container = document.querySelector(".container");
const grid = document.querySelectorAll(".grid");

grid.forEach((item) => {
    item.addEventListener('mouseover', changeColour)
});

function changeColour() {
    this.style.backgroundColor = 'blue';
}

function reset() {
    grid.forEach((item) => {
        item.style.backgroundColor = 'white';
    });
}
