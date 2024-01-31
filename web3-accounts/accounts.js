const { Web3 } = require("web3");

const web3 = new Web3("https://ethereum-sepolia.publicnode.com");

//signTransaction(TxObject) => signatureObject{}
const privateKey = "0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf";

//initialize an account
const myAccount = web3.eth.accounts.privateKeyToAccount(privateKey);

async function signAndSendTx() {
  //create tx object
  /* const txObject = {
    from: myAccount.address,
    to: "0x77fc98deb4e557cfdfb305db2f6ddd4166391f03",
    value: 1,
    maxPriorityFeePerGas: 10_000,
    maxFeePerGas: (await web3.eth.getBlock()).baseFeePerGas * 2n, //update on baseFee of the network
  };
  //sign()
  const signatureObject = await myAccount.signTransaction(txObject);

  //broadcast tx to the network
  const txReceipt = await web3.eth.sendSignedTransaction(signatureObject.rawTransaction);
  console.log("Tx receipt:", txReceipt);
 */
  console.log(await web3.eth.getBlockTransactionCount());
}

signAndSendTx();
