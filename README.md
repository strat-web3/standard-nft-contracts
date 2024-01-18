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
