for (let i = 0; i < 16; i++) {
    const grid_div = document.createElement("div");
    grid_div.setAttribute('class', 'grid');
    document.getElementsByClassName("container")[0].appendChild(grid_div);
}

const container = document.querySelector(".container");

function attachEventListeners() {
    const grid = document.querySelectorAll(".grid");
    grid.forEach((item) => {
        item.addEventListener('mouseenter', changeColour)
    });
}

function changeColour() {
    this.style.backgroundColor = 'blue';
}

function reset() {
    document.querySelectorAll(".grid").forEach((item) => {
        item.style.backgroundColor = 'white';
    });
}


function generateGrid(number) {
    for (let i = 0; i < number; i++) {
        const grid_div = document.createElement("div");
        grid_div.setAttribute('class', 'grid');
        document.getElementsByClassName("container")[0].appendChild(grid_div);
    }
    return;
}

function changeGridSize() {
    let input = prompt('Choose a grid size', '8');
    if (input > 100) {
        window.alert('Cant go above 100!')
        return;
    }else {
        document.querySelectorAll(".grid").forEach((item) => {
            item.remove();
        });
        generateGrid(input * input);
        const grid_dimensions = `
            width: ${1/input * 100}%;    
            height: ${1/input * 100}%;    
        `;
        document.querySelectorAll(".grid").forEach((item) => {
            item.style.cssText = grid_dimensions;
        });
        attachEventListeners();
    }
}

