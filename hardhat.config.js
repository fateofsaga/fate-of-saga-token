require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const fs = require('fs')
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      chainId: 1337,
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    bscTestnet: {
      chainId: 97,
      url: "https://data-seed-prebsc-2-s3.binance.org:8545",
      accounts: [privateKey]
    },
    bsc: {
      chainId: 56,
      url: "https://bsc-dataseed1.binance.org",
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: ""
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
