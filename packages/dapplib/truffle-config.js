require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rate noble hole just fashion force gaze'; 
let testAccounts = [
"0x5cf3dc74d014776afee0b2f506b66bb5d049f2e29cd29ac40d7c5fba76797c9d",
"0xab86a88c676b79b0fc1e5c19719ea466939432aed8b9b6677d62a048c3c8dbba",
"0xf6af402fb1cb88d970d316cbae313618f1d5721187663f648da43d48aebcd4a7",
"0x0cc4774c48d6e74bef16491b2ecae4f593b11c5a4481de173f12b5b2e385ab09",
"0x006ebebf27985acf1604879330f622d29950068c397062878d3a085db16eebf4",
"0x98f2603c8b068e42813ca173a3474695e3f0fa7373e1888f57fab2ccfdbfed35",
"0xb675c2929b632ec722d9072fc61da8537bcdb6ae8cfcb0adb353e60f455bab29",
"0x01e455ea57ebf1cc258a5aa1727b4810fbf7811acf7857b6e88a8dd90db9d0cd",
"0xfb4a9a2cb126699c5d626749131d27197de0ba4f393dd160595a2db4c83891a5",
"0x165db09821a6a8641114808dd25f1074b31bceacba3a005d6950b6e24ae35e9e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
