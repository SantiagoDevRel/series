const { Web3 } = require("web3");
const abi = require("./abi.json");

const web3 = new Web3("https://rpc.ankr.com/polygon_mumbai");

async function setMsg() {
  //initialize wallet
  const wallet = web3.eth.accounts.wallet.add("0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf");
  const myAddress = wallet[0].address;

  //initialize contract
  const contractAddress = "0x6637f15CEc6ACa460550C510d53555c92F3b192C";
  const myContract = new web3.eth.Contract(abi, contractAddress);

  //send the tx to the contract
  const tx = await myContract.methods.setMsg("Hello world").send({ from: myAddress });

  console.log("Tx receipt", tx);
}

setMsg();
