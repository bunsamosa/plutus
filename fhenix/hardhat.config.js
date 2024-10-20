/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle"); // Import Waffle plugin for Ethereum development
require("fhenix-hardhat-plugin"); // Import Fhenix Hardhat plugin
require("fhenix-hardhat-docker"); // Import Fhenix Docker plugin

// Replace with your mnemonic or private key
const mnemonic = "your_mnemonic_here"; // Use a secure way to store this in production

module.exports = {
    solidity: "0.8.0", // Specify the Solidity version you want to use
    networks: {
        // Local Fhenix network
        localfhenix: {
            url: "http://127.0.0.1:42069", // Default local Fhenix URL
            accounts: { mnemonic: mnemonic }, // Use mnemonic for account generation
        },
        // Fhenix Helium Testnet configuration
        fhenixHelium: {
            url: "https://api.helium.fhenix.zone", // Helium Testnet API URL
            chainId: 8008135, // Specify the chain ID
            accounts: { mnemonic: mnemonic }, // Use mnemonic for account generation
        },
    },
};
