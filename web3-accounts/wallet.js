const { Web3 } = require("web3");

const web3 = new Web3("https://rpc.ankr.com/polygon_mumbai");

async function main() {
  //create wallet (account with funds)
  const privateKey = "0xca0f203073b871007e1b050d2d318e073816078d7c1a04d73baee3cad3127cdf";
  const wallet = web3.eth.accounts.wallet.add(privateKey);

  //create tx object
  const txObject = {
    from: wallet[0].address,
    to: "0xea9eeca67682cd9c6ce3ddd1681049d7a897289f",
    value: 1,
  };

  //send the tx to the network
  const txReceipt = await web3.eth.sendTransaction(txObject);
  console.log("Tx receipt:", txReceipt);
}

main();
