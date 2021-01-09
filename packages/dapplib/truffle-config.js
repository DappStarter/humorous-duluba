require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remain modify hockey prison obscure gas'; 
let testAccounts = [
"0xe31e9bc9c0ef0cf18ba12647dc2b4510d104335fc349edce7c5dc0a6972277f1",
"0xb12b3fddbaa5b936fff5378441261e1a9591a88df0929b46579df466d51c104b",
"0x8653b611f1b10b333a245b507d2f72a8355cc0ea042fb1df7f9bb930d54917a9",
"0x41c42cb5c74e4898b27aa4d6c900c97e1ba53136ac8b6ad02a1f658c4de30bb9",
"0x698d1f65a09f6d1a79e7e89b45f8ec84fa4e07e93c4885aaee5a979123f47452",
"0xcea3a79131eb18d4c934160e8266c5ecb82ad865cead91fd0ee8b5c4e7d0f819",
"0x57a4f9a604d7dad590e69c83a7787c1aa36f6340b2dbd9fbe0190aad6c6b9e13",
"0x295367f900444fa594ac6f9629685ca2ac88781a85546ed560286e290de54aab",
"0x1c94b5a15eb6aa07c35f1944715256a78d2cd9c8641bef930d50d8a6048dee47",
"0x9db155f625b60164725fd3657d204939f55afd71afecbbf7bfbff04dd242f326"
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
