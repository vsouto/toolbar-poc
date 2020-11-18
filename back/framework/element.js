
module.exports = class Element {

    constructor(options) {

        this.id = options._id;
        this.title = options.title;
        this.type = options.type;
        this.rows = options.rows;
        this.cols = options.cols;

        //Object.assign(this, options)
    }

}


