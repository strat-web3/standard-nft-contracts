# standard-nft-contracts


### .env.template

```
# Arthera Mainnet
ARTHERA_MAINNET_RPC_ENDPOINT_URL="https://rpc.arthera.net"
ARTHERA_MAINNET_PRIVATE_KEY="88888"

# Sepolia
SEPOLIA_RPC_ENDPOINT_URL="https://ethereum-sepolia.publicnode.com"
SEPOLIA_PRIVATE_KEY="88888"
ETHERSCAN_API_KEY="88888"

# OP Sepolia
OP_SEPOLIA_RPC_ENDPOINT_URL="https://sepolia.optimism.io"
OP_SEPOLIA_PRIVATE_KEY="88888"
OP_ETHERSCAN_API_KEY="88888"

# Base Sepolia
BASE_SEPOLIA_RPC_ENDPOINT_URL="https://sepolia.base.org"
BASE_SEPOLIA_PRIVATE_KEY="88888"
BASE_ETHERSCAN_API_KEY="88888"

# Amoy Testnet 
AMOY_TESTNET_RPC_ENDPOINT_URL="88888"
AMOY_TESTNET_PRIVATE_KEY="88888"
AMOY_TESTNET_ETHERSCAN_API_KEY="88888"

# Arthera Testnet
ARTHERA_TESTNET_RPC_ENDPOINT_URL="https://rpc-test.arthera.net"
ARTHERA_TESTNET_PRIVATE_KEY="88888"
```

### .gitignore

```
node_modules
coverage
coverage.json
typechain
typechain-types
.DS_Store

cache
artifacts

.env*
!.env.template
deployments
```

### .prettierignore

```
# OSX
.DS_Store

# env
.env

# node
node_modules
package-lock.json
yarn.lock
yarn-error.log

# editooors
.idea
.vscode

# tsc / hardhat / foundry
artifacts
cache
out
data
build
dist
lib

# github
.github
```

### .prettierrc

```
{
    "tabWidth": 4,
    "useTabs": false,
    "semi": false,
    "singleQuote": false,
    "trailingComma": "none",
    "arrowParens": "avoid",
    "printWidth": 80,
    "overrides": [
        {
            "files": "*.sol",
            "options": {
                "printWidth": 100,
                "tabWidth": 4,
                "useTabs": false,
                "singleQuote": false,
                "bracketSpacing": false,
                "explicitTypes": "always"
            }
        }
    ]
}

```

### LICENSE.md

```markdown
GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

        Preamble

The GNU General Public License is a free, copyleft license for
software and other kinds of works.

The licenses for most software and other practical works are designed
to take away your freedom to share and change the works. By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users. We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors. You can apply it to
your programs, too.

When we speak of free software, we are referring to freedom, not
price. Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights. Therefore, you have
```

[This file was cut: it has more than 500 lines]

```

### README.md

```markdown
# Standard NFT contracts

Standard NFT Solidity contracts for X institutional partner.

## Metadata template

https://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u.ipfs.w3s.link/

## Features

-   [Typescript](https://www.typescriptlang.org/)
-   [Ethers v6](https://docs.ethers.org/v6/)
-   [Open Zeppelin contracts v4.9.3](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/release-v4.9)
-   [Hardhat Verify plugin](https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify)
-   [Hardhat Deploy plugin](https://github.com/wighawag/hardhat-deploy)
-   [ERC-721](https://eips.ethereum.org/EIPS/eip-721)
-   [ERC-2981](https://eips.ethereum.org/EIPS/eip-2981)

## Supported networks

-   [Arthera Mainnet](https://chainlist.org/chain/10242) ([docs](https://docs.arthera.net/build/networks#arthera-mainnet))
-   [Arthera testnet](https://chainlist.org/chain/10243) ([docs](https://docs.arthera.net/build/networks#arthera-testnet))
-   [Sepolia Testnet](https://chainlist.org/chain/11155111) ([docs](https://ethereum.org/nb/developers/docs/networks/#sepolia))
-   [OP Sepolia Testnet](https://chainlist.org/chain/11155420) ([docs](https://docs.optimism.io/chain/networks#op-sepolia))

## Install

```
pnpm install
```

Create a `.env` file:

```
cp .env.template .env
```

Add your own keys in the `.env` file.

## Test

```
pnpm test
```

## Deploy

```
pnpm deploy:<NETWORK_NAME>
```

## Mint

```
pnpm mint:<NETWORK_NAME>
```

## Check balance

You can check the current signer wallet balance:

```
pnpm bal <NETWORK_NAME>
```

## Verify using Sourcify

```
pnpm sourcify:<NETWORK_NAME>
```

## Deployments

-   First deployment to Sepolia: https://sepolia.etherscan.io/address/0x3210E66d0dB822bB100B928C6445B78F918B246b#code
-   First mint: https://testnets.opensea.io/assets/sepolia/0x3210e66d0db822bb100b928c6445b78f918b246b/0

## Versions

-   Node [v20.9.0](https://nodejs.org/uk/blog/release/v20.9.0/)
-   PNPM [v8.7.5](https://pnpm.io/pnpm-vs-npm)
-   Hardhat [v2.17.2](https://github.com/NomicFoundation/hardhat/releases/tag/hardhat%402.17.2)
-   OpenZeppelin Contracts [v4.9.3](https://github.com/OpenZeppelin/openzeppelin-contracts/releases/tag/v4.9.3)
-   Ethers [v6](https://docs.ethers.org/v6/)

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).

```

## contracts


### contracts/ERC2981ContractWideRoyalties.sol

```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

import "./IERC2981Royalties.sol";

/// @dev This is a contract used to add ERC2981 support to ERC721 and 1155
/// @dev This implementation has the same royalties for each and every tokens
abstract contract ERC2981ContractWideRoyalties is ERC165, IERC2981Royalties {
    address private _royaltiesRecipient;
    uint256 private _royaltiesValue;

    /// @inheritdoc	ERC165
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return
            interfaceId == type(IERC2981Royalties).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    /// @dev Sets token royalties
    /// @param recipient recipient of the royalties
    /// @param value percentage (using 2 decimals - 10000 = 100, 0 = 0)
    function _setRoyalties(address recipient, uint256 value) internal {
        require(value <= 10000, "ERC2981Royalties: Too high");
        _royaltiesRecipient = recipient;
        _royaltiesValue = value;
    }

    /// @inheritdoc	IERC2981Royalties
    function royaltyInfo(
        uint256,
        uint256 value
    ) external view override returns (address receiver, uint256 royaltyAmount) {
        return (_royaltiesRecipient, (value * _royaltiesValue) / 10000);
    }
}

```

### contracts/IERC2981Royalties.sol

```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

/// @title IERC2981Royalties
/// @dev Interface for the ERC2981 - Token Royalty standard
interface IERC2981Royalties {
    /// @notice Called with the sale price to determine how much royalty
    //          is owed and to whom.
    /// @param _tokenId - the NFT asset queried for royalty information
    /// @param _value - the sale price of the NFT asset specified by _tokenId
    /// @return _receiver - address of who should be sent the royalty payment
    /// @return _royaltyAmount - the royalty payment amount for value sale price
    function royaltyInfo(
        uint256 _tokenId,
        uint256 _value
    ) external view returns (address _receiver, uint256 _royaltyAmount);
}

```

### contracts/NFT.sol

```
// SPDX-License-Identifier: GPL3
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ERC2981ContractWideRoyalties.sol";

contract NFT is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    ERC721Burnable,
    Ownable,
    ERC2981ContractWideRoyalties
{
    uint256 private _nextTokenId = 1;

    constructor(
        address initialOwner,
        string memory _name,
        string memory _symbol,
        uint256 _royalties
    ) ERC721(_name, _symbol) Ownable(initialOwner) {
        _setRoyalties(owner(), _royalties);
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Enumerable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(
        address account,
        uint128 value
    ) internal override(ERC721, ERC721Enumerable) {
        super._increaseBalance(account, value);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    )
        public
        view
        override(ERC721, ERC721Enumerable, ERC721URIStorage, ERC2981ContractWideRoyalties)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

```

## deploy


### deploy/deploy-nft.ts

```typescript
import "@nomiclabs/hardhat-ethers"
const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128)
import hre, { ethers, network } from "hardhat"

export default async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments

    function wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const { deployer } = await getNamedAccounts()
    console.log(deployer)

    const name = "Sigirya NFT"
    const symbol = "SIG"
    const royalties = 400 // 4%
    // const uri =
    //     "https://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u.ipfs.w3s.link/"

    const nft = await deploy("NFT", {
        from: deployer,
        args: [deployer, name, symbol, royalties],
        log: true
    })

    console.log("nft.receipt.contractAddress:", nft.receipt.contractAddress)
    console.log("hre.network.name:", hre.network.name)

    switch (hre.network.name) {
        case "arthera":
            console.log(
                "NFT contract deployed:",
                msg(nft.receipt.contractAddress)
            )

            try {
                // Please use `pnpm sourcify:arthera` after the deployment instead.

                // console.log("\nEtherscan verification in progress...")
                // console.log(
                //     "\nWaiting for 6 block confirmations (you can skip this part)"
                // )
                // await nft.deploymentTransaction()?.wait(6)
                // await hre.run("verify:verify", {
                //     network: network.name,
                //     address: nft.receipt.contractAddress,
                //     constructorArguments: [initialMint]
                // })

                console.log(
                    "Please use `pnpm sourcify:arthera` to verify your contract."
                )
            } catch (error) {
                console.error(error)
            }

            break
        case "arthera-testnet":
            console.log(
                "NFT contract deployed:",
                msg(nft.receipt.contractAddress)
            )

            try {
                // Please use `pnpm sourcify:arthera` after the deployment instead.

                // console.log("\nEtherscan verification in progress...")
                // console.log(
                //     "\nWaiting for 6 block confirmations (you can skip this part)"
                // )
                // await nft.deploymentTransaction()?.wait(6)
                // await hre.run("verify:verify", {
                //     network: network.name,
                //     address: nft.receipt.contractAddress,
                //     constructorArguments: [initialMint]
                // })

                console.log(
                    "Please use `pnpm sourcify:arthera-testnet` to verify your contract."
                )
            } catch (error) {
                console.error(error)
            }

            break
        case "sepolia":
            try {
                console.log(
                    "NFT contract deployed:",
                    msg(nft.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                console.log(
                    "\nWaiting for 6 block confirmations (you can skip this part)"
                )
                // await nft.deploymentTransaction()?.wait(6)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: "0x91092A4CDc521B47D114bC486A0a752Dbb078255",
                    constructorArguments: [deployer, name, symbol, royalties]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break

        case "op-sepolia":
            try {
                console.log(
                    "NFT contract deployed:",
                    msg(nft.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                console.log(
                    "\nWaiting for 6 block confirmations (you can skip this part)"
                )
                // await nft.deploymentTransaction()?.wait(6)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: nft.receipt.contractAddress,
                    constructorArguments: [deployer, name, symbol, royalties]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break
        case "base-sepolia":
            try {
                console.log(
                    "NFT contract deployed:",
                    msg(nft.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                console.log(
                    "\nWaiting for 6 block confirmations (you can skip this part)"
                )
                await wait(20 * 1000)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: nft.receipt.contractAddress,
                    constructorArguments: [deployer, name, symbol, royalties]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break
        case "amoy":
            try {
                console.log(
                    "NFT contract deployed:",
                    msg(nft.receipt.contractAddress)
                )
                console.log("\nEtherscan verification in progress...")
                console.log(
                    "\nWaiting for 6 block confirmations (you can skip this part)"
                )
                await wait(20 * 1000)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: nft.receipt.contractAddress,
                    constructorArguments: [deployer, name, symbol, royalties]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break
    }
}
export const tags = ["NFT"]

```

### hardhat.config.ts

```typescript
import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@nomicfoundation/hardhat-verify"
import "hardhat-deploy"
import * as dotenv from "dotenv"
import "./tasks/mint"
import "./tasks/send"
dotenv.config()

const {
    SEPOLIA_RPC_ENDPOINT_URL,
    SEPOLIA_PRIVATE_KEY,
    ETHERSCAN_API_KEY,
    ARTHERA_TESTNET_RPC_ENDPOINT_URL,
    ARTHERA_TESTNET_PRIVATE_KEY,
    OP_SEPOLIA_RPC_ENDPOINT_URL,
    OP_SEPOLIA_PRIVATE_KEY,
    OP_ETHERSCAN_API_KEY,
    BASE_SEPOLIA_RPC_ENDPOINT_URL,
    BASE_SEPOLIA_PRIVATE_KEY,
    BASE_ETHERSCAN_API_KEY,
    AMOY_TESTNET_RPC_ENDPOINT_URL,
    AMOY_TESTNET_PRIVATE_KEY,
    AMOY_TESTNET_ETHERSCAN_API_KEY,
    ARTHERA_MAINNET_RPC_ENDPOINT_URL,
    ARTHERA_MAINNET_PRIVATE_KEY
} = process.env

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    namedAccounts: {
        deployer: 0
    },
    networks: {
        hardhat: {
            chainId: 1337,
            allowUnlimitedContractSize: true
        },
        arthera: {
            chainId: 10242,
            url: ARTHERA_MAINNET_RPC_ENDPOINT_URL || "https://rpc.arthera.net",
            accounts:
                ARTHERA_MAINNET_PRIVATE_KEY !== undefined
                    ? [ARTHERA_MAINNET_PRIVATE_KEY]
                    : []
        },
        sepolia: {
            url: SEPOLIA_RPC_ENDPOINT_URL || "https://sepolia.optimism.io",
            accounts:
                SEPOLIA_PRIVATE_KEY !== undefined ? [SEPOLIA_PRIVATE_KEY] : []
        },
        "op-sepolia": {
            chainId: 11155420,
            url:
                OP_SEPOLIA_RPC_ENDPOINT_URL ||
                "https://ethereum-sepolia.publicnode.com",
            accounts:
                OP_SEPOLIA_PRIVATE_KEY !== undefined
                    ? [OP_SEPOLIA_PRIVATE_KEY]
                    : []
            // gasPrice: 1
        },
        "base-sepolia": {
            chainId: 84532,
            url: BASE_SEPOLIA_RPC_ENDPOINT_URL || "https://sepolia.base.org",
            accounts:
                BASE_SEPOLIA_PRIVATE_KEY !== undefined
                    ? [BASE_SEPOLIA_PRIVATE_KEY]
                    : []
        },
        amoy: {
            // https://polygon.technology/blog/introducing-the-amoy-testnet-for-polygon-pos
            // Verification: https://vkpatva.medium.com/guide-to-deploy-verify-smart-contract-on-amoy-using-hardhat-1b4f26a2dc78
            chainId: 80002,
            url:
                AMOY_TESTNET_RPC_ENDPOINT_URL ||
                "https://rpc-amoy.polygon.technology/",
            accounts:
                AMOY_TESTNET_PRIVATE_KEY !== undefined
                    ? [AMOY_TESTNET_PRIVATE_KEY]
                    : []
        },
        "arthera-testnet": {
            chainId: 10243,
            url:
                ARTHERA_TESTNET_RPC_ENDPOINT_URL ||
                "https://rpc-test.arthera.net",
            accounts:
                ARTHERA_TESTNET_PRIVATE_KEY !== undefined
                    ? [ARTHERA_TESTNET_PRIVATE_KEY]
                    : [],
            gasPrice: 20000000
        }
    },
    solidity: {
        version: "0.8.20",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    etherscan: {
        apiKey: {
            sepolia: ETHERSCAN_API_KEY || "",
            "op-sepolia": OP_ETHERSCAN_API_KEY || "",
            "base-sepolia": BASE_ETHERSCAN_API_KEY || "",
            amoy: AMOY_TESTNET_ETHERSCAN_API_KEY || ""
        },
        customChains: [
            {
                network: "op-sepolia",
                chainId: 11155420,
                urls: {
                    apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
                    browserURL: "https://sepolia-optimism.etherscan.io"
                }
            },
            {
                network: "base-sepolia",
                chainId: 84532,
                urls: {
                    apiURL: "https://api-sepolia.basescan.org/api",
                    browserURL: "https://sepolia.basescan.org"
                }
            },
            {
                network: "amoy",
                chainId: 80002,
                urls: {
                    apiURL: "https://www.oklink.com/api/v5/explorer/blockchain/summary?chainShortName=AMOY_TESTNET",
                    browserURL: "https://www.oklink.com/amoy"
                }
            }
        ]
    }
}

export default config

```

### metadata.json

```json
{
    "name": "Insufficient funds",
    "author": "Julien Béranger",
    "authorAddress": "0x27292E1a901E3E0bE7d144aDba4CAD07da2d8a42",
    "description": "This is a screenshot of an error I got as I was testing the NFT Registry API. It's my favorite error because it proves the app I'm building is working as intended. An empty wallet is a non-issue: send it a handful of ETH and everything will be just fine. \n\nMoney has no value. \n\nhttps://ultrasound.money/",
    "image": "ipfs://bafybeiakz6ddls5hrcgrcpse3ofuqxx3octuedtapyxnstktyoadtwjjqi",
    "imageSHA384": "88888",
    "license": "88888",
    "registrar": "Boischaut SVV",
    "attributes": [
        {
            "trait_type": "Resale rights (%)",
            "value": 10
        },
        {
            "trait_type": "View IP licence",
            "value": "88888"
        },
        {
            "trait_type": "Author",
            "value": "Julien Béranger"
        },
        {
            "trait_type": "Author address",
            "value": "0x27292E1a901E3E0bE7d144aDba4CAD07da2d8a42"
        },
        {
            "trait_type": "File",
            "value": "https://bafybeiakz6ddls5hrcgrcpse3ofuqxx3octuedtapyxnstktyoadtwjjqi.ipfs.w3s.link/"
        },
        {
            "trait_type": "FileSHA384",
            "value": "88888"
        },
        {
            "trait_type": "Registrar",
            "value": "Boischaut SVV"
        }
    ],
    "license_details": [
        {
            "trait_type": "exclusivity",
            "value": "true"
        },
        {
            "trait_type": "privateUse",
            "value": "true"
        },
        {
            "trait_type": "displayOnMarketplaces",
            "value": "true"
        },
        {
            "trait_type": "displayOnEveryMedia",
            "value": "false"
        },
        {
            "trait_type": "rightToAdapt",
            "value": "false"
        },
        {
            "trait_type": "rightToAddALogo",
            "value": "false"
        },
        {
            "trait_type": "merchandisingRights",
            "value": "false"
        }
    ]
}

```

### package.json

```json
{
    "name": "w3hc-hardhat-template",
    "version": "0.1.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "hardhat test",
        "compile": "hardhat compile",
        "deploy:arthera": "hardhat deploy --network arthera",
        "deploy:sepolia": "hardhat deploy --network sepolia",
        "deploy:arthera-testnet": "hardhat deploy --network arthera-testnet",
        "deploy:op-sepolia": "hardhat deploy --network op-sepolia --reset",
        "deploy:base-sepolia": "hardhat deploy --network base-sepolia --reset",
        "deploy:amoy": "hardhat deploy --network amoy --reset",
        "sourcify:arthera": "hardhat sourcify --network arthera",
        "sourcify:arthera-testnet": "hardhat sourcify --network arthera-testnet",
        "mint:arthera": "hardhat mint --network arthera",
        "mint:sepolia": "hardhat mint --network sepolia",
        "mint:arthera-testnet": "hardhat mint --network arthera-testnet",
        "mint:op-sepolia": "hardhat mint --network op-sepolia --amount",
        "send:arthera": "hardhat send --wallet 0x27292E1a901E3E0bE7d144aDba4CAD07da2d8a42 --network arthera --id",
        "send:sepolia": "hardhat send --wallet 0x27292E1a901E3E0bE7d144aDba4CAD07da2d8a42 --network sepolia --id",
        "send:arthera-testnet": "hardhat send --wallet 0x27292E1a901E3E0bE7d144aDba4CAD07da2d8a42 --network arthera-testnet --id",
        "send:op-sepolia": "hardhat send --wallet 0x27292E1a901E3E0bE7d144aDba4CAD07da2d8a42 --network op-sepolia --id",
        "bal": "npx hardhat run scripts/check-my-balance.ts --network",
        "prettier": "prettier --write ."
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@nomicfoundation/hardhat-chai-matchers": "^2.0.2",
        "@nomicfoundation/hardhat-ethers": "^3.0.4",
        "@nomicfoundation/hardhat-network-helpers": "^1.0.9",
        "@nomicfoundation/hardhat-toolbox": "^3.0.0",
        "@nomicfoundation/hardhat-verify": "^1.1.1",
        "@typechain/ethers-v6": "^0.4.3",
        "@typechain/hardhat": "^8.0.3",
        "@types/chai": "^4.3.5",
        "@types/mocha": "^10.0.1",
        "chai": "^4.3.8",
        "hardhat": "^2.17.2",
        "hardhat-gas-reporter": "^1.0.9",
        "prettier": "^2.8.8",
        "prettier-plugin-solidity": "^1.1.3",
        "solidity-coverage": "^0.8.4",
        "ts-node": "^10.9.1",
        "typechain": "^8.3.1",
        "typescript": "^5.2.2"
    },
    "dependencies": {
        "@nomiclabs/hardhat-ethers": "npm:hardhat-deploy-ethers@^0.4.1",
        "@openzeppelin/contracts": "^5.0.1",
        "@types/node": "^20.5.7",
        "cli-color": "^2.0.3",
        "dotenv": "^16.3.1",
        "ethers": "^6.7.1",
        "hardhat-deploy": "^0.11.37"
    }
}
```

### pnpm-lock.yaml

```yaml
lockfileVersion: '6.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

dependencies:
  '@nomiclabs/hardhat-ethers':
    specifier: npm:hardhat-deploy-ethers@^0.4.1
    version: /hardhat-deploy-ethers@0.4.1(@nomicfoundation/hardhat-ethers@3.0.4)(hardhat-deploy@0.11.37)(hardhat@2.17.2)
  '@openzeppelin/contracts':
    specifier: ^5.0.1
    version: 5.0.1
  '@types/node':
    specifier: ^20.5.7
    version: 20.5.7
  cli-color:
    specifier: ^2.0.3
    version: 2.0.3
  dotenv:
    specifier: ^16.3.1
    version: 16.3.1
  ethers:
    specifier: ^6.7.1
    version: 6.7.1
  hardhat-deploy:
    specifier: ^0.11.37
    version: 0.11.37

devDependencies:
```

[This file was cut: it has more than 500 lines]

```

## scripts


### scripts/check-my-balance.ts

```typescript
const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128)
import hre, { ethers, network } from "hardhat"
import fs from "fs"

async function main() {
    const [signer] = await ethers.getSigners()

    console.log(
        "\nCurrent signer wallet (" + signer.address + ") has",

        msg(
            ethers.formatEther(
                String(await ethers.provider.getBalance(signer.address))
            )
        ),
        "ETH."
    )
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})

```

### standard-nft-contracts_app_description.md

```markdown
# standard-nft-contracts


### .env.template

```
# Arthera Mainnet
ARTHERA_MAINNET_RPC_ENDPOINT_URL="https://rpc.arthera.net"
ARTHERA_MAINNET_PRIVATE_KEY="88888"

# Sepolia
SEPOLIA_RPC_ENDPOINT_URL="https://ethereum-sepolia.publicnode.com"
SEPOLIA_PRIVATE_KEY="88888"
ETHERSCAN_API_KEY="88888"

# OP Sepolia
OP_SEPOLIA_RPC_ENDPOINT_URL="https://sepolia.optimism.io"
OP_SEPOLIA_PRIVATE_KEY="88888"
OP_ETHERSCAN_API_KEY="88888"

# Base Sepolia
BASE_SEPOLIA_RPC_ENDPOINT_URL="https://sepolia.base.org"
BASE_SEPOLIA_PRIVATE_KEY="88888"
BASE_ETHERSCAN_API_KEY="88888"

# Amoy Testnet 
AMOY_TESTNET_RPC_ENDPOINT_URL="88888"
AMOY_TESTNET_PRIVATE_KEY="88888"
AMOY_TESTNET_ETHERSCAN_API_KEY="88888"

```

[This file was cut: it has more than 500 lines]

```

## tasks


### tasks/mint.ts

```typescript
import { task } from "hardhat/config"
var msg = require("cli-color").xterm(39).bgXterm(128)
// import * as artheraTestnetDeploymentData from "../deployments/arthera-testnet/NFT.json"
import * as sepoliaDeploymentData from "../deployments/sepolia/NFT.json"
// import * as artheraDeploymentData from "../deployments/arthera/NFT.json"
// import * as opSepoliaDeploymentData from "../deployments/op-sepolia/NFT.json"

task("mint", "Mint a given amount of ERC-20 tokens").setAction(
    async (amount, hre) => {
        const [signer] = await ethers.getSigners()
        const NFT = await ethers.getContractFactory("NFT")
        let addr
        switch (hre.network.name) {
            // case "arthera":
            //     addr = artheraDeploymentData.address
            //     break
            // case "arthera-testnet":
            //     addr = artheraTestnetDeploymentData.address
            //     break
            case "sepolia":
                addr = sepoliaDeploymentData.address
                break
            // case "op-sepolia":
            //     addr = opSepoliaDeploymentData.address
            //     break
        }
        const nft = new ethers.Contract(addr, NFT.interface, signer)
        const uri =
            "https://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u.ipfs.w3s.link/"
        const recipient = "0x27292E1a901E3E0bE7d144aDba4CAD07da2d8a42"
        const mint = await nft.safeMint(recipient, uri)
        const hash = mint.hash
        console.log(
            "Minted",
            msg(amount.amount),
            "units. \n\nTx hash:",
            msg(hash)
        )
    }
)

```

### tasks/send.ts

```typescript
import { task } from "hardhat/config"
var msg = require("cli-color").xterm(39).bgXterm(128)
// import * as artheraTestnetDeploymentData from "../deployments/arthera-testnet/NFT.json"
import * as sepoliaDeploymentData from "../deployments/sepolia/NFT.json"
// import * as artheraDeploymentData from "../deployments/arthera/NFT.json"
// import * as opSepoliaDeploymentData from "../deployments/op-sepolia/NFT.json"

task("send", "Send a given amount of tokens to a given address")
    .addParam("wallet")
    .addParam("id")
    .setAction(async (args, hre) => {
        const [signer] = await ethers.getSigners()
        const NFT = await ethers.getContractFactory("NFT")

        let addr
        switch (hre.network.name) {
            // case "arthera":
            //     addr = artheraDeploymentData.address
            //     break
            // case "arthera-testnet":
            //     addr = artheraTestnetDeploymentData.address
            //     break
            case "sepolia":
                addr = sepoliaDeploymentData.address
                break
            // case "op-sepolia":
            //     addr = opSepoliaDeploymentData.address
            //     break
        }
        const nft = new ethers.Contract(addr, NFT.interface, signer)
        const transfer = await nft.transferFrom(
            signer.address,
            args.wallet,
            args.id
        )
        const hash = transfer.hash
        console.log("\nNFT sent to", args.wallet, "\n\nTx hash:", msg(hash))
    })

```

## test


### test/NFT.ts

```typescript
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("Standard NFT", function () {
    async function deployContracts() {
        const [alice, bob, francis] = await ethers.getSigners()
        const uri =
            "https://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u.ipfs.w3s.link/"
        const NFT = await ethers.getContractFactory("NFT")
        const initialOwner = alice.address
        const name = "Sigirya NFT"
        const symbol = "SIG"
        const royalties = 400 // 4%
        const nft = await NFT.deploy(initialOwner, name, symbol, royalties)
        return { nft, alice, bob, francis, uri, royalties }
    }

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            const { nft, alice } = await loadFixture(deployContracts)
            expect(await nft.owner()).to.equal(alice.address)
        })
    })

    describe("Interactions", function () {
        it("Should mint 1 NFT", async function () {
            const { nft, alice, bob, francis, uri } = await loadFixture(
                deployContracts
            )
            await nft.safeMint(bob.address, uri)
            expect(await nft.ownerOf(1)).to.be.equal(bob.address)
            await expect(nft.connect(francis).safeMint(francis.address, uri)).to
                .be.reverted
        })
        it("Should transfer 1 unit", async function () {
            const { nft, alice, bob, francis, uri } = await loadFixture(
                deployContracts
            )
            await nft.safeMint(bob.address, uri)
            expect(await nft.ownerOf(1)).to.be.equal(bob.address)
            await nft.connect(bob).transferFrom(bob.address, francis.address, 1)
            expect(await nft.ownerOf(1)).to.be.equal(francis.address)
        })
        it("Should get royaltyInfo", async function () {
            const { nft, alice, bob, francis, uri, royalties } =
                await loadFixture(deployContracts)
            await nft.safeMint(bob.address, uri)
            expect(await nft.ownerOf(1)).to.be.equal(bob.address)
            expect(await nft.royaltyInfo(1, 10000)).to.deep.equal([
                alice.address,
                royalties
            ])
        })

        xit("Should burn", async function () {})
        xit("Should redeem", async function () {})
    })
})

```

### tsconfig.json

```json
{
    "compilerOptions": {
        "target": "es2020",
        "module": "commonjs",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true,
        "resolveJsonModule": true
    }
}

```

## Structure

```
├── .env.template
├── .github
    └── workflows
    │   └── node.js.yml
├── .gitignore
├── .prettierignore
├── .prettierrc
├── LICENSE.md
├── README.md
├── contracts
    ├── ERC2981ContractWideRoyalties.sol
    ├── IERC2981Royalties.sol
    └── NFT.sol
├── deploy
    └── deploy-nft.ts
├── hardhat.config.ts
├── metadata.json
├── package.json
├── pnpm-lock.yaml
├── scripts
    └── check-my-balance.ts
├── standard-nft-contracts_app_description.md
├── tasks
    ├── mint.ts
    └── send.ts
├── test
    └── NFT.ts
├── tsconfig.json
```

Timestamp: Dec 16 2024 10:04:01 AM UTC