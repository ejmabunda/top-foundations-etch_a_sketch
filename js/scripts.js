let container = document.querySelector('#container');
let width = 16;
let height = 16;
const LIMIT = 100;
let alpha = 0;

function getRandomRGB() {
    let R = Math.round(Math.random() * 255);
    let G = Math.round(Math.random() * 255);
    let B = Math.round(Math.random() * 255);

    let randomColor = {red: R, green: G, blue: B, alpha: alpha};
    if (alpha < 1) {
        return darkenColor(randomColor);
    }
    return randomColor;
}

function darkenColor(color) {
    // Darken by 10%
    alpha += 0.1;
    color.alpha = alpha;
    return color;
}

function createGrid(width, height) {
    clearGrid();

    for (let i = 0; i < height; i++) {
        // Create row and add to container
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < width; j++) {
            // Create square and add to row
            let square = document.createElement('div');
            square.classList.add('square');

            // Draw on hover
            square.addEventListener('mouseover', (event) => {
                let color = getRandomRGB();
                color = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
                event.target.style.backgroundColor = color;
            });

            row.appendChild(square);
        }
        container.appendChild(row);
    }

    document.querySelector('.dimensions').textContent =
        `${width} x ${height}`;
}

function clearGrid() {
    while (container.childNodes.length > 0) {
        container.removeChild(container.childNodes[0]);
    }
}

document.querySelector('#new-grid-button').addEventListener('click', () => {
    let new_dimensions = 
        Number(prompt('Enter the new dimensions (max 100):'));
    console.log(new_dimensions);
    if (new_dimensions > LIMIT ||
        new_dimensions == null||
        new_dimensions == NaN ||
        new_dimensions <= 0) {
        alert('Enter a value between 1 and 100.');
        return;
    }

    createGrid(new_dimensions, new_dimensions);
});

createGrid(width, height);