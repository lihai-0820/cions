require("@nomicfoundation/hardhat-toolbox");

const ZIRCUIT_PRIVATE_KEY = "xxxxx";

module.exports = {
  solidity: "0.8.24",
  networks: {
    zircuit: {
      url: `https://zircuit1.p2pify.com`,
      accounts: [ZIRCUIT_PRIVATE_KEY]
    }
  }
};