const { Web3 } = require("web3");

const web3 = new Web3("https://rpc2.sepolia.org");

//0x590deee7395f6cb6d2ad5e0ae8a4e32fd74c47e2bd157022dafbda4539fe637e

async function main() {
  const wallet = web3.eth.accounts.wallet.add("0x590deee7395f6cb6d2ad5e0ae8a4e32fd74c47e2bd157022dafbda4539fe637e");
  const add = web3.eth.accounts.create().address;

  const tx = {
    from: wallet[0].address,
    to: add,
    value: "0x0",
  };

  const txReceipt = await web3.eth.sendTransaction(tx);
  console.log(txReceipt);
}

main();
