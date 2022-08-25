class Tile {
    constructor(x, y, wh, index) {
        this.x = x;
        this.y = y;
        this.wh = wh;
        this.index = index;
    }

    getCoor() {
        let x = this.x + this.wh  / 2
        let y = this.y + this.wh  / 2
        return {x, y}
    }
}

module.exports = Tile