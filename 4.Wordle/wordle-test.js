const rows = 6;
const cols = 5;
const board = document.getElementsById("board");


//creating the wordle tile structure for HTML file
for (let r = 0; r < rows; r++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let c = 0; c < cols; c++) {
        const col = document.createElement("div");
        col.classList.add("tile");
        //giving ID for each tile
        tile.id = `tile-${r}-$${c}`;
        row.appendChild(tile);
    }

    board.appendChild(row);
}

//logic for the wordle implementation
let currentRow = 0;
let currentCol = 0;

document.addEventListener('keydown', (e) => {
    if (e.key.match(/^[a-z]$/i) && currentCol < cols) {
        
    }
})