const { Web3 } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

//5. Packing and Padding
//packing
//same as abi.encodePacked() in solidity (must be strings)
//converts everything to hex and packs everything without padding
const encodePacked = web3.utils.encodePacked("1", "1", "1");
console.log("ENCODE", encodePacked);

//padding
const padRight1 = web3.utils.padRight(10, 32, 0);
//it will convert the number(10) to hex('a') and add 0s until it's 32 characters long (NO BTYES LONG)
//the third argument will be the one that will fill/pad the whole hex value
//in this case is '0'
console.log(padRight1);

const padRight2 = web3.utils.rightPad(1, 32, 0);
console.log(padRight2);

const padLeft1 = web3.utils.padLeft(1, 32, 0);
console.log(padLeft1);

const padLeft2 = web3.utils.leftPad(1, 32, 0);
console.log(padLeft2);
