const { Block } = require('./block');

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2021", "Genesis block", "0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousBlock = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid() {
        let genesisBlock = this.chain[0];

        if (genesisBlock.hash !== genesisBlock.calculateHash()) {
            console.log(genesisBlock);
            console.log(genesisBlock.calculateHash());
            return false;
        }
            
        for (let i = 1 ; i < this.chain.length - 1 ; i++) {
            let previousBlock = this.chain[i - 1];
            let currentBlock = this.chain[i];

            
            if (currentBlock.hash !== currentBlock.calculateHash())
                return false;
            if (currentBlock.previousBlock !== previousBlock.hash)
                return false;
        }
        return true;
    }
}

module.exports = {
    BlockChain
}