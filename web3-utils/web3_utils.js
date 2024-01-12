const { Web3 } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

//1. Random hex and bytes
const randomBytes32 = web3.utils.randomBytes(32);
console.log(randomBytes32);
//=> array format

const randomHex32 = web3.utils.randomHex(32);
console.log(randomHex32);
//=> hex format

// 2. Conversions
// 2.1 Ethereum Denominations
const oneWei = web3.utils.fromWei("1", "ether");
console.log(oneWei); // 0.000000000000000001

const oneEther = web3.utils.toWei("1", "ether");
console.log(oneEther); // 1_000_000_000_000_000_000

// 2.2 Hexadecimal Conversion => return hex
//most versatile one
const numberToHex1 = web3.utils.toHex(10);
console.log(numberToHex1);

const numberToHex2 = web3.utils.numberToHex(10);
console.log(numberToHex2);

const numberToHex3 = web3.utils.fromDecimal(10);
console.log(numberToHex3);

const boolToHex = web3.utils.toHex(true);
console.log(boolToHex);

const arrayToHex = web3.utils.toHex([72, 12]);
console.log(arrayToHex);

const bytesToHex = web3.utils.bytesToHex([72, 12]);
console.log("bytes", bytesToHex);

//recommended
const utfToHex1 = web3.utils.utf8ToHex("😊");
console.log(utfToHex1);
//same
const utfToHex2 = web3.utils.fromUtf8("😊");
console.log(utfToHex2);

//will decode the hex differently
const asciiToHex = web3.utils.asciiToHex("😊");
console.log(asciiToHex);

//2.3 Ascii and Utf conversions
const hexToUtf1 = web3.utils.toUtf8("0xf09f988a");
console.log("utf", hexToUtf1);

const hexToUtf2 = web3.utils.hexToUtf8("0xf09f988a");
console.log("utf", hexToUtf2);

const hexToUtf3 = web3.utils.hexToString("0xf09f988a");
console.log("utf", hexToUtf3);

const hexToAscii1 = web3.utils.toAscii("0xf09f988a");
console.log("ascii", hexToAscii1);

const hexToAscii2 = web3.utils.hexToAscii("0xf09f988a");
console.log("ascii", hexToAscii2);

//send tx in metamask using 0xf09f988a (hex)

//2.4 Number conversions => number
const hexToNumber1 = web3.utils.toNumber("0xa");
console.log(hexToNumber1);

const hexToNumber2 = web3.utils.hexToNumber("0xa");
console.log(hexToNumber2);

const hexToNumber3 = web3.utils.toDecimal("0xa");
console.log(hexToNumber3);

const hexToNumberStr = web3.utils.hexToNumberString("0xa");
console.log(hexToNumberStr);

const anythingToBigInt = web3.utils.toBigInt("0xa"); //10n
console.log(anythingToBigInt); //returns any number in bigint format
//recomended for large numbers

//3. Hashing
//both will return undefined if no string is passed as an argument
const sha3 = web3.utils.sha3("hello 123");
console.log(sha3);

const soliditySha = web3.utils.soliditySha3({ type: "string", value: "hello 123" });
console.log(soliditySha);

//4. Address
//isAddress is deprecated so we can use the toCheckSumAddress
//to see if the hex string we are passing is a correct ethereum address
const isAddress = web3.utils.toChecksumAddress("0xa3286628134bad128faeef82f44e99aa64085c94");
console.log(isAddress);
//0xa3286628134bad128faeef82f44e99aa64085c94
//0xA3286628134baD128faeef82F44e99AA64085C94

//Checksums in Ethereum addresses provide an additional layer of validation,
//crucial for minimizing the risk of errors and ensuring accuracy,
//especially when handling transactions or interacting with services like MetaMask.

//5. Packing and Padding
//same as abi.encodePacked() in solidity (must be strings)
//converts everything to hex and packs everything without padding
const encodePacked = web3.utils.encodePacked("1", "1", "1");
console.log("ENCODE", encodePacked);

const padRight1 = web3.utils.padRight(1, 32, 0);
//it will convert the 111 in hex and add 0s until it's 32 characters long (NO BTYES LONG)
console.log(padRight1);

const padRight2 = web3.utils.rightPad(1, 32, 0);
console.log(padRight2);

const padLeft1 = web3.utils.padLeft(1, 32, 0);
//the third value will be the one that will pad the whole number
console.log(padLeft1);

const padLeft2 = web3.utils.leftPad(1, 32, 0);
console.log(padLeft2);

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
