const { Web3 } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

//3. Hashing
//both will return undefined if no string is passed as an argument
const sha3 = web3.utils.sha3("hello 123");
console.log(sha3);

const soliditySha = web3.utils.soliditySha3({ type: "string", value: "hello 123" });
console.log(soliditySha);
