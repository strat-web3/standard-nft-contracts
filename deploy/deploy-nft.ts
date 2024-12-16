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
