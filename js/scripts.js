let container = document.querySelector('#container');
let width = 16;
let height = 16;

function createGrid(container, width, height) {
    for (let i = 0; i < height; i++) {
        // Create row and add to container
        let row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < width; j++) {
            // Create square and add to row
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

createGrid(container, width, height);