const { Web3 } = require("web3");
const abi = require("./abi.json");

const web3 = new Web3("https://rpc.ankr.com/polygon_mumbai");

async function setMsg() {
  //initialize contract
  const contractAddress = "0x6637f15CEc6ACa460550C510d53555c92F3b192C";
  const myContract = new web3.eth.Contract(abi, contractAddress);

  //send the tx to the contract
  const result = await myContract.methods.getMsg().call();

  console.log(result);
}

setMsg();
