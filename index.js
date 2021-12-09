const { Block } = require('./block');
const { BlockChain } = require('./block-chain');

let arthurCoin = new BlockChain();

arthurCoin.addBlock(new Block(1, "01/01/2021", { amount: 4 }));
arthurCoin.addBlock(new Block(2, "02/01/2021", { amount: 5 }));

console.log(`is valid -> ${arthurCoin.isChainValid()}`);

arthurCoin.chain[1].context = { amount: 11 };

console.log(`is still valid -> ${arthurCoin.isChainValid()}`);
