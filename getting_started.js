const { Web3 } = require("web3");

const web3 = new Web3(/* PROVIDER */);

async function main() {
  const blockNumber = await web3.eth.getBlockNumber();
  console.log(blockNumber);
}

main();
