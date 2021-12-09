// const crypto = require('crypto-js');

class Block {
    constructor(index, timeStamp, context, previousHash) {
        this.index = index;
        this.timeStamp = timeStamp;
        this.context = context;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash() {
        return (
            this.index + this.previousHash + JSON.stringify(this.context)
        ).toString();
    }
}

module.exports = {
    Block
}