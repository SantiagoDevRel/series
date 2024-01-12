const { Web3 } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

//6. Compare blocks
//numbers and formats as well
const latestPending = web3.utils.compareBlockNumbers("pending", "latest");
console.log(latestPending);
//2 > 1 => 1

const pendingLatest = web3.utils.compareBlockNumbers("latest", "pending");
console.log(pendingLatest);
//1 < 2 => -1

const equal = web3.utils.compareBlockNumbers("latest", "latest");
console.log(equal);
//2 == 2 => 0

const equal2 = web3.utils.compareBlockNumbers(2, 2);
console.log(equal2);
// => 0
