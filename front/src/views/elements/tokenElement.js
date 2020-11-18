
module.exports = class TokenElement extends Element {

    constructor(...args) {
        super(...args);

        this.type = 'token';
    }
}