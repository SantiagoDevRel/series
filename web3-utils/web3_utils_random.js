const { Web3, utils } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

//1. Random hex and bytes
const randomBytes32 = utils.randomBytes(32);
console.log(randomBytes32);
//=> array format

const randomHex32 = web3.utils.randomHex(32);
console.log(randomHex32);
//=> hex format
