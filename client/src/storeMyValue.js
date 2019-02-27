import web3 from './web3';

const address = '0x3e3A4f13eb4c8Fb39496DC0EeA38d8bacc7aA317';
const abi = [
    {
    "constant": false,
    "inputs": [
    {
        "name": "x",
        "type": "string"
    }
    ],
    "name": "set",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x4ed3885e"
    },
    {
    "constant": true,
    "inputs": [],
    "name": "get",
    "outputs": [
    {
        "name": "",
        "type": "string"
    }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x6d4ce63c"
    }
]

export default new web3.eth.Contract(abi, address);