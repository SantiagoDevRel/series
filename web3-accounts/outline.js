const { Web3 } = require("web3");

const web3 = new Web3("https://rpc2.sepolia.org	");

/*

2. account methods
    2.1 create()
    2.2 privateKeyToAccount()
    2.3 privateKeyToAddress()
    2.2 hashMessage()
    2.3 sign() data with pk --> return signature object with (msg, msg hash, v,r,s, signature)
    2.4 recover() --> return signer(address)
    2.5 signTransaction() -> 
        const signatureObject = await web3.eth.accounts.signTransaction(
        { from: "0xEA9eEca67682Cd9c6Ce3DdD1681049D7A897289F", value: "0", data: "0x", gas: "53000", gasPrice: "100000000" },
        "0x590deee7395f6cb6d2ad5e0ae8a4e32fd74c47e2bd157022dafbda4539fe637e");
    2.6 recoverTransaction() -> signer
    2.7 web3.eth.sendSignedTransaction(signature.rawTransaction) 

3. wallet methods
    3.1 create(#X) -> wallet with #X accounts
    3.2 get(3) == wallet[3]
    3.2 add(account) -> wallet with account
    3.3 remove(#) & clear()
    3.4 web3.eth.sendTransaction(Transaction object)        

    wallet vs accounts
    Transaction Method:
    For accounts: sendSignedTransaction()
    For wallets: sendTransaction()
    
    Input Parameters:
    For accounts: Accepts the bytes of the signature.
    For wallets: Accepts a transaction object.
    
    Gas Estimation:
    For accounts: [Specify if gas estimation is involved and how.]
    For wallets: Automatically estimates gas.
    
    Signing Process:
    For accounts: Signature provided explicitly.
    For wallets: Signature generated under the hood.
*/

//0x590deee7395f6cb6d2ad5e0ae8a4e32fd74c47e2bd157022dafbda4539fe637e
