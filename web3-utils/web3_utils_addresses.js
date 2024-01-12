const { Web3 } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

//4. Address
//isAddress is deprecated so we can use the toCheckSumAddress
//to see if the hex string we are passing is a correct ethereum address
const isAddress = web3.utils.toChecksumAddress("0xa3286628134bad128faeef82f44e99aa64085c94");
console.log(isAddress);
//0xa3286628134bad128faeef82f44e99aa64085c94
//0xA3286628134baD128faeef82F44e99AA64085C94

//Checksums in Ethereum addresses provide an additional layer of validation,
//crucial for minimizing the risk of errors and ensuring accuracy,
//especially when handling transactions or interacting with services like MetaMask.
