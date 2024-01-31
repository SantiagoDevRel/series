const { Web3 } = require("web3");
const abi = require("./abi.json");
const bytecode = require("./bytecode.json");

const web3 = new Web3("https://rpc.ankr.com/polygon_mumbai");

async function deploy() {
  //initialize a wallet
  const wallet = web3.eth.accounts.wallet.add("0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf");
  const myAddress = wallet[0].address;

  //create contract instance
  const myContract = new web3.eth.Contract(abi);

  //create a contract deployer (bytecode + arguments)
  const contractDeployer = myContract.deploy({
    data: "0x" + bytecode,
    arguments: ["Hello web3"],
  });

  //send tx to deploy the contract
  const tx = await contractDeployer.send({ from: myAddress });

  //print deployed address
  console.log("Deployed at:", tx.options.address);
}

deploy();
