class Player {
    constructor(name) {
        this.spot = 0
        this.name = name
    }

    roll() {
        let r = Math.floor(Math.random() * 6) + 1
        this.spot += r
    }

    getCoord(tiles) {
        let current = tiles[this.spot];
        return current.getCoor()
    }
}

module.exports = Player