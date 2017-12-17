#!/usr/bin/env node

const SHA256 = require('crypto-js/sha256');

class Block{
	constructor(index, timestamp, data, previousHash = ''){
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = '';
		this.nonce = 0;
	}

	calculateHash(){
		return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.nonce + this.previousHash).toString();
	}

	mineBlock(difficulty){
		while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join("0")){
			this.nonce++;
			this.hash = this.calculateHash();
		}

		console.log("Block Mined : " + this.hash);
	}
}


module.exports = Block;