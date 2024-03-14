function createGrid() {
    let parent = document.getElementById("grid");
    for (let i in grid) {
        let columnEl = document.createElement("div");
        columnEl.classList.add("column");
        columnEl.style.setProperty("--number", i);
        parent.appendChild(columnEl);
    }
    for (let row in grid) {
        for (let column in grid[row]) {
            let hexEl = document.createElement("div");
            let val = getHexAt(column, row);
            if (val == null) {
                hexEl.classList.add("empty");
            } else {
                hexEl.textContent = `${val}`;
            }
            hexEl.onclick = () => onclick(parseInt(column), parseInt(row));
            hexEl.classList.add("hex");
            parent.children[column].appendChild(hexEl);
        }
    }
}
function getHexElAt(x, y) {
    return document.getElementById("grid").children[x].children[y];
}
createGrid();

function onclick(x,y) {
    console.log(`el: ${x}, ${y}`);
    let neighbours = getNeighbours(x,y);
    console.log("neighbours:");
    for (let n of neighbours) {
        console.log(`pos: ${n[0]},${n[1]}; val: ${getHexAt(n[0], n[1])}`);
    }
}