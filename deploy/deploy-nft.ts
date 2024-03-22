import "@nomiclabs/hardhat-ethers"
const color = require("cli-color")
var msg = color.xterm(39).bgXterm(128)
import hre, { ethers, network } from "hardhat"
import { NFTStorage, File } from "nft.storage"

export default async ({ getNamedAccounts, deployments }: any) => {
    const { deploy } = deployments

    function wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const { deployer } = await getNamedAccounts()
    console.log(deployer)

    const client = new NFTStorage({
        token: String(process.env.NFT_STORAGE_API_KEY)
    })

    const name = "Insufficient funds"
    const symbol = "IF"
    const royalties = 400 // 4%

    // Metadata construction
    const metadata = {
        name: "Insufficient funds",
        description:
            "This is a screenshot of an error I got as I was testing the NFT Registry API. It's my favorite error because it proves the app I'm building is working as intended. An empty wallet is a non-issue: send it a handful of ETH and everything will be just fine. \n\nMoney has no value. \n\nhttps://ultrasound.money/",
        creatorName: "Julien Béranger",
        creatorAddress: "0x3e50D7fAF96B4294367cC3563B55CBD02bB4cE4d",
        image: "ipfs://bafybeiakz6ddls5hrcgrcpse3ofuqxx3octuedtapyxnstktyoadtwjjqi",
        attributes: [
            {
                trait_type: "Resale rights (%)",
                value: 4
            },

            {
                trait_type: "Creator",
                value: "Julien Béranger"
            },
            {
                trait_type: "Creator wallet address",
                value: "0x3e50D7fAF96B4294367cC3563B55CBD02bB4cE4d"
            }
        ]
    }

    // Metadata storage
    const metadataBlob = new Blob([JSON.stringify(metadata)])
    const metadataCid = await client.storeBlob(metadataBlob)
    const uri = "ipfs://" + metadataCid
    // const uri =
    //     "ipfs://bafkreidrrwa6eckvudnokxsttfayckjvilqpote6xn3fc5beler76py57u"

    const nft = await deploy("NFT", {
        from: deployer,
        args: [name, symbol, uri, deployer, royalties, deployer],
        log: true
    })

    console.log("nft.receipt.contractAddress:", nft.receipt.contractAddress)
    console.log("hre.network.name:", hre.network.name)

    switch (hre.network.name) {
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
                await wait(90 * 1000)
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
                await wait(20 * 1000)
                await hre.run("verify:verify", {
                    network: network.name,
                    address: nft.receipt.contractAddress,
                    constructorArguments: [
                        name,
                        symbol,
                        uri,
                        deployer,
                        royalties,
                        deployer
                    ]
                })
                console.log("Etherscan verification done. ✅")
            } catch (error) {
                console.error(error)
            }
            break
    }
}
export const tags = ["NFT"]
