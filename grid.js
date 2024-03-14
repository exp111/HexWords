//https://www.redblobgames.com/grids/hexagons/
// offset coords, odd-q
const grid = [
    [null, 1, 2, 3, null],
    [4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18],
    [null, null, 19, null, null],
];

const direction_differences = [
    // even cols
    [[+1, 0], [+1, -1], [0, -1],
        [-1, -1], [-1, 0], [0, +1]],
    // odd cols
    [[+1, +1], [+1, 0], [0, -1],
        [-1, 0], [-1, +1], [0, +1]],
];

function getNeighbours(x, y) {
    let neighbours = [];
    let parity = x & 1;
    for (let diff of direction_differences[parity]) {
        let newX = x + diff[0];
        let newY = y + diff[1];
        if (newY < 0 || newY >= grid.length)
            continue;
        if (newX < 0 || newX >= grid[newY].length)
            continue;
        let neigh = getHexAt(newX, newY);
        if (neigh == null)
            continue;
        neighbours.push([newX, newY]);
    }
    return neighbours;
}

function getHexAt(x, y) {
    return grid[y][x];
}