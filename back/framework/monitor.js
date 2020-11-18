
module.exports = class Monitor {

    constructor(options) {

        //Object.assign(this, options)

        this.id = options._id;
        this.title = options.title;
        this.elements = options.elements;
        this.grid = options.grid;
        /*this.grid = [
            [0,0,0,0,0,0,0,0], // Row 0
            [0,0,0,0,0,0,0,0], // 1
            [0,0,0,0,0,0,0,0], // 2
            [0,0,0,0,0,0,0,0], // 3
            [0,0,0,0,0,0,0,0], // 4
            [0,0,0,0,0,0,0,0], // 5
            [0,0,0,0,0,0,0,0], // 6
            [0,0,0,0,0,0,0,0]  // 7
        ];*/
    }

    // position = [ col, row ]
    addElement(element, position) {

        // TODO: Before we add the element, we need to check if it fits on the current grid
        if (!this.doesElementFit(element, position)) {
            return false;
        }

        this.elements.push(element);

        // We should add the element ID based on the element size
        // We also need to add -1 to work with arrays instead of Cartesian Coordinates
        const rowPosition = position[1] -1;
        const colPosition = position[0] -1;

        for (let i=rowPosition; i< element.rows+rowPosition; i++) {
            for (let j=colPosition; j< element.cols+colPosition; j++) {
                this.grid[i][j] = element.id;
            }
        }

        return true;
    }

    doesElementFit(element, position) {

        // We should add the element ID based on the element size
        // We also need to add -1 to work with arrays instead of Cartesian Coordinates
        const rowPosition = position[1] -1;
        const colPosition = position[0] -1;

        // we need to check if there is an element in any of the positions were the element will enter
        for (let i=rowPosition; i< element.rows+rowPosition; i++) {
            for (let j=colPosition; j< element.cols+colPosition; j++) {
                if (this.grid[i][j] != 0)
                    return false;
            }
        }
        return true;
    }
}