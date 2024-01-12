const { Web3 } = require("web3");

const web3 = new Web3("https://eth.llamarpc.com");

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
